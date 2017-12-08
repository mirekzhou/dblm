<template>
	<div class="page forget">
		<div class="forget-wrap">
			<div class="forget-title">
				<p>找回密码</p>
			</div>

			<div class="forget-content">

				<div class="forget-step1" v-show="forgetStatus===1">
					<phone-input text="请输入注册时填写的手机号码"></phone-input>
					<error-tip errorText="请输入正确手机号码"></error-tip>
					<drag-to-verify></drag-to-verify>
				</div>
				
				<div class="forget-step2" v-show="forgetStatus===2">
					<code-input></code-input>
					<div class="pre-btn" v-on:click="preStep">
						<p ><上一步</p>
					</div>
				</div>

				<div class="forget-step3" v-show="forgetStatus===3">
					<div class="password-box">
						<p>设置登录密码</p>
						<input type="text" placeholder="密码为6-20位字符组成,不能是9位以下的纯字">
						<error-tip errorText="密码为6-20位字符组成,不能是9位以下的纯字"></error-tip>
					</div>

					<div class="password-box">
						<p>重复密码</p>
						<input type="text" placeholder="密码为6-20位字符组成,不能是9位以下的纯字">
						<error-tip errorText="请确认密码"></error-tip>
					</div>

					<div class="pre-btn" v-on:click="preStep">
						<p ><上一步</p>
					</div>
				</div>

				<div class="bottom-btn">
					<p v-on:click="nextStep" v-show="forgetStatus!==3">下一步</p>
					<p v-on:click="finishForget" v-show="forgetStatus===3">完成</p>
				</div>
			</div>
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
				forgetStatus : 1
			}
		},

		methods: {
			nextStep : function () {
				this.forgetStatus++;
			},
			preStep: function () {
				this.forgetStatus--;
			},

			finishForget: function () {

			}

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
			width: 713px;
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
				margin: 0 auto;
				text-align: left;

				.forget-step2 {
					.code-input {
						margin-top: 48px;
					}

					.pre-btn {
						color: #747474;
						text-align: center;
						margin: 134px 0 25px 0;
						cursor: pointer;
					}
				}

				.forget-step3 {
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

					.pre-btn {
						color: #747474;
						text-align: center;
						margin: 87px 0 25px 0;
						cursor: pointer;
					}
				}

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
			}
		}
	}
</style>