<template>
	<div class="win-demo">
		<div class="part1">
			<img :src="item.imgSrc">
		</div>

		<div class="part2">
			<div class="product-name">
				{{item.productName}}
			</div>

			<div class="price">
				<span>参考价格：</span>
				<span class="red-highlight">{{item.price}}元</span>
			</div>

			<div class="issue-date">
				<span>开奖期数：</span>
				<span class="red-highlight">{{item.issueDate}}元</span>
			</div>

			<div class="start-time">
				开始时间：{{item.startTime}}
			</div>
		</div>

		<div class="part3">
			<div class="title">收货地址及联系方式</div>

			<div class="add-address" v-if="item.receiveStatus == 0">
				+添加
			</div>

			<div class="receive-info" v-if="item.receiveStatus != 0">
				<div class="receiver-info" v-bind:class="{'narrow': item.receiveStatus == 1}">
					<div class="address">
						{{item.receiveInfo.address}}
					</div>

					<div class="receiver" v-if="item.receiveStatus != 0">
						联系人：{{item.receiveInfo.receiver}} {{item.receiveInfo.phone}}
					</div>
				</div>

				<div class="modify-address" v-if="item.receiveStatus == 1">
					<span>修改地址</span>
				</div>

				<div class="clear" v-if="item.receiveStatus == 1"></div>
			</div>
		</div>

		<div class="part4">
			<div class="title">物流信息</div>

			<div class="express" v-if="item.receiveStatus == 2">
				{{item.expressInfo.expressName}}： {{item.expressInfo.serialNo}}
			</div>
		</div>

		<div class="part5">
			<div class="title">收货反馈</div>

			<div class="feedback">
				{{statusDict[item.receiveStatus]}}
			</div>
		</div>

		<div class="clear"></div>
	</div>
</template>

<script>
	export default {
		name: 'win-demo',

		props: [
			'item'
		],

		data: function () {
			return {
				statusDict: {
					0: '',
					1: '',
					2: '已发货'
				}
			}
		},

		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.win-demo {
		$itemHeight : 156px;

		border-bottom: 1px solid #e5e5e5;
		color: #414141;
		height: 216px;
		padding: 30px 0;

		.part1 {
			background-color: red;
			float: left;
			height: $itemHeight;
			width: 296px;

			img {
				height: 100%;
			}
		}

		.part2 {
			float: left;
			height: $itemHeight;
			margin-left: 46px;
			width: 350px;

			.product-name {
				margin-top: 20px;
			}

			.price {
				margin-top: 14px;
			}

			.issue-date {
				margin-top: 14px;
			}

			.start-time {
				margin-top: 14px;
			}

			.red-highlight {
				color: #d53328;
			}
		}

		.part3 {
			float: left;
			height: $itemHeight;
			width: 200px;
			text-align: left;

			.title {
				margin-top: 20px;
				width: 100%;
			}

			.receive-info {
				.receiver-info {
					.address {
						font-size: 12px;
						margin-top: 25px;
					}

					.receiver {
						font-size: 12px;
						margin-top: 10px;
					}
				}
			}

			.narrow {
				float: left;
				height: 100%;
				width: 140px;
			}

			.modify-address {
				float: right;
				font-size: 12px;
				margin-top: 40px;
				width: 60px;
				text-align: center;

				span {
					color: #d53328;
					cursor: pointer;
					text-decoration: underline;
				}
			}

			.add-address {
				background-color: #d43328;
				border-radius: 6px;
				color: #FFF;
				cursor: pointer;
				font-size: 12px;
				height: 32px;
				line-height: 32px;
				text-align: center;
				width: 98px;
				margin-top: 40px;
			}
		}

		.part4 {
			float: left;
			height: $itemHeight;
			width: 200px;
			text-align: center;

			.title {
				margin-top: 20px;
			}

			.express {
				font-size: 12px;
				margin-top: 25px;
			}
		}

		.part5 {
			float: left;
			height: $itemHeight;
			width: 90px;
			text-align: center;

			.title {
				margin-top: 20px;
			}

			.feedback {
				font-size: 12px;
				margin-top: 25px;
			}
		}
	}
</style>