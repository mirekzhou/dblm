<template>
	<div class="my-lucky-board">
		<div class="title">我的幸运码：{{luckyNumber}}</div>

		<div class="content">
			<div class="table">
				<div class="thead">
					<div class="tr">
						<div class="left-part">
							<div class="td td1">助攻好友</div>
							<div class="td td2">日期</div>
							<div class="td td3">夺宝助攻获得号码</div>
							<div class="clear"></div>
						</div>

						<div class="right-part">
							<div class="td td1">助攻好友</div>
							<div class="td td2">日期</div>
							<div class="td td3">夺宝助攻获得号码</div>
							<div class="clear"></div>
						</div>

						<div class="clear"></div>
					</div>
				</div>

				<div class="tbody">
					<div class="tr" v-for="i in len">
						<div class="left-part">
							<div class="td td1">
								<span class="head-icon"></span>
								<span class="text">{{leftList[i-1].phone}}</span>
							</div>
							<div class="td td2">{{leftList[i-1].date}}</div>
							<div class="td td3">
								<span>{{leftList[i-1].number}}</span>
							</div>
							<div class="clear"></div>
						</div>

						<div class="right-part" v-if="rightList[i-1]">
							<div class="td td1">
								<span class="head-icon"></span>
								<span class="text">{{rightList[i-1].phone}}</span>
							</div>
							<div class="td td2">{{rightList[i-1].date}}</div>
							<div class="td td3">
								<span>{{rightList[i-1].number}}</span>
							</div>
							<div class="clear"></div>
						</div>

						<div class="clear"></div>
					</div>
				</div>

				<div class="line"></div>
			</div>
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

				list: [
					{phone: '139****1234', date: '2017-09-31 17:30:23', number: '156489'},
					{phone: '139****1234', date: '2017-09-31 17:30:23', number: '156489'},
					{phone: '139****1234', date: '2017-09-31 17:30:23', number: '156489'},
					{phone: '139****1234', date: '2017-09-31 17:30:23', number: '156489'},
					{phone: '139****1234', date: '2017-09-31 17:30:23', number: '156489'},
					{phone: '139****1234', date: '2017-09-31 17:30:23', number: '156489'},
					{phone: '139****1234', date: '2017-09-31 17:30:23', number: '156489'},
					{phone: '139****1234', date: '2017-09-31 17:30:23', number: '156489'},
					{phone: '139****1234', date: '2017-09-31 17:30:23', number: '156489'},
					{phone: '139****1234', date: '2017-09-31 17:30:23', number: '156489'},
					{phone: '139****1234', date: '2017-09-31 17:30:23', number: '156489'},
					{phone: '139****1234', date: '2017-09-31 17:30:23', number: '156489'},
					{phone: '139****1234', date: '2017-09-31 17:30:23', number: '156489'},
					{phone: '139****1234', date: '2017-09-31 17:30:23', number: '156489'},
					{phone: '139****1234', date: '2017-09-31 17:30:23', number: '156489'},
					{phone: '139****1234', date: '2017-09-31 17:30:23', number: '156489'},
					{phone: '139****1234', date: '2017-09-31 17:30:23', number: '156489'},
					{phone: '139****1234', date: '2017-09-31 17:30:23', number: '156489'},
					{phone: '139****1234', date: '2017-09-31 17:30:23', number: '156489'}
				]
			}
		},

		computed: {
			leftList: function () {
				var i;
				var arr = [];

				for (i = 0; i < this.list.length; i++) {
					if (i % 2 == 0) {
						arr.push(this.list[i]);
					}
				}

				return arr;
			},

			rightList: function () {
				var i;
				var arr = [];

				for (i = 0; i < this.list.length; i++) {
					if (i % 2 == 1) {
						arr.push(this.list[i]);
					}
				}

				return arr;
			},

			len: function () {
				return this.leftList.length;
			}
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

			.table {
				padding: 15px 18px 18px 35px;
				position: relative;

				.tr {
					width: 100%;

					.left-part {
						float: left;
					}

					.right-part {
						float: right;
					}

					.td {
						border-bottom: 1px solid #F0F0F0;
						height: 82px;
						line-height: 82px;
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
							vertical-align: middle;
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
					height: 410px;
					overflow-y: auto;
				}

				.line {
					height: 445px;
					width: 1px;
					border-right: 1px solid #F0F0F0;
					position: absolute;
					top: 30px;
					left: 50%;
				}
			}
		}
	}
</style>