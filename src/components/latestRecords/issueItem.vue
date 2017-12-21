<template>
	<div class="issue-item">
		<div class="left-part">
			<img :src="item.imgSrc">

            <div class="win-user" v-if="item.winUser && item.winNumber">
                <div class="left-sec">
                    <img :src="winUserHead" />
                </div>

                <div class="right-sec">
                    <div>中奖用户：{{item.winUser}}</div>
                    <div>中奖号码：{{item.winNumber}}</div>
                </div>

                <div class="clear"></div>
            </div>
		</div>

		<div class="middle-part">
			<div class="issue-date">第{{item.issueDate}}期</div>

			<div class="description">{{item.description}}</div>

			<div class="price">
				<span>市场参考价</span>
				<span class="red-highlight">{{item.price}}元</span>
			</div>

			<div class="deadline">开奖时间：{{item.deadline}}</div>

			<amount-progress :item="item.progressData"></amount-progress>
		</div>

		<div class="right-part">
			<div class="button-zone">
				<div class="button" v-on:click="redirectTo('/latestDetail')">查看详情</div>
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

				<div class="group-failed" v-if="item.drawStatus == 6">
					<span class="group-failed-icon"></span>
					<p class="text">未达到参与人数要求</p>
				</div>
			</div>
		</div>

		<div class="clear"></div>
	</div>
</template>

<script>
	import AmountProgress from '../common/amountProgress';
	import headerImg      from '../../assets/prize_info_header.png';

	export default {
		name: 'issue-item',

		props: [
			'item'
		],

		data: function () {
			return {
				winUserHead: headerImg,

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
			redirectTo: function (path) {
				this.$router.push(path);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.issue-item {
		$itemHeight  :  258px;

		color: #676767;
		height: $itemHeight;
		width: 100%;

		.left-part {
			border: 1px solid #e6e6e6;
			float: left;
			height: 100%;
			width: 296px;
			position: relative;
			text-align: center;

			img {
				height: 100%;
			}

            .win-user {
                width: 100%;
                height: 70px;
                position: absolute;
                left: 0;
                bottom: 0;
                color: #fff;
                background-repeat: no-repeat;
                background-size: 100% 100px;
                background-image: url("../../assets/red-bg.png");

                .left-sec {
                    float: left;
                    width: 83px;
                    text-align: right;

                    img {
                        border: 2px solid white;
                        border-radius: 50%;
                        height: 47px;
                        width: 47px;
                        margin-top: 16px;
                    }
                }

                .right-sec {
                    color: #FFF;
                    font-size: 14px;
                    float: right;
                    line-height: 20px;
                    width: 194px;
                    text-align: left;
                    margin-top: 26px;
                }
            }
		}

		.middle-part {
			float: left;
			height: 100%;
			margin-left: 28px;
			width: 550px;

			.issue-date {
				background-color: #d43328;
				color: #FFF;
				font-size: 12px;
				height: 24px;
				line-height: 24px;
				width: 118px;
				text-align: center;
			}

			.description {
				margin-top: 17px;
			}

			.price {
				margin-top: 17px;
				width: 100%;

				.red-highlight {
					color: #d53328;
				}
			}

			.deadline {
				margin-top: 16px;
			}

			.amount-progress {
				margin-top: 19px;
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
					font-size: 14px;
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

				.group-failed {
					margin-top: 115px;

					.group-failed-icon {
						background-image: url(../../assets/draw-status-sprite.png);
						background-position: -152px -92px;
						height: 90px;
						display: inline-block;
						vertical-align: middle;
						width: 114px;
					}

					.text {
						color: #707070;
					}
				}
			}
		}
	}
</style>