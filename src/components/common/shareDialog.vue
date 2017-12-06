<template>
	<div class="bg">
		<div class="share-dialog">
			<div class="share-dialog-wrap">
				<p>分享链接给好友，好友访问链接即可为你活动一枚号码球</p>
				<div class="copy">
					<label >联盟链接</label>
					<input type="text" v-model="link">
					<button>复制</button>
				</div>

<!-- 				<div class="sharePlatform">
					<label>分享至</label>
					<i class="sina"></i>
					<i class="wechat"></i>
					<i class="qq"></i>
					<span>让好友帮你夺宝成功</span>
				</div> -->

				<share :config="config"></share>

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
	import { mapState } from 'vuex';
	import '../../scss/common.scss';

	export default {
		name: 'shareDialog',

		props: [
		],

		data: function () {
			return {
				link: '',
				config: {
					url                 : window.location.href, // 网址，默认使用 window.location.href
					source              : '', // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
					title               : document.title, // 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />
					description         : '哈哈哈', // 描述, 默认读取head标签：<meta name="description" content="PHP弱类型的实现原理分析" />
					image               : '', // 图片, 默认取网页中第一个img标签
					sites               : ['qzone', 'qq', 'weibo','wechat', 'douban'], // 启用的站点
					disabled            : ['google', 'facebook', 'twitter'], // 禁用的站点
					wechatQrcodeTitle   : '微信扫一扫：分享', // 微信二维码提示文字
					wechatQrcodeHelper  : '<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>'
				}
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

					.sina {
						display: inline-block;
						width: 31px;
						height: 28px;
						float: left;
						margin-top: 2px;
						background: url("../../assets/common-sprite.png") -43px -90px;
					}

					.wechat {
						display: inline-block;
						width: 30px;
						height: 28px;
						float: left;
						margin: 2px 0 0 20px;
						background: url("../../assets/common-sprite.png") -43px -58px;
					}

					.qq {
						display: inline-block;
						width: 30px;
						height: 31px;
						float: left;
						margin: 2px 0 0 20px;
						background: url("../../assets/common-sprite.png") -43px -24px;
					}

					span {
						margin-left: 20px;
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