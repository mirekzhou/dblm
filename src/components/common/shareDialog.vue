<template>
	<div class="bg">
		<div class="share-dialog">
			<div class="share-dialog-wrap">
				<div class="head">
					<span class="close" v-on:click="hideDialog">✕</span>
				</div>

				<p>分享链接给好友，请好友帮您助攻，每获好友助攻一次您就可多获得一组幸运码，幸运码越多中奖概率越大哦</p>

				<div class="sharePlatform">
					<label>分享至</label>
					<share :config="config"></share>
				</div>

				<div class="copy">
					<label >分享链接</label>
					<input type="text" v-model="link">
					<button v-clipboard:copy="link" v-clipboard:success="onCopy">复制</button>

					<div class="tip"></div>
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
				width: 530px;
				margin: 0 auto;
				text-align: center;

				.head {
					height: 50px;
					position: relative;
					width: 100%;

					.close {
						cursor: pointer;
						position: absolute;
						right: -45px;
						top: 5px;
						font-size: 20px;
					}
				}

				p {
					text-align: left;
				}

				.copy {
					text-align: left;
					line-height: 32px;
					margin-top: 30px;

					label {
						display: inline-block;
						width: $labelWidth;
					}

					input {
						width: 380px;
						height: 26px;
						border:1px solid #e5e5e5;
						box-sizing: border-box;
					}

					button {
						cursor: pointer;
						width: 62px;
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
					line-height: 36px;
					color: #fff;
					margin: 25px auto 0;
					background: #d53328;
					border-radius: 3px;
					cursor: pointer;
				}
			}
		}
	}


</style>