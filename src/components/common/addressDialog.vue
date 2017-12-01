<template>
	<div class="bg">
		<div class="address-dialog">
			<div class="title">
				<span>收货地址</span>
				<span class="manage">管理收货地址</span>
			</div>

			<div class="table">
				<div class="thead">
					<div class="td td1">收货人</div>
					<div class="td td2">所在地区</div>
					<div class="td td3"></div>
					<div class="td td4"></div>
				</div>
			</div>

			<div class="confirm" v-on:click="hideDialog">确定</div>
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
				link: ''
			}
		},

		methods: {
			hideDialog: function () {
				this.$store.dispatch('setShareDialogStatus', {status: false});
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
			z-index: 999;

			.title {
				font-size: 20px;
				height: 94px;
				line-height: 94px;
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

			.address-dialog-wrap {
				width: 600px;
				margin: 35px auto 0;
				text-align: center;

				.confirm {
					width: 116px;
					height: 36px;
					padding-top: 8px;
					color: #fff;
					margin: 36px auto 0;
					background: #d53328;
					border-radius: 3px;
					cursor: pointer;
				}
			}
		}
	}
</style>