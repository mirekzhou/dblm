<template>
	<div class="issue-item">
		<div class="left-part">
			<img :src="item.imgSrc">
			<div class="issue-date">
				第{{item.issueDate}}期
			</div>
		</div>

		<div class="middle-part">
			<div class="description">
				{{item.description}}
			</div>

			<div class="price">
				<span>市场参考价</span>
				<span class="red-highlight">{{item.price}}元</span>
			</div>

			<amount-progress :item="item.progressData"></amount-progress>
		</div>

		<div class="right-part">
			<div class="button-zone">
				<div class="button">查看详情</div>
			</div>

			<div class="post-zone">
				<div class="in-gaming" v-if="item.drawStatus == 1">
				</div>

				<div class="draw-failed" v-if="item.drawStatus == 2">
				</div>

				<div class="wait-draw" v-if="item.drawStatus == 3">
				</div>

				<div class="win" v-if="item.drawStatus == 4">
					<span class="win-icon"></span>
					<span class="text">填写中奖信息</span>
				</div>

				<div class="lose" v-if="item.drawStatus == 5">
				</div>
			</div>
		</div>

		<div class="clear"></div>
	</div>
</template>

<script>
	import AmountProgress from '../common/amountProgress';

	export default {
		name: 'issue-item',

		props: [
			'item'
		],

		data: function () {
			return {
				statusDict: {
					1 : '夺宝中',
					2 : '开奖失败',
					3 : '等待开奖',
					4 : '中奖',
					5 : '未中奖'
				}
			}
		},

		components: {
			'amount-progress' : AmountProgress
		},

		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.issue-item {
		$itemHeight  :  198px;

		color: #676767;
		height: $itemHeight;
		width: 100%;

		.left-part {
			border: 1px solid #e6e6e6;
			float: left;
			height: 100%;
			width: 276px;
			position: relative;
			text-align: center;

			.issue-date {
				background-color: #d43328;
				color: #FFF;
				font-size: 12px;
				height: 24px;
				line-height: 24px;
				width: 118px;
				text-align: center;
				position: absolute;
				left: 0;
				top: 0;
			}

			img {
				height: 100%;
			}
		}

		.middle-part {
			float: left;
			height: 100%;
			margin-left: 28px;
			width: 550px;

			.price {
				margin-top: 16px;
				width: 100%;

				.red-highlight {
					color: #d53328;
				}
			}

			.amount-progress {
				margin-top: 38px;
			}
		}

		.right-part {
			float: right;
			width: 220px;
			text-align: left;

			.button-zone {
				width: 100%;

				.button {
					background-color: #d43328;
					color: #FFF;
					cursor: pointer;
					height: 32px;
					line-height: 32px;
					text-align: center;
					width: 98px;
				}
			}

			.post-zone {
				.draw-failed {
					background-image: url(../../assets/draw-status-sprite.png);
					background-position: 0 0;
					height: 90px;
					margin-top: 65px;
					vertical-align: middle;
					width: 114px;
				}

				.wait-draw {
					background-image: url(../../assets/draw-status-sprite.png);
					background-position: 0 -92px;
					height: 90px;
					vertical-align: middle;
					margin-top: 65px;
					width: 114px;
				}

				.win {
					margin-top: 90px;

					.win-icon {
						background-image: url(../../assets/draw-status-sprite.png);
						background-position: -115px 0;
						height: 46px;
						display: inline-block;
						vertical-align: middle;
						width: 38px;
					}

					.text {
						color: #d43328;
						cursor: pointer;
						text-decoration: underline;
					}
				}

				.lose {
					background-image: url(../../assets/draw-status-sprite.png);
					background-position: -152px 0;
					height: 88px;
					display: inline-block;
					margin-top: 56px;
					vertical-align: middle;
					width: 160px;
				}
			}
		}
	}
</style>