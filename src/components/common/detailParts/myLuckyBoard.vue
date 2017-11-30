<template>
	<div class="my-lucky-board">
		<div class="title">我的幸运码：{{luckyNumber}}</div>

		<div class="content">
			<div class="left-part">
				<div class="wrapper">
					<div class="table">
						<div class="thead">
							<div class="tr">
								<div class="td td1">助攻好友</div>
								<div class="td td2">日期</div>
								<div class="td td3">夺宝助攻获得号码</div>
								<div class="clear"></div>
							</div>
						</div>

						<div class="tbody">
							<div class="tr" v-for="item in leftList">
								<div class="td td1">
									<span class="head-icon"></span>
									<span class="text">{{item.phone}}</span>
								</div>
								<div class="td td2">{{item.date}}</div>
								<div class="td td3">
									<span>{{item.number}}</span>
								</div>
								<div class="clear"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="right-part">
				<div class="wrapper">
					<div class="table">
						<div class="thead">
							<div class="tr">
								<div class="td td1">助攻好友</div>
								<div class="td td2">日期</div>
								<div class="td td3">夺宝助攻获得号码</div>
								<div class="clear"></div>
							</div>
						</div>

						<div class="tbody">
							<div class="tr" v-for="item in rightList">
								<div class="td td1">
									<span class="head-icon"></span>
									<span class="text">{{item.phone}}</span>
								</div>
								<div class="td td2">{{item.date}}</div>
								<div class="td td3">
									<span>{{item.number}}</span>
								</div>
								<div class="clear"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="clear"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'my-lucky-board',

		props: [
		],

		data: function () {
			return {
				luckyNumber: '10101010',

				leftList: [
					{phone: '139****1234', date: '2017-09-31 17:30:23', number: '156489'},
					{phone: '139****1234', date: '2017-09-31 17:30:23', number: '156489'},
					{phone: '139****1234', date: '2017-09-31 17:30:23', number: '156489'},
					{phone: '139****1234', date: '2017-09-31 17:30:23', number: '156489'},
					{phone: '139****1234', date: '2017-09-31 17:30:23', number: '156489'}
				],

				rightList: [
					{phone: '139****1234', date: '2017-09-31 17:30:23', number: '156489'},
					{phone: '139****1234', date: '2017-09-31 17:30:23', number: '156489'},
					{phone: '139****1234', date: '2017-09-31 17:30:23', number: '156489'},
					{phone: '139****1234', date: '2017-09-31 17:30:23', number: '156489'},
					{phone: '139****1234', date: '2017-09-31 17:30:23', number: '156489'}
				]
			}
		},

		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.my-lucky-board {
		margin-top: 30px;
		width: 100%;

		.title {
            background-color: #d43328;
            color: #FFF;
            height: 50px;
            line-height: 50px;
            text-align: center;
		}

		.content {
			border: 1px solid #F0F0F0;
			border-top: 0;
			height: 500px;

			.left-part {
				float: left;
				height: 100%;
				padding: 15px 0 18px 35px;
				width: 50%;

				.wrapper {
					border-right: 1px solid #F0F0F0;
					height: 100%;
					padding-right: 18px;
					width: 100%;
				}
			}

			.right-part {
				float: right;
				height: 100%;
				padding: 15px 19px 0 35px;
				width: 50%;

				.wrapper {
					height: 100%;
					padding-right: 18px;
					width: 100%;
				}
			}

			.table {
				.tr {
					width: 100%;

					.td {
						height: 46px;
						line-height: 46px;
						float: left;
						text-align: center;
					}

					.td1 {
						width: 180px;

						.head-icon {
							background-image: url("../../../assets/header.png");
							display: inline-block;
							width: 46px;
							height: 46px;
							line-height: 46px;
							margin-right: 20px;
						}

						.text {
							vertical-align: top;
						}
					}

					.td2 {
						width: 200px;
					}

					.td3 {
						width: 140px;

						span {
							background-color: #e1e1e1;
							border-radius: 4px;
							padding: 0 20px;
						}
					}
				}

				.tbody {
					.tr {
						border-bottom: 1px solid #F0F0F0;
						padding: 18px 0;
					}
				}
			}
		}
	}
</style>