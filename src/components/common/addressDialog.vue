<template>
	<div class="bg">
		<div class="address-dialog">
			<div class="title">
				<span>收货地址</span>
				<span class="manage" v-on:click="manageAddress">管理收货地址</span>
			</div>

			<div class="table">
				<div class="thead">
					<div class="tr">
						<div class="td td1">收货人</div>
						<div class="td td2">所在地区</div>
						<div class="td td3">详细地址</div>
						<div class="td td4">电话/手机</div>
						<div class="clear"></div>
					</div>
				</div>

				<div class="tbody">
					<div class="tr" v-for="item in list" v-on:click="choose(item)" key="item">
						<div class="td td1">
							<label>
								<input type="radio" name="names" :value="item.id" v-model="receiver" />
								{{item.name}}
							</label>
						</div>
						<div class="td td2">{{item.area}}</div>
						<div class="td td3">{{item.address}}</div>
						<div class="td td4">{{item.phone}}</div>
						<div class="clear"></div>
					</div>
				</div>
			</div>

			<div class="buttons">
				<span class="ok" v-on:click="ok">确认</span>
				<span class="cancel" v-on:click="cancel">取消</span>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	import '../../scss/common.scss';

	export default {
		name: 'shareDialog',

		props: [
		],

		data: function () {
			return {
				list: [
					{
						id: 1,
						default: true,
						name: '张某某',
						area: '四川省成都市武侯区',
						address: '坡子街坡子小区188号',
						phone: '13812345678'
					},
					{
						id: 2,
						default: false,
						name: '张某某',
						area: '四川省成都市武侯区',
						address: '坡子街坡子小区188号',
						phone: '13812345678'
					},
					{
						id: 3,
						default: false,
						name: '张某某',
						area: '四川省成都市武侯区',
						address: '坡子街坡子小区188号',
						phone: '13812345678'
					},
					{
						id: 4,
						default: false,
						name: '张某某',
						area: '四川省成都市武侯区',
						address: '坡子街坡子小区188号',
						phone: '13812345678'
					},
					{
						id: 5,
						default: false,
						name: '张某某',
						area: '四川省成都市武侯区',
						address: '坡子街坡子小区188号',
						phone: '13812345678'
					}
				],

				receiver: 1
			}
		},

		methods: {
			choose: function (item) {
				this.receiver = item.id;
			},

			manageAddress: function () {
				this.$store.dispatch('hideAddressDialog', false);
				this.$router.push('/receiveInfo');
			},

			ok: function () {
				this.$store.dispatch('hideAddressDialog', false);
			},

			cancel: function () {
				this.$store.dispatch('hideAddressDialog', false);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bg {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		background: rgba(0,0,0,0.8);
		z-index: 999;

		.address-dialog {
			width: 706px;
			height: 536px;
			position: fixed;
			left: 50%;
			top: 50%;
			transform: translate(-50%,-50%);
			background: #fff;
			color: #8c8c8c;

			.title {
				font-size: 20px;
				height: 90px;
				line-height: 90px;
				position: relative;
				text-align: center;
				width:100%;

				.manage {
					color: #d53328;
					cursor: pointer;
					font-size: 16px;
					line-height: 20px;
					position: absolute;
					top: 38px;
					right: 20px;
					text-decoration: underline;
				}
			}

			.table {
				padding: 0 20px;

				.thead {
					.tr {
						height: 50px;
						line-height: 50px;
					}
				}

				.tbody {
					.tr {
						border-bottom: 1px solid #e5e5e5;
						cursor: pointer;
						font-size: 14px;
						height: 64px;
						line-height: 64px;

						&:last-child {
							border-bottom: 0;
						}
					}
				}

				.td {
					float: left;
					text-align: center;
				}

				.td1 {
					width: 110px;

					input {
						vertical-align: -2px;
					}
				}

				.td2 {
					width: 220px;
				}

				.td3 {
					width: 220px;
				}

				.td4 {
					width: 110px;
				}
			}

			.buttons {
				margin-top: 10px;
				text-align: center;
				width: 100%;

				span {
					border: 0;
					border-radius: 6px;
					cursor: pointer;
					display: inline-block;
					height: 36px;
					line-height: 36px;
					width: 120px;
					text-align: center;

					&:last-child {
						margin-left: 60px;
					}
				}

				.ok {
					background-color: #d43328;
					color: #FFF;
				}

				.cancel {
					border: 1px solid #e5e5e5;
				}
			}
		}
	}
</style>