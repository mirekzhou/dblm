<template>
	<div class="treasure clear">
			<div class="treasure-inner" v-for="item in treasureData">
				<div class="cycle">
					<p>{{item.cycle}}</p>
				</div>

				<div class="box">
					<img :src="item.imgUrl" alt="">
					<p class="prize">{{item.prize}}</p>
					<p class="price">市场参考价：<span>{{item.price}}</span></p>
						<home-progress :item="item.progressData"></home-progress>
				</div>
				
				<div class="treasure-bottom">
					
					<div class="countdown">
						<timer :secs="seconds"></timer>
					</div>

					<div class="drawLottery">
						<div class="draw" v-show="item.drawLotteryStatus === 1">
							<p>参与夺宝</p>
						</div>

						<div class="share" v-show="item.drawLotteryStatus === 2">
							<p>分享夺宝</p>
						</div>

						<div class="already" v-show="item.drawLotteryStatus === 3">
							<p>已开奖</p>
						</div>

						<div class="will-start" v-show="item.drawLotteryStatus === 4">
							<p>即将开始</p>
						</div>
					</div>
				</div>
			</div>
	</div>
</template>

<script>
	import HomeProgress 	from './homeProgress';
	import Timer  			from './timer';
	import '../../scss/common.scss';

	export default {
		name: 'treasure',

		data: function () {
			return {
				seconds:(new Date('2017-11-30')-new Date()),
			}
		},

		props: [
		'treasureData'
		],

		components: {
			'home-progress' : HomeProgress,
			'timer'			: Timer
		},

		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	$boxWidth		: 	 557px;
	$imgHeight		:	 275px;
	
	.treasure {
		margin-top: 20px;
		color: #6e6e6e;

		.treasure-inner {
			float: left;
			width: 596px;
			height: 504px;
			text-align: center;
			position: relative;
			border: 1px solid #ececec;
			margin-top: 6px;

			&:nth-child(2n) {
				float: right;
			}

			.cycle {
				background: #d53328;
				position: absolute;
				top: 0;
				left: 0;
				width: 143px;
				height: 34px;
				color: #fff;
				font-size: 12px;
				padding-top: 10px; 
			}

			.box {
				width: $boxWidth;
				margin: 0 auto; 
				text-align: left;

				img {
					width: 100%;
					height: $imgHeight;
				}

				.prize {
					margin-top: 5px;
					line-height: 26px;
				}

				.price {
					color: #b7b7b7;
					margin-top: 6px;

					span {
						color: #d63328;
					}
				}
			}

			.treasure-bottom {
				width: 100%;
				height: 74px;
				position: absolute;
				bottom: 0;
				background: #ececec;


				.countdown {
					width: 557px;
					margin: 0 auto;
				}

				.drawLottery {
					width: 119px;
					height: 36px;
					border-radius: 5px;
					position: absolute;
					top: 50%;
					right: 25px;
					transform: translate(0,-50%);
					color: #fff;
					font-size: 12px;
					overflow: hidden;

					.draw {
						height: 100%;
						background-color: #d53328;
						overflow: hidden;

						p {	
							margin-top: 12px;
						}
					}

					.share {
						height: 100%;
						background-color: #d55528;
						overflow: hidden;

						p {
							margin-top: 12px;
						}
					}

					.already {
						height: 100%;
						background-color: #c2c2c2;
						overflow: hidden;

						p {
							margin-top: 12px;
						}
					}

					.will-start {
						height: 100%;
						background-color: #e08f8a;
						overflow: hidden;

						p {
							margin-top: 12px;
						}
					}

				}
			}
		}
	}
</style>