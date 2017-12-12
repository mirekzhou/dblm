<template>
	<div class="page register">
		<div class="register-wrap">
			<div class="register-header" v-show="registerStatus < 4">
				<div class="register-header-inner">
					<div class="register-title1">
						<span class="circle active">1</span>
						<span>填写手机号码</span>
					</div>
					<div class="register-title2">
						<span class="circle">2</span>
						<span>输入验证码</span>
					</div>
					<div class="register-title3">
						<span class="circle">3</span>
						<span>设置默认密码</span>
					</div>
					<span class="red-line" :style="{ left: lineLeft + 'px'}"></span>
				</div>
			</div>

			<div class="register-content" v-show="registerStatus < 4">
				<div class="headline">
					<p>创建夺宝联盟账号</p>
				</div>

				<div class="register-content-inner">
					<div class="register-step1" v-show="registerStatus===1">
						<phone-input text="请输入手机号码" v-on:input="listenInputVal"></phone-input>

						<drag-to-verify v-on:setDragVerifyFlag="setDragVerifyFlag" ></drag-to-verify>

						<error-tip :errorText="errorText1" :showErrorTip="showErrorTip1"></error-tip>
					</div>

					<div class="register-step2" v-show="registerStatus===2">
						<code-input v-on:input="listenCodeInputVal"></code-input>
						<error-tip  :errorText="errorText2" :showErrorTip="showErrorTip2"></error-tip>
					</div>

					<div class="register-step3" v-show="registerStatus===3">
						<div class="password-box">
							<p>设置登录密码</p>
							<input  type="password"
									v-model="password"
							        placeholder="密码为6-20位字符组成,不能是9位以下的纯数字" />

							<error-tip :errorText="errorText3" :showErrorTip="showErrorTip3"></error-tip>
						</div>

						<div class="password-box">
							<p>重复密码</p>
							<input type="password" placeholder="密码为6-20位字符组成,不能是9位以下的纯数字" v-model="confirmPassword">
							<error-tip :errorText="errorText4" :showErrorTip="showErrorTip4"></error-tip>
						</div>
					</div>

					<div class="bottom-btn"  :class="{mt134: registerStatus==2,mt35: registerStatus==3}">
						<p v-on:click="nextStep" v-show="registerStatus!==3">下一步</p>
						<p v-on:click="finishRegister" v-show="registerStatus===3">完成注册</p>
					</div>
					<div class="pre-btn" v-on:click="preStep" v-show="registerStatus==2 || registerStatus==3">
						<p >&lt;上一步</p>
					</div>
				</div>
			</div>

			<div class="register-success" v-show="registerStatus >= 4">
				<div class="icon-success"></div>
				<p>恭喜账号注册成功,现在<span v-on:click="finish">马上去夺宝</span></p>
			</div>

			<div class="process clear" v-show="registerStatus >= 4">
				<p>夺宝流程</p>
				<div class="flow-chart">
					<div class="duobao">
						<i class="icon-duobao"></i>
					</div>
					<div class="line-wrap">
						<span>参与夺宝</span>
						<i class="line"></i>
					</div>

					<div class="share">
						<i class="icon-share"></i>
					</div>
					<div class="line-wrap">
						<span>分享给好友,邀请好友来助攻</span>
						<i class="line"></i>
					</div>

					<div class="success">
						<i class="icon-success"></i>
					</div>

					<div class="line-wrap">
						<p>助攻成功获得幸运码，等待中奖</p>
						<p class="red">好友助攻越多，幸运码越多，中奖概率越大</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import ErrorTip 	from  '../../plugins/error-tip';
	import DragVerify   from  '../../plugins/dragVerify';
	import DragToVerify from  '../../plugins/dragToVerify';
	import CodeInput    from  '../../plugins/codeInput';
	import PhoneInput    from  '../../plugins/phoneInput';
	import '../../scss/common.scss';

	export default {
		name: 'register',

		props: [
		],

		data: function () {
			return {
				registerStatus: 1,
				lineLeft: 15,
				phone: '',
				code: '',
				password: '',
				confirmPassword: '',

				errorText1: '请输入正确手机号码',
				showErrorTip1:  false,

				errorText2: '输入验证码无效',
				showErrorTip2:  false,

				passwordReg: /^\d{9,16}$|^(?!\d+$)\w{6,20}$/g,
				errorText3: '密码为6-20位字符组成,不能是9位以下的纯数字',
				showErrorTip3:  false,

				errorText4: '',
				showErrorTip4:  false
			}
		},

		methods: {
			nextStep: function () {
				if (this.registerStatus == 1) {
					this.checkInput1();
					if (this.showErrorTip1 == true) {
						return;
					}
				} else if (this.registerStatus == 2) {
					this.checkInput2();
					if (this.showErrorTip2 == true) {
						return;
					}
				}

				this.registerStatus++;
				this.setLineLeft();
			},

			preStep: function () {
				this.registerStatus--;
				this.setLineLeft();
			},


			finishRegister: function () {
				this.checkInput3();

				if (this.showErrorTip3 == true || this.showErrorTip4 == true) {
					return;
				}

				this.registerStatus++;
			},

			checkInput1: function () {
				this.showErrorTip1 = false;

				if (!this.phone) {
					this.showErrorTip1 = true;
					this.errorText1   = '请输入手机号';
					return;
				}

				if (!this.dragVerifyFlag) {
					this.showErrorTip1 = true;
					this.errorText1    = '请拖动完成验证';
					return;
				}

				this.showErrorTip1 = false;
			},

			checkInput2: function () {
				this.showErrorTip2 = false;
				if (!this.code) {
					this.showErrorTip2 = true;
					this.errorText2   = '输入验证码无效';
					return;
				}

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

				if (this.password != this.confirmPassword) {
					this.showErrorTip4 = true;
					this.errorText4    = '两次密码应该保持一致';
					return;
				}

				this.showErrorTip4 = false;
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
				this.registerStatus = 1;
				this.lineLeft = 15;
				this.$router.push('/home');
			},

			setLineLeft: function () {
				if (this.registerStatus == 1) {
					this.lineLeft = 15;

				} else if (this.registerStatus == 2) {
					this.lineLeft = 215;
				} else if (this.registerStatus == 3) {
					this.lineLeft = 416;
				}
			}
		},
		components: {
			'error-tip'	     : ErrorTip,
			'dragVerify'     : DragVerify,
			'code-input'     : CodeInput,
			'drag-to-verify' : DragToVerify,
			'phone-input'	 : PhoneInput
		},
		computed:{
			getShape(){
				return this.isCircle==='true'
			}
		},
	}
</script>

<style lang="scss" scoped>
.register {
	color: #000;
	background: #f8f8f8;

	.register-wrap {
		width: 1200px;
		margin: 120px auto 0;

		.register-header {
			border-bottom: 2px solid #d9d9d9;

			.register-header-inner{
				width: 600px;
				margin: 0 auto;
				position: relative;

				div {
					display: inline-block;
					height: 50px;
					width: 160px;
					text-align: center;
					line-height: 50px;
					margin-left: 36px;

					&:first-child {
						margin-left: 15px;
					}

					.circle {
						display: inline-block;
						height: 24px;
						width: 24px;
						line-height: 24px;
						text-align: center;
						color: #fff;
						background: #ccc;
						border-radius: 50%;

						&.active {
							background: #d43328;
						}
					}
				}

				.red-line {
					position: absolute;
					display: inline-block;
					transition:all 0.7s;
				    -moz-transition:all 0.7s; /* Firefox 4 */
				    -webkit-transition:all 0.7s; /* Safari and Chrome */
				    -o-transition:all 0.7s; /* Opera */
					bottom: -2px;
					left: 15px;
					width: 160px;
					height: 2px;
					background: #d43328;
				}
			}
		}

		.register-content {
			width: 540px;
			margin: 70px auto 60px;
			padding-bottom: 17px;
			text-align: center;
			border: 1px solid #ebebeb;
			background: #fff;
			-webkit-box-shadow: 0px 0px 10px 3px #e1e1e1;
			-moz-box-shadow: 0px 0px 10px 3px #e1e1e1;
			box-shadow: 0px 0px 10px 3px #e1e1e1;


			.headline {
				font-size: 18px;
				height: 47px;
				line-height: 47px;
				background: #f8f8f8;
				color: #333333;
			}

			.register-content-inner {
				width: 313px;
				margin: 0 auto;
				padding-top: 30px;
				text-align: left;

				.register-step1 {
					font-size: 14px;

					.slide-block {
						margin-top: 20px;
					}
				}

				.register-step2 {
					font-size: 14px;
					padding-top: 30px;
				}

				.register-step3 {
					font-size: 14px;

					.password-box {
						margin-top: 19px;

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

				.mt134 {
					margin-top: 80px;
				}

				.mt35 {
					margin-top: 35px;
				}

				.bottom-btn {
					height: 50px;
					line-height: 50px;
					background: #d43328;
					border-radius: 3px;
					cursor: pointer;
					text-align: center;

					p {
						color: #fff;
						font-weight: 600;
						margin-top: 10px;
					}
				}

				.pre-btn {
					color: #747474;
					text-align: center;
					cursor: pointer;
					margin-top: 15px;

					p {
						margin-left: -12px;
						font-size: 16px;
					}
				}
			}
		}

		.register-success {
			width: 540px;
			margin: -70px auto 60px;
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

		.process {
			width: 1055px;
			margin: 0 auto 16px;
			text-align: center;

			p {
				color: #d43328;
			}

			.flow-chart {

				div {
					float: left;
				}

				.line-wrap {
					font-size: 14px;
					color: #737373;
					margin: 18px 20px 0;

					span {
						float: left;
					}

					p {
						text-align: left;
						margin-top: 0;
						color: #737373;
					}

					.red {
						color: #d43328;
					}

					.line {
						display: inline-block;
						width: 105px;
						height: 2px;
						background: #e4e4e4;
						float: left;
						margin: 10px 0 0 20px;
					}
				}


				.duobao {
					width: 63px;
					height: 63px;
					line-height: 78px;
					background: #e4e4e4;
					border-radius: 50%;

					i {
						display: inline-block;
						width: 35px;
						height: 27px;
						background: url('../../assets/common-sprite.png') -112px -96px;
					}
				}

				.share {
					width: 63px;
					height: 63px;
					line-height: 78px;
					background: #e4e4e4;
					border-radius: 50%;

					i {
						display: inline-block;
						width: 35px;
						height: 31px;
						background: url('../../assets/common-sprite.png') -72px -28px;
					}
				}


				.success {
					width: 63px;
					height: 63px;
					line-height: 80px;
					background: #e4e4e4;
					border-radius: 50%;

					i {
						display: inline-block;
						width: 35px;
						height: 30px;
						background: url('../../assets/common-sprite.png') -111px -128px;
					}
				}
			}
		}
	}
}
</style>