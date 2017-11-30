<template>
	<div class="my-lucky-board">
		<div class="title">我的夺宝数据</div>

		<div class="content">
			<div class="left-part">
				<div class="wrapper">
					<div class="table">
						<div class="thead">
							<div class="tr">
								<div class="td td1">助攻好友</div>
								<div class="td td2">日期</div>
								<div class="td td3">夺宝助攻获得号码</div>
							</div>
						</div>

						<div class="tbody">
							<div class="tr">
								<div class="td td1"></div>
								<div class="td td2"></div>
								<div class="td td3"></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="right-part">
				<div class="wrapper">
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
				luckyNumber: '10101010'
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

					.table {
						.thead {

						}

						.tbody {

						}

						.tr {
							width: 100%;
						}
					}
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
		}
	}
</style>