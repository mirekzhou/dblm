<template>
	<div class="help-bg">
		<div class="help-dialog">
			<div class="close" v-on:click="hideDialog">✕</div>

			<div class="top-part">
				<div class="left-part">
					<div class="title">
						<span>请先登录以帮助</span>
						<span class="red">{{userName}}进行夺宝</span>
					</div>

					<div class="img-zone">
						<img :src="imgSrc" v-show="helpStatus == 1" />

						<span v-show="helpStatus == 2">
							您的IP地址/用户名已为kris助攻过
						</span>

						<span v-show="helpStatus == 3">
							您的IP地址与夺宝人的相同，夺宝助攻失败
						</span>
					</div>

					<div class="oper-zone">
						<button class="help-button" v-on:click="goLogin">为TA助攻</button>
						<span v-on:click="goRegister">暂无账号？注册</span>
					</div>
				</div>

				<div class="middle-part"></div>

				<div class="right-part">
					<div class="title">夺宝规则</div>
					<p>1. 参与夺宝，生成夺宝链接</p>
					<p>2. 分享给好友，邀请好友来助攻</p>
					<p>3. 好友助攻成功获得幸运码，等待平台开出幸运号码，特有对应号码的用户揽获大奖</p>
					<p>注：助攻越多，幸运码越多，中奖概率越大；一个好友在同个夺宝中只可助攻一次。</p>

					<div class="just-see" v-on:click="hideDialog">看看再说</div>
				</div>

				<div class="clear"></div>
			</div>

			<div class="gap-line">
				<span class="left-line"></span>
				<span class="text">快捷登录为TA助攻</span>
				<span class="right-line"></span>
				<div class="clear"></div>
			</div>

			<div class="bottom-part">
				<ul>
					<li>
						<img src="../../assets/sina.png">
						<div class="text">微博</div>
					</li>

					<li>
						<img src="../../assets/wechat.png">
						<div class="wechat-icon"></div>
						<div class="text">微信</div>
					</li>

					<li>
						<img src="../../assets/qq.png">
						<div class="qq-icon"></div>
						<div class="text">QQ</div>
					</li>

					<div class="clear"></div>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue               from 'vue';
	import { mapState }      from 'vuex';
	import helpDialogPicture from '../../assets/help-dialog-picture.jpg';

	export default {
		name: 'shareDialog',

		data: function () {
			return {
				imgSrc     : helpDialogPicture,
				helpStatus : 1
			}
		},

		methods: {
			hideDialog: function () {
				this.$store.dispatch('hideHelpDialog');
			},

			goLogin: function () {
				this.hideDialog();
				this.$router.push('/login');
			},

			goRegister: function () {
				this.hideDialog();
				this.$router.push('/register');
			}
		},

		computed: mapState({
			userName: function (state) {
				return state.userName;
			}
		})
	}
</script>

<style lang="scss" scoped>
	.help-bg {
		background: rgba(0, 0, 0, 0.8);
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;

		.help-dialog {
			background: #FFF;
			color: #000;
			height: 535px;
			width: 705px;
			padding: 0 20px;
			position: absolute;
			left: 50%;
			top: 50%;
			margin-left: -352px;
			margin-top: -267px;

			.close {
				cursor: pointer;
				font-size: 20px;
				position: absolute;
				right: 10px;
				top: 0px;
			}

			.top-part {
				height: 292px;
				margin-top: 35px;
				position: relative;

				.left-part {
					float: left;
					height: 100%;
					width: 312px;

					.title {
						font-size: 20px;

						.red {
							color: #d53328;
						}
					}

					.img-zone {
						height: 161px;
						line-height: 161px;
						margin-top: 40px;
						text-align: center;
						width: 100%;

						img {
							height: 161px;
							width: 219px;
						}
					}

					.oper-zone {
						margin-top: 33px;
						padding-left: 72px;

						.help-button {
							background-color: #d53328;
							border: 0;
							border-radius: 5px;
							cursor: pointer;
							color: #FFF;
							font-size: 14px;
							height: 32px;
							line-height: 32px;
							padding: 0;
							margin: 0;
							outline: none;
							text-align: center;
							width: 98px;
						}

						span {
							cursor: pointer;
							font-size: 12px;
							margin-left: 10px;
						}
					}
				}

				.middle-part {
					border: 0;
					border-right: 1px solid #e5e5e5;
					float: left;
					height: 290px;
					margin-top: 8px;
					width: 1px;
				}

				.right-part {
					float: left;
					height: 100%;
					padding-left: 45px;
					width: 352px;

					.title {
						color: #d53328;
						font-size: 20px;
						text-align: center;
						margin-bottom: 10px;
					}

					p {
						font-size: 12px;
						line-height: 36px;
					}

					.just-see {
						background: none;
						border: 1px solid #d53328;
						border-radius: 5px;
						cursor: pointer;
						color: #d53328;
						font-size: 14px;
						height: 32px;
						line-height: 32px;
						margin-left: 102px;
						margin-top: 5px;
						text-align: center;
						width: 98px;
					}
				}
			}

			.gap-line {
				margin-top: 43px;
				hegiht: 20px;
				line-hegiht: 20px;

				.left-line {
					border-top: 1px solid #e5e5e5;
					float: left;
					height: 1px;
					margin-top: 9px;
					width: 240px;
				}

				.text {
					font-size: 14px;
					float: left;
					margin: 0 34px;
				}

				.right-line {
					border-top: 1px solid #e5e5e5;
					float: left;
					height: 1px;
					margin-top: 9px;
					width: 240px;
				}
			}

			.bottom-part {
				height: 146px;
				width: 665px;

				ul {
					height: 100%;
					width: 100%;

					li {
						cursor: pointer;
						float: left;
						height: 146px;
						line-height: 146px;
						width: 33.33%;
						text-align: center;

						.text {
							color: #666666;
							font-size: 14px;
							height: 24px;
							line-height: 24px;
							margin-top: -60px;

							&:hover {
								color: #000;
							}
						}
					}
				}
			}
		}
	}
</style>