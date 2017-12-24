<template>
	<div class="count-down">
		<div class="content flex-center-y">
			<i class="icon-sand-glass"></i>

			<label>距离结束</label>

			<span class="item">
				<span class="number">{{getTime.days}}</span>
				天
			</span>

			<span class="item">
				<span class="number">{{formatTimeString(getTime.hours)}}</span>
				时
			</span>

			<span class="item">
				<span class="number">{{formatTimeString(getTime.minutes)}}</span>
				分
			</span>

			<span class="item number">
				<span class="number">{{formatTimeString(getTime.seconds)}}</span>
				秒
			</span>
		</div>

		<div class="desc">{{desc}}</div>
	</div>
</template>

<script>
	export default {
		name: 'count-down',

		props: {
			secs: Number,
			desc: String
		},

		data: function () {
			return {
				seconds: 0
			}
		},

		mounted: function() {
			this.startCountdown();
	    },

		activated: function () {
			this.startCountdown();
		},

		deactivated: function () {
			this.stopCountdown();
		},

		watch: {
			secs: function () {
				this.seconds = this.secs;
			}
		},

		methods: {
			startCountdown: function () {
		        var _this = this;

		        this.seconds = this.secs;

		        if (this.countDown) {
		        	return;
		        }

		        if (this.seconds > 0) {
			        this.countDown = setInterval( function () {
			            _this.seconds = _this.seconds - 1000;
			        }, 1000);
		        } else {
		        	this.stopCountdown();
		        }
			},

			stopCountdown: function () {
				clearInterval(this.countDown);
				this.countDown = null;
			},

			formatTimeString: function ( number ) {
				if (number > 9) {
					return number;
				} else {
					return '0' + number;
				}
			}
		},

		computed: {
		 	getTime:function(){
	 			var seconds       =  this.seconds/1000;
				var days          =  seconds / 60 / 60 / 24;
				var daysRound     =  Math.floor(days);
				var hours         =  seconds / 60 / 60 - (24 * daysRound);
				var hoursRound    =  Math.floor(hours);
				var minutes       =  seconds /60 - (24 * 60 * daysRound) - (60 * hoursRound);
				var minutesRound  =  Math.floor(minutes);
				var secondsRound  =  Math.floor(seconds - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound));

				return {
					"days"    : daysRound,
					"hours"   : hoursRound,
					"minutes" : minutesRound,
					"seconds" : secondsRound
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.count-down {
		$itemWidth : 40px;

		color: #000;
		border:1px solid #F0F0F0;
		width: 550px;
		padding:10px 0px 5px 85px;

		.content {
			.icon-sand-glass {
			    margin-right:10px;
			    display: inline-block;
			    background: url(../../assets/common-sprite.png) -43px 0;
			    width: 19px;
			    height: 20px;
			}

			label {
				margin-right:5px;
			}

			.item {
				color: #d43328;
				display:inline-block;
				font-weight: bold;
				height: $itemWidth;
				line-height: $itemWidth;
				margin-left: 10px;
				text-align:center;
				font-size: 14px;
    			vertical-align: middle;

				.number {
					font-size: 22px;
					font-weight: 400;
					vertical-align: bottom;
				}
			}

			i {
				display:inline-block;
				width:$itemWidth;
				height:$itemWidth;
				line-height:$itemWidth;
				color:red;
				font-style: normal;
			}
		}

		.desc {
			margin-top:10px;
			font-size:12px;
			color:#707070;
		}
	}
</style>