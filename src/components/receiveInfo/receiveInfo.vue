<template>
	<div class="page receive-info">
		<div class="wrapper">
			<div class="title">收货地址</div>

			<div class="row receiver">
				<span class="name">收货人：</span>
				<input v-model="receiver" placeholder="长度不超过10个汉字" />
			</div>

			<div class="row">
				<span class="name">收货地址：</span>
				<v-distpicker :placeholders="placeholders"
							  @selected="onSelectAddress">
				</v-distpicker>
			</div>

			<div class="row">
				<span class="name">详细地址：</span>
				<textarea v-model="address" placeholder="不超过50个汉字" maxlength="50">
				</textarea>
			</div>

			<div class="row">
				<span class="name">电话号码：</span>
				<input v-model="phone" placeholder="6到20个数字" maxlength="20" />
			</div>

			<div class="row">
				<label>
					<input type="checkbox" v-model="setDefault" />
					设为默认地址
				</label>
			</div>

			<div class="row">
				<div class="save">保存</div>
			</div>

			<div class="table-zone">
				<div class="notice">最多保存15条收货地址</div>

				<div class="table">
					<div class="theader">
						<div class="tr">
							<div class="td td1">收货人</div>
							<div class="td td2">所在地区</div>
							<div class="td td3">详细地址</div>
							<div class="td td4">电话/手机</div>
							<div class="td td5">操作</div>
						</div>
					</div>

					<div class="tbody">
						<div class="tr" v-for="item in list">
							<div class="td td1">
								<span class="default" v-show="item.default">默认地址</span>
								<span>{{item.name}}</span>
							</div>

							<div class="td td2">{{item.area}}</div>
							<div class="td td3">{{item.address}}</div>
							<div class="td td4">{{item.phone}}</div>

							<div class="td td5">
								<span class="action">删除</span>
								<span class="gap">|</span>
								<span class="action">修改</span>
								<span class="gap">|</span>
								<span class="action">设为默认</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import VDistpicker from 'v-distpicker'

	export default {
		name: 'receive-info',

		props: [
		],

		data: function () {
			return {
				placeholders: {
					province: '------- 省 --------',
					city: '--- 市 ---',
					area: '--- 区 ---',
				},

				setDefault: true,
				phone: '',
				area: '',
				address: '',
				receiver: '',

				list: [
					{
						default: true,
						name: '张某某',
						area: '四川省成都市武侯区',
						address: '坡子街坡子小区188号',
						phone: '13812345678'
					},
					{
						default: false,
						name: '张某某',
						area: '四川省成都市武侯区',
						address: '坡子街坡子小区188号',
						phone: '13812345678'
					},
					{
						default: false,
						name: '张某某',
						area: '四川省成都市武侯区',
						address: '坡子街坡子小区188号',
						phone: '13812345678'
					},
					{
						default: false,
						name: '张某某',
						area: '四川省成都市武侯区',
						address: '坡子街坡子小区188号',
						phone: '13812345678'
					},
					{
						default: false,
						name: '张某某',
						area: '四川省成都市武侯区',
						address: '坡子街坡子小区188号',
						phone: '13812345678'
					}
				]
			}
		},

		components: {
			'v-distpicker' : VDistpicker
		},

		methods: {
			handleChange (value) {
				console.log(value)
			},

			onSelectAddress: function (data) {
				this.area = data.province.value + data.city.value + data.area.value;
				console.log(this.area);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.receive-info {
		$wrapperWidth   : 1200px;

		.wrapper {
			color: #666666;
			height: 100%;
			width: $wrapperWidth;
			margin: 0 auto;
			padding: 20px 0;

			.title {
				background-color: #f7f7f7;
				color: #666666;
				height: 50px;
				line-height: 50px;
				padding-left: 12px;
			}

			.row {
				margin-top: 20px;

				.name {
					display: inline-block;
					font-size: 12px;
					width: 65px;
					text-align: right;
				}

				input {
					height: 24px;
					border: 1px solid #e5e5e5;
					text-indent: 10px;
					width: 438px;
				}

				.address {
					display: inline-block;

					select {
					    border-radius: 0;
					    font-size: 12px;
					    height: 28px;
					}
				}

				textarea {
					background-color: #f2f2f2;
					height: 120px;
					border: 1px solid #e5e5e5;
					padding-top: 10px;
					text-indent: 10px;
					width: 438px;
				}

				label {
					cursor: pointer;
					margin-left: 65px;

					input {
						height: 16px;
						width: 16px;
						vertical-align: -3px;
					}
				}

				.save {
					background-color: #d43328;
					border-radius: 6px;
					color: #FFF;
					cursor: pointer;
					font-size: 12px;
					height: 32px;
					line-height: 32px;
					text-align: center;
					width: 98px;
					margin-left: 65px;
				}
			}

			.receiver {
				margin-top: 30px;
			}

			.table-zone {
				margin-top: 38px;

				.notice {
					color: #d53328;
					font-size: 14px;
				}

				.table {
					border: 1px solid #e5e5e5;
					font-size: 14px;
					margin-top: 14px;

					.theader {
						background-color: #f2f2f2;
						color: #000;
						width: 100%;
					}

					.tbody {
						color: #666666;
					}

					.tr {
						border-top: 1px solid #e5e5e5;
						height: 54px;
						line-height: 54px;

						.td {
							float: left;
							text-align: center;
						}

						.td1 {
							width: 140px;
							text-align: right;

							.default {
								border: 1px solid #e5e5e5;
								cursor: pointer;
								padding: 0 4px;
								margin-right: 10px;

								&:hover {
									color: #000;
								}
							}
						}

						.td2 {
							width: 380px;
						}

						.td3 {
							width: 380px;
						}

						.td4 {
							width: 100px;
						}

						.td5 {
							width: 195px;

							.action {
								cursor: pointer;

								&:hover {
									color: #000;
								}
							}
						}
					}
				}
			}
		}
	}
</style>