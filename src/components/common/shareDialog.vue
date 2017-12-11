<template>
	<div class="bg">
		<div class="share-dialog">
			<div class="share-dialog-wrap">
				<p>分享链接给好友，好友访问链接即可为你活动一枚号码球</p>
				<div class="copy">
					<label >联盟链接</label>
					<input type="text" v-model="link">
					<button v-clipboard:copy="link" v-clipboard:success="onCopy">复制</button>
				</div>

				<div class="sharePlatform">
					<label>分享至</label>
			<!-- 		<i class="sina"></i>
					<i class="wechat"></i>
					<i class="qq"></i> -->
				<share :config="config"></share>
					<span>让好友帮你夺宝成功</span>
				</div>


				<div class="QRCode clear">
					<label >二维码</label>
					<img src="../../assets/code.jpg" alt="">
					<div class="explain">
						<p class="redText">二维码扫图</p>
						<span>用手机给二维码拍照，也可以分享到微信、QQ好友</span>
					</div>
				</div>

				<div class="confirm" v-on:click="hideDialog">确定</div>
			</div>
		</div>
	</div>
</template>

<script>
	import '../../scss/common.scss';
	import Vue          from 'vue';
	import { mapState } from 'vuex';
	import VueClipboard from 'vue-clipboard2';

	Vue.use(VueClipboard);

	export default {
		name: 'shareDialog',

		props: [
		],

		data: function () {
			return {
				link: '',
				config: {
					disabled : ['google', 'facebook', 'twitter', 'douban', 'qzone', 'linkedin', 'diandian', 'tencent']
				}
			}
		},

		methods: {
			hideDialog: function () {
				this.$store.dispatch('setShareDialogStatus', {status: false});
			},
			onCopy: function () {
				// console.log('复制成功')
			}
		}
	}
</script>

<style lang="scss" scoped>
	$labelWidth 	:	77px;

	.bg {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		background: rgba(0,0,0,0.8);
		z-index: 999;
		.share-dialog {
			width: 644px;
			height: 373px;
			position: fixed;
			left: 50%;
			top: 50%;
			transform: translate(-50%,-50%);
			background: #fff;
			color: #8c8c8c;
			z-index: 999;

			.share-dialog-wrap {
				width: 600px;
				margin: 35px auto 0;
				text-align: center;

				.copy {
					text-align: left;
					line-height: 32px;
					margin-top: 30px;

					label {
						display: inline-block;
						width: $labelWidth;
					}

					input {
						width: 448px;
						height: 26px;
						border:1px solid #e5e5e5;
						box-sizing: border-box;
					}

					button {
						width: 57px;
						height: 26px;
					}
				}

				.sharePlatform {
					text-align: left;
					margin-top: 35px;
					line-height: 32px;

					label {
						display: inline-block;
						width: $labelWidth;
						float: left;
					}


					.social-share {
						display: inline-block;
					}

					// .sina {
					// 	display: inline-block;
					// 	width: 31px;
					// 	height: 28px;
					// 	float: left;
					// 	margin-top: 2px;
					// 	background: url("../../assets/common-sprite.png") -43px -90px;
					// }

					// .wechat {
					// 	display: inline-block;
					// 	width: 30px;
					// 	height: 28px;
					// 	float: left;
					// 	margin: 2px 0 0 20px;
					// 	background: url("../../assets/common-sprite.png") -43px -58px;
					// }

					// .qq {
					// 	display: inline-block;
					// 	width: 30px;
					// 	height: 31px;
					// 	float: left;
					// 	margin: 2px 0 0 20px;
					// 	background: url("../../assets/common-sprite.png") -43px -24px;
					// }

					span {
						font-size: 14px;

					}
				}

				.QRCode {
					margin-top: 20px;
					text-align: left;

					label {
						display: inline-block;
						width: $labelWidth;
						float: left;
						margin-top: 23px;
					}

					img {
						float: left;
					}

					.explain {
						margin: 20px 0 0 18px;
						float: left;

						.redText {
							color: #d84941;
							text-decoration: underline;
						}

						span {
							font-size: 14px;
						}
					}
				}

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