<template>
	<div class="bg">
		<div class="share-dialog">
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
			</div>

			<div class="tip">
				您可复制链接发送给好友或者手机扫描二维码后点击右上角“...”分享给好友
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
				// alert('复制成功')
			}
		}
	}
</script>

<style lang="scss" scoped>
	$labelWidth : 77px;

	.bg {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		background: rgba(0,0,0,0.8);
		z-index: 999;

		.share-dialog {
			background: #FFF;
			color: #333333;
			width: 644px;
			height: 310px;
			position: fixed;
			left: 50%;
			padding: 0 55px 0 55px;
			top: 50%;
			transform: translate(-50%,-50%);

			.head {
				font-size: 16px;
				height: 40px;
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

			.sharePlatform {
				font-size: 14px;
				text-align: left;
				margin-top: 30px;

				label {
					display: inline-block;
					margin-left: 16px;
					margin-right: 20px;
				}

				.social-share {
					display: inline-block;
				}
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

			.tip {
				color: #666666;
				font-size: 12px;
				margin-top: 32px;
				text-align: right;
				padding-right: 25px;
			}
		}
	}
</style>