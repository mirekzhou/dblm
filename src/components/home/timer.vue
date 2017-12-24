<template>
	<div class="timer clear">
		<div class="content">
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
	</div>
</template>

<script>
	import '../../scss/common.scss';

	export default {
		name: 'timer',

		props: {
			secs: Number,
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
	.timer {
		$itemWidth : 40px;

		border:1px solid #F0F0F0;
		color: #000;

		.content {
			height: 74px;
			line-height: 74px;
			text-align: left;

			.icon-sand-glass {
			    margin-right:10px;
			    display: inline-block;
			    background: url(../../assets/common-sprite.png) -43px 0;
			    vertical-align: middle;
			    width: 19px;
			    height: 20px;
			}

			label {
				margin-right:5px;
				vertical-align: middle;
			}

			.item {
				color: #d43328;
				display:inline-block;
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
	}
</style>