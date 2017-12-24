<template>
	<div class="treasure clear">
			<div class="treasure-inner" v-for="item in treasureData">
				<div class="cycle">
					<p>第{{item.cycle}}期</p>
				</div>

				<div class="box">
					<img :src="item.imgUrl" v-on:click="redirectTo('/issueDetail')">
					<p class="prize" v-on:click="redirectTo('/issueDetail')">{{item.prize}}</p>
					<p class="price">市场参考价：<span>{{item.price}}</span></p>
					<home-progress :item="item.progressData"></home-progress>
				</div>

				<div class="treasure-bottom">
					<div class="left-part">
						<timer :secs="seconds"></timer>
					</div>

					<div class="right-part">
						<div class="button draw" v-on:click="goDetail" v-show="item.drawLotteryStatus === 1">
							参与夺宝
						</div>

						<div class="button share" v-show="item.drawLotteryStatus === 2" v-on:click="showShareDialog">
							分享夺宝
						</div>

						<div class="button already" v-show="item.drawLotteryStatus === 3">
							已结束
						</div>

						<div class="button will-start" v-show="item.drawLotteryStatus === 4">
							即将开始
						</div>
					</div>

					<div class="clear"></div>
				</div>
			</div>
	</div>
</template>

<script>
	import { mapState } 	from 'vuex';
	import HomeProgress 	from './homeProgress';
	import Timer  			from './timer';
	import '../../scss/common.scss';

	export default {
		name: 'treasure',

		data: function () {
			return {
				seconds:(new Date('2017-12-30')-new Date()),
			}
		},

		props: [
			'treasureData',
			"shareDialogStatus"
		],

		components: {
			'home-progress' : HomeProgress,
			'timer'			: Timer
		},

		methods: {
			showShareDialog: function () {
				this.$store.dispatch('setShareDialogStatus', {status: true});
			},

			redirectTo: function (path) {
				this.$router.push(path);
			},

			goDetail: function () {
				this.$router.push('/issueDetail');
			}
		}
	}
</script>

<style lang="scss" scoped>
	$boxWidth		: 	 560px;
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
				line-height: 34px;
				color: #fff;
				font-size: 14px;
			}

			.box {
				width: $boxWidth;
				margin: 0 auto;
				text-align: left;

				img {
					cursor: pointer;
					width: 100%;
					height: $imgHeight;
				}

				.prize {
					cursor: pointer;
					color: #333333;
					font-size: 14px;
					margin-top: 10px;
					line-height: 26px;
				}

				.price {
					color: #666666;
					font-size: 14px;
					margin-top: 6px;
					margin-bottom: 18px;

					span {
						color: #d63328;
						font-weight: bold;
					}
				}
			}

			.treasure-bottom {
				width: 100%;
				height: 74px;
				position: absolute;
				bottom: 0;
				background: #ececec;
				padding: 0 20px;

				.left-part {
					height: 100%;
					float: left;
					width: 370px;
				}

				.right-part {
					float: right;
					height: 74px;
					line-height: 74px;
					text-align: right;

					.button {
						border-radius: 5px;
						color: #FFF;
						cursor: pointer;
						display: inline-block;
						font-size: 14px;
						height: 37px;
						line-height: 37px;
						vertical-align: middle;
						width: 118px;
						text-align: center;
					}

					.draw {
						background-color: #d53328;
					}

					.share {
						background-color: #d55528;
					}

					.already {
						background-color: #c2c2c2;
					}

					.will-start {
						background-color: #e08f8a;
					}

				}
			}
		}
	}
</style>