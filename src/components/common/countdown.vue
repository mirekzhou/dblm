<template>
	<div class="count-down">
		<div class="content flex-center-y">
			<i class="icon-sand-glass"></i>
			<label>距离结束</label>
			<span>{{getTime.days}}天</span>
			<i>：</i>
			<span>{{formatTimeString(getTime.hours)}}</span>
			<i>：</i>
			<span>{{formatTimeString(getTime.minutes)}}</span>
			<i>：</i>
			<span>{{formatTimeString(getTime.seconds)}}</span>
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
				console.log('开始倒计时...');
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
				console.log('停止倒计时...');
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
		width:550px;
		padding:10px 50px 5px 50px;

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

			span {
				display:inline-block;
				width:$itemWidth;
				height:$itemWidth;
				line-height:$itemWidth;
				color:white;
				text-align:center;
				background-color:#d43328;
				font-size:12px;
				over-flow:hidden;
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