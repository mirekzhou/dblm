<template>
	<div class="register">
		<div class="register-wrap">
			<div class="register-header">
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
					<span class="red-line"></span>
				</div>
			</div>

			<div class="register-content">
				<div class="headline">
					<p>创建夺宝联盟账号</p>
				</div>

				<div class="register-content-inner">
					<div class="register-step1" v-show="registerStatus===1">
						<div class="phone-input-box">
							<i></i>
							<input type="text" placeholder="请输入手机号码">
						</div>

						<div class="slide-block">
							<p>按住滑块，拖动完成上方拼图</p>
							<div class="block">
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>
						
						<error-tip errorText="请输入正确手机号码"></error-tip>
				
					</div>

					<div class="register-step2" v-show="registerStatus===2">
						<div class="code-input-box">
							<input type="text" placeholder="请输入短信验证码">
						</div>
						<error-tip errorText="输入验证码无效"></error-tip>
						<div class="pre-btn" v-on:click="preStep">
							<p ><上一步</p>
						</div>
					</div>

					<div class="register-step3" v-show="registerStatus===3">
						第三步
					</div>

					<div class="bottom-btn">
						<p v-on:click="nextStep" v-show="registerStatus!==3">下一步</p>
						<p v-on:click="nextStep" v-show="registerStatus===3">完成注册</p>
					</div>
				</div>


			</div>
		</div>

	</div>
</template>

<script>
	import ErrorTip from '../../plugins/error-tip'
	export default {
		name: 'register',

		props: [
		],

		data: function () {
			return {
				registerStatus: 1
			}
		},

		methods: {
			nextStep: function () {
				this.registerStatus++;
			},

			preStep: function () {
				this.registerStatus--;
			}
		},
		components: {
			'error-tip'	: ErrorTip
		}
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
				text-align: left;

				.register-step1 {
					font-size: 14px;

					.phone-input-box {
						height: 33px;
						line-height: 29px;
						border: 1px solid #dddddd;
						border-radius: 3px;
						padding-left: 10px;
						margin-top: 30px;

						i {
							display: inline-block;
							background: url('../../assets/common-sprite.png') -134px -52px;
							width: 10px;
							height: 18px;
							vertical-align: middle;
						}

						input {
							border: none;
							text-indent: 10px;
							background: transparent;
							margin-right: 12px;

							&:focus {
								outline: none;
							}
						}
					}

					.slide-block {
						height: 34px;
						line-height: 34px;
						background: #f8f8f8;
						border: 1px solid #dddddd;
						border-radius: 15px;
						margin-top: 20px;
						position: relative;
						color: #a0a0a0;

						p {
							margin-left: 80px;
						}

						.block {
							position: absolute;
							top: 50%;
							left: 1px;
							transform: translate(0,-50%);
							width: 68px;
							height: 28px;
							border: 1px solid #dddddd;
							border-radius: 15px;
							line-height: 31px;
							text-align: center;


							span {
								display: inline-block;
								width: 4px;
								height: 16px;
								background: #cccccc;
								border-radius: 2px;

							}
						}
					}
				}

				.register-step2 {
					.code-input-box {
						height: 33px;
						border-radius: 3px; 
						line-height: 33px;
						border: 1px solid #ddd;
						margin-bottom: 15px;

						input {
							border: none;
							text-indent: 10px;
							background: transparent;
							margin-right: 12px;

							&:focus {
								outline: none;
							}
						}
					}

					.pre-btn {
						color: #747474;
						text-align: center;
						margin-top: 134px;
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

					p {
						color: #fff;
						font-weight: 600;
						margin-top: 10px;
					}
				}
			}
		}

	}
}
</style>