<template>
	<div class="page forget">
		<div class="forget-wrap" v-show="forgetStatus < 4">
			<div class="forget-title">
				<p>找回密码</p>
			</div>

			<div class="forget-content">

				<div class="forget-step1" v-show="forgetStatus===1">
					<phone-input text="请输入注册时填写的手机号码" v-on:input="listenInputVal"></phone-input>
					<drag-to-verify v-on:setDragVerifyFlag="setDragVerifyFlag"></drag-to-verify>
					<error-tip  :errorText="errorText1" :showErrorTip="showErrorTip1"></error-tip>
				</div>

				<div class="forget-step2" v-show="forgetStatus===2">
					<code-input v-on:input="listenCodeInputVal"></code-input>
					<error-tip  :errorText="errorText2" :showErrorTip="showErrorTip2"></error-tip>
				</div>

				<div class="forget-step3" v-show="forgetStatus===3">
					<div class="password-box">
						<p>设置登录密码</p>

						<input  type="password"
								v-model="password"
								placeholder="密码为6-20位字符组成,不能是9位以下的纯数字" />
						<error-tip :errorText="errorText3" :showErrorTip="showErrorTip3"></error-tip>
					</div>

					<div class="password-box">
						<p>重复密码</p>

						<input type="password"  v-model="confirmPassword">
						<error-tip :errorText="errorText4" :showErrorTip="showErrorTip4"></error-tip>
					</div>
				</div>

				<div class="btn-wrap">
					<div class="bottom-btn">
						<p v-on:click="nextStep" v-show="forgetStatus!==3" >下一步</p>
						<p v-on:click="finishForget" v-show="forgetStatus===3">完成</p>
					</div>

					<div class="pre-btn" v-on:click="preStep" v-show="forgetStatus==2">
						<p >&lt;上一步</p>
					</div>
				</div>
			</div>
		</div>

		<div class="forget-success" v-show="forgetStatus >= 4">
			<div class="icon-success"></div>
			<p>找回密码成功,现在<span v-on:click="finish">马上去夺宝</span></p>
		</div>
	</div>
</template>

<script>

	import ErrorTip 	from  '../../plugins/error-tip';
	import DragToVerify from  '../../plugins/dragToVerify';
	import CodeInput    from  '../../plugins/codeInput';
	import PhoneInput    from  '../../plugins/phoneInput';

	export default {
		name: 'forget',

		props: [
		],

		data: function () {
			return {
				forgetStatus    : 1,

				phone           : '',
				errorText1      : '请输入正确手机号码',
				showErrorTip1   : false,
				dragVerifyFlag  : false,
				phoneFlag 	    : false,

				code            : '',
				errorText2      : '输入验证码无效',
				showErrorTip2   :  false,
				codeFlag 	    : false,

				password 		: '',
				passwordReg     : /^\d{9,16}$|^(?!\d+$)\w{6,20}$/g,
				errorText3      : '密码为6-20位字符组成,不能是9位以下的纯数字',
				showErrorTip3   :  false,
				passwordFlag    :  false,

				confirmPassword : '',
				errorText4      : '',
				showErrorTip4   :  false,
				confirmPasswordFlag    :  false,
			}
		},

		methods: {
			nextStep : function () {
				if (this.forgetStatus == 1) {
					this.checkInput1();
					if (!this.phoneFlag || !this.dragVerifyFlag) {
						return;
					}
				} else if (this.forgetStatus == 2) {
					this.checkInput2();
					if (!this.codeFlag) {
						return;
					}
				} 
				this.forgetStatus++;
			},
			preStep: function () {
				this.forgetStatus--;
			},

			finishForget: function () {
				this.checkInput3();
				if (!this.passwordFlag || !this.confirmPasswordFlag) {
					return;
				}

				this.forgetStatus++;
			},
			checkInput1: function () {
				this.showErrorTip1 = false;
				this.phoneFlag     = false;

				if (!this.phone) {
					this.showErrorTip1 = true;
					this.errorText1    = '请输入正确手机号码';
					return;
				}

				if (!this.dragVerifyFlag) {
					this.showErrorTip1 = true;
					this.errorText1    = '请拖动完成验证';
					return;
				}

				this.showErrorTip1 = false;
				this.phoneFlag     = true;
			},


			checkInput2: function () {
				this.showErrorTip2 = false;

				if (!this.code) {
					this.showErrorTip2 = true;
					this.errorText2    = '输入验证码无效';
					return;
				}

				this.codeFlag      = true;
				this.showErrorTip2 = false;
			},

			checkInput3: function () {
				this.showErrorTip3 = false;

				if (!this.password.match(this.passwordReg)) {
					this.showErrorTip3 = true;
					this.errorText3   = '密码为6-20位字符组成,不能是9位以下的纯数字';
					return;
				}

				this.showErrorTip3 = false;
				this.passwordFlag  = true;

				if (this.password != this.confirmPassword) {
					this.showErrorTip4 = true;
					this.errorText4    = '两次密码应该保持一致';
					return;
				}

				this.showErrorTip4 = false;
				this.confirmPasswordFlag  = true;
			},

			setDragVerifyFlag: function(val) {
				this.dragVerifyFlag = val;

				if (val == true) {
					this.showErrorTip1 = false;
				}
			},

			listenInputVal: function (val) {
				this.phone = val;
			},
			listenCodeInputVal: function (val) {
				this.code = val;
			},

			finish: function () {
				this.forgetStatus = 1;
				this.$router.push('/home');
			},

		},

		components: {
			'error-tip'	     : ErrorTip,
			'code-input'     : CodeInput,
			'drag-to-verify' : DragToVerify,
			'phone-input'	 : PhoneInput
		},
	}
</script>

<style lang="scss" scoped>
	.forget {
		color: #000;
		background: #f8f8f8;
		padding-bottom: 64px;

		.forget-wrap {
			width: 540px;
			height: 390px;
			margin: 54px auto 0;
			border: 1px solid #ebebeb;
			padding-bottom: 24px;
			text-align: center;
			background: #fff;
			-webkit-box-shadow: 0px 0px 10px 3px #e1e1e1;
			-moz-box-shadow: 0px 0px 10px 3px #e1e1e1;
			box-shadow: 0px 0px 10px 3px #e1e1e1;

			.forget-title {
				height: 67px;
				line-height: 67px;
				border-bottom: 1px solid #ebebeb;
				background: #f8f8f8;
				font-size: 16px;
			}

			.forget-content {
				width: 313px;
				height: 340px;
				margin: 0 auto;
				text-align: left;
				padding-top: 20px;
				position: relative;

				.forget-step1 {
					.drag-to-verify {
						margin-top: 20px;
					}
				}

				.forget-step2 {
					.code-input {
						margin-top: 72px;
					}
				}

				.forget-step3 {
						font-size: 14px;

						.password-box {
							margin-top: 20px;
							height: 93px;

							p {
								margin-bottom: 11px;
								color: #6e6e6e;
							}

							input {
								box-sizing: border-box;
								height: 33px;
								line-height: 29px;
								border: 1px solid #dddddd;
								border-radius: 3px;
								padding-left: 10px;
								width: 100%;
							}
						}
				}

				.btn-wrap {
					position: absolute;
					bottom: 38px;
					width: 100%;

					.bottom-btn {
						height: 50px;
						line-height: 50px;
						background: #d43328;
						border-radius: 3px;
						cursor: pointer;
						text-align: center;
						margin-top: 28px;

						p {
							color: #fff;
							font-weight: 600;
						}
					}

					.pre-btn {
						color: #747474;
						text-align: center;
						cursor: pointer;
						margin-top: 15px;

						p {
							margin-left: -12px;
						}
					}
				}
			}
		}

		.forget-success {
			width: 770px;
			height: 395px;
			margin: 54px auto 60px;
			padding-bottom: 120px;
			text-align: center;
			border: 1px solid #ebebeb;
			background: #fff;
			-webkit-box-shadow: 0px 0px 10px 3px #e1e1e1;
			-moz-box-shadow: 0px 0px 10px 3px #e1e1e1;
			box-shadow: 0px 0px 10px 3px #e1e1e1;

			.icon-success {
				width: 96px;
				height: 96px;
				margin: 118px auto 0;
				background: url('../../assets/common-sprite.png') -158px 0;
			}

			p {
				font-size: 18px;
				margin-top: 44px;

				span {
					color: #d74941;
					text-decoration: underline;
					cursor: pointer;
				}
			}
		}
	}
</style>