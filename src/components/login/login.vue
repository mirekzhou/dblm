<template>
	<div class="page login">
		<div class="wrapper">
			<img src="../../assets/login.png" alt="">
			<div class="login-wrap">
				<div class="title">
					<div class="title-wrap">
						<div class="title-account" :class="{'active': !loginType}" v-on:click="changeType">
							<p>账号登录</p>
						</div>
					</div>

					<div class="title-wrap">
						<div class="title-phone" :class="{'active': loginType}" v-on:click="changeType">
							<p>手机号登录</p>
						</div>
					</div>
				</div>

				<div class="changeLogin clear">
				<!-- 	<div class="icon-verify-box" v-on:click="changeType">
						<i class="icon-verify"></i>
						<div class="trigon"></div>
					</div>
					<div class="tip">
						<p v-show="!loginType">验证码登录在这里</p>
						<p v-show="loginType">密码登录在这里</p>
					</div> -->
				</div>

				<div class="inner-wrap">
					<div class="password-login" v-show="!loginType">
						<div class="input-wrap">
							<i class="icon-account"></i>
							<input  type="text"
									placeholder="请输入账号/手机号"
									v-model="account"
									v-on:blur="accountBlur"
									v-on:focus="inputFocus">
						</div>
				

						<div class="input-wrap">
							<i class="icon-lock"></i>
							<input  type="text"
									placeholder="请输入密码"
									v-on:blur="passwordBlur"
									v-on:focus="inputFocus"
									v-model="password">
						</div>

						<div class="slide-block">
							<drag-to-verify :isHideCanvas="isHideCanvas"
											v-on:showCanvas="showCanvas"
											v-on:setDragVerifyFlag="setDragVerifyFlag1"
											isFloat="true"></drag-to-verify>
						</div>
						<error-tip :errorText="errorText1" :showErrorTip="showErrorTip1"></error-tip>
					</div>

					<div class="code-login" v-show="loginType">
						<div class="input-wrap">
							<i class="icon-phone"></i>
							<input  type="text"
									v-on:blur="phoneBlur"
									v-on:focus="inputFocus"
									v-model="phone"
									placeholder="无限娱乐账号可直接登录">
						</div>
			
						<div class="slide-block">
							<drag-to-verify :isHideCanvas="isHideCanvas"
											v-on:showCanvas="showCanvas"
											v-on:setDragVerifyFlag="setDragVerifyFlag2"
											isFloat="true"></drag-to-verify>
						</div>

						<code-input  v-on:input="listenInputVal"></code-input>
						<error-tip :errorText="errorText2" :showErrorTip="showErrorTip2"></error-tip>
					</div>

					<div class="login-btn" v-on:click="goLogin">
						<p>登录</p>
					</div>
					<p class="appendix">*无限娱乐账号可直接登录本站</p>

					<div class="sharePlatform clear">
						<label>选择快捷登录方式：</label>
						<i class="qq"></i>
						<i class="sina"></i>
						<i class="wechat"></i>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import '../../scss/common.scss';
	import DragVerify   from '../../plugins/dragVerify';
	import ErrorTip 	from '../../plugins/error-tip';
	import DragToVerify from  '../../plugins/dragToVerify';
	import CodeInput    from  '../../plugins/codeInput';
	export default {
		name: 'login',

		props: [
		],

		data: function () {
			return {
				account: '',
				password: '',
				phone: '',
				code: '',
				loginType: false,
				isHideCanvas: true,

				errorText1: '用户或密码错误',
				showErrorTip1: false,

				accountFlag: false,
				passwordFlag: false,
				dragVerifyFlag1: false,



				errorText2: '请输入手机号',
				showErrorTip2: false,

				phoneFlag: false,
				codeFlag: false,
				dragVerifyFlag2: false,
			}
		},

		methods: {
			passVerify: function () {
				alert('验证成功');
			},
			goLogin: function () {
				if (this.loginType == false) {
					this.checkInpu1();
					if (!this.accountFlag || !this.passwordFlag  || !this.dragVerifyFlag1) {
						console.log('验证失败');
						return;
					}
					//验证成功方法
					this.$router.push('/home');
				} else {
					this.checkInpu2();

					if (!this.phoneFlag || !this.codeFlag || !this.dragVerifyFlag2) {
						console.log('验证失败');
						return;
					}

					//验证成功方法
					this.$router.push('/home');
				}
			},
			changeType: function () {
				this.loginType = !this.loginType;
			},

			showCanvas: function (val) {
				this.isHideCanvas = val;
			},

			setDragVerifyFlag1: function(val) {
				this.dragVerifyFlag1 = val;

			},

			setDragVerifyFlag2: function (val) {
				this.dragVerifyFlag2 = val;
			},
			redirectTo: function (path) {
				this.$router.push(path);
			},

			checkInpu1: function () {
				this.accountFlag    = false;
				this.passwordFlag   = false;
				this.showErrorTip1  = false;

				if (!this.account) {
					this.showErrorTip1 = true;
					this.errorText1    = '请输入账号';
					this.accountFlag   = false;
					return;
				}
				this.accountFlag = true;

				if (!this.password) {
					this.showErrorTip1 = true;
					this.errorText1    = '请输入密码';
					this.passwordFlag  = false;
					return;
				}
				this.passwordFlag = true;

				if (!this.dragVerifyFlag1) {
					this.showErrorTip1 = true;
					this.errorText1    = '请拖动完成验证';
					return;
				}
			},

			checkInpu2: function () {
				this.phoneFlag    = false;
				this.codeFlag   = false;
				this.showErrorTip2  = false;

				if (!this.phone) {
					this.showErrorTip2 = true;
					this.errorText12   = '请输入手机号';
					this.phoneFlag   = false;
					return;
				}
				this.phoneFlag   = true;

				if (!this.dragVerifyFlag2) {
					this.showErrorTip2 = true;
					this.errorText2    = '请拖动完成验证';
					return;
				}

				if (!this.code) {
					this.showErrorTip2 = true;
					this.errorText2    = '请输入验证码';
					this.codeFlag  = false;
					return;
				}
				this.codeFlag  = true;
			},

			accountBlur: function () {
				if (!this.account) {
					this.showErrorTip1 = true;
					this.errorText1    = '请输入账号';
					this.accountFlag   = false;
				}
			},
			passwordBlur: function () {
				if (!this.password) {
					this.showErrorTip1 = true;
					this.errorText1    = '请输入密码';
					this.passwordtFlag   = false;
				}
			},

			phoneBlur: function () {
				if (!this.phone) {
					this.showErrorTip2 = true;
					this.errorText2    = '请输入手机号';
					this.phonetFlag   = false;
				}
			},

			inputFocus: function () {
				this.showErrorTip1 = false;
				this.showErrorTip2 = false;
			},

			listenInputVal: function (val) {
				this.code = val;
				console.log(this.code)
			}

		},
		components: {
			'error-tip'	: ErrorTip,
			'dragVerify': DragVerify,
			'code-input': CodeInput,
			'drag-to-verify' : DragToVerify,
		},
		computed:{
			getShape(){
				return this.isCircle==='true'
			}
		},
	}
</script>

<style lang="scss" scoped>
	.login {
		background: #f8f8f8;
		color: #5b5b5b;
		padding-bottom: 142px;

		.wrapper {
			img {
				margin:40px 0 0 50px;
			}
		}

		.login-wrap {
			width: 480px;
			float: right;
			text-align: center;
			border: 1px solid #e1e1e1;
			margin-top: 50px;
			background: #fff;
			padding-bottom: 20px;

			.title {
				height: 56px;
				line-height: 56px;
				border-bottom: 1px solid #e1e1e1;
				background: #f8f8f8;
				font-weight: 600;
				text-align: center;
				cursor: pointer;

				.title-wrap {
					width: 50%;
					float: left;

					div {
						height: 55px;
						width: 96px;
						margin-left: 50%;
						transform: translate(-50%,0);
						padding: 0 16px;
						

						&.active {
							color: #d43328;
							border-bottom: 2px solid #d43328;
						}
					}

					.title-phone {
						width: 115px;
					}
				}
			}

			.changeLogin {
				margin-top: 14px;

				.tip{
					display: inline-block;
					float: right;
					background: url('../../assets/common-sprite.png') -254px 0;
					width: 131px;
					height: 30px;
					line-height: 30px;
					font-size: 12px;

					p {
						margin-left: -3px;
						color: #d8a551;
					}
				}

				.icon-verify-box {
					position: relative;
					width: 34px;
					height: 34px;
					float: right;
					cursor: pointer;
					margin-right: 7px;

					.icon-verify {
						display: inline-block;
						float: right;
						background: url('../../assets/common-sprite.png') -111px -164px;
						width: 34px;
						height: 34px;
					}

					.trigon {
						position: absolute;
						bottom: 0;
						left: 0;
						width: 0;
						height: 0;
						border-bottom: 23px solid #fff;
						border-right: 23px solid transparent;
					}
				}
			}

			.inner-wrap {
				width: 356px;
				margin: 0 auto;
				text-align: left;
				font-size: 12px;

				.password-login {

					p {
						margin: 12px 0;
						font-weight: 600;
					}

					.p-forget {
						text-align: right;
						margin-bottom: 0;
						cursor: pointer;
						font-weight: 500;

						&+p {
							margin-top: 0;
						}
					}

					.input-wrap {
						position: relative;
						margin-top: 24px;

						i {
							position: absolute;
							display: inline-block;
							background: url('../../assets/common-sprite.png');
							left: 10px;
							top: 6px;
						}

						.icon-account {
							width: 18px;
							height: 18px;
							background-position: -162px -102px;
						}
						
						.icon-lock {
							width: 18px;
							height: 21px;
							background-position: -183px -102px;
						}

						input {
							box-sizing: border-box;
							height: 33px;
							line-height: 29px;
							border: 1px solid #dddddd;
							border-radius: 3px;
							padding-left: 45px;
							width: 100%;
						}
					}

					.slide-block {
						margin-top: 22px;
					}

					.error-tip {
						margin-top: 18px;
					}
				}

				.code-login {
					p {
						margin: 12px 0;
						font-weight: 600;
					}

					.input-wrap {
						position: relative;
						margin-top: 24px;

						i {
							position: absolute;
							display: inline-block;
							background: url('../../assets/common-sprite.png');
							left: 10px;
							top: 6px;
						}

						.icon-phone {
							width: 16px;
							height: 22px;
							background-position: -206px -102px;
						}

						input {
							box-sizing: border-box;
							height: 33px;
							line-height: 29px;
							border: 1px solid #dddddd;
							border-radius: 3px;
							padding-left: 45px;
							width: 100%;
						}
					}

					.slide-block {
						margin-top: 24px;
					}

					.code-input {
						margin-top: 30px;
					}
				}

				.login-btn {
					width: 355px;
					height: 50px;
					background: #d43328;
					border-radius: 3px;
					color: #fff;
					text-align: center;
					line-height: 50px;
					font-size: 18px;
					font-weight: 600;
					cursor: pointer;
					margin-top: 10px;
				}

				.appendix {
					text-align: center;
					margin-top: 10px;
				}
				
				.sharePlatform {
					text-align: left;
					margin-top: 10px;
					line-height: 32px;

					label {
						display: inline-block;
						margin-right: 10px;
						float: left;
					}


                    i {
                    	cursor: pointer;
                    	display: inline-block;	
						background: url("../../assets/common-sprite.png");
						width: 28px;
						height: 28px;
						margin-left: 16px;
						vertical-align: middle;

                    }

					.qq {
						margin-left: -5px;
						background-position: -157px -131px;
					}

					.sina {
						background-position: -218px -132px;
					}

					.wechat {
						background-position: -187px -131px;
					}
				}
			}
		}
	}
</style>