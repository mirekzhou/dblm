<template>
	<div class="header wrapper">
		<div class="section1">
			<div class="wrapper">
				<div class="left-part">
					<div class="logo">
						<img src="../../assets/logo.png">
					</div>

					<ul>
						<li>
							<span class="icon-shield">免</span>
							<span class="text">免费参与, 0元夺宝</span>
						</li>

						<li>
							<span class="icon-shield">公</span>
							<span class="text">开奖公开，中奖透明</span>
						</li>

						<li>
							<span class="icon-shield">正</span>
							<span class="text">采购正品，品质夺宝</span>
						</li>

						<div class="clear"></div>
					</ul>

					<div class="clear"></div>
				</div>

				<div class="right-part" v-if="$route.path != '/register' && $route.path != '/login'">
					<div class="text user-center"
						 v-on:mouseover="ucMouseOver"
						 v-on:mouseout="ucMouseOut">

						<span>个人中心</span>
						<span class="down-arrow"></span>

						<ul class="float-window"
							v-show="showFloatWindow"
							v-on:mouseover="floatWindowMouseOver"
							v-on:mouseout="floatWindowMouseOut">
							<li>
								<span v-on:click="redirectTo('/forget')">修改密码</span>
							</li>
							<li>
								<span v-on:click="redirectTo('/stationMessage')">
									系统通知({{notificationCount}})
								</span>
							</li>
							<li>
								<span v-on:click="redirectTo('/receiveInfo')">收货地址</span>
							</li>
							<li>
								<span v-on:click="logout">退出账号</span>
							</li>
						</ul>
					</div>

					<div class="slash">/</div>

					<div class="text" v-on:click="redirectTo('/winRecords')">
						中奖信息({{winMessageCount}})
					</div>

					<div class="slash">/</div>

					<div class="text" v-on:click="redirectTo('/issueRecords')">夺宝记录</div>

					<div class="slash">/</div>

					<div class="text" v-on:click="redirectTo('/login')">
						<span>你好</span>
						<span v-show="loginStatus">{{userName}}</span>
						<span v-show="!loginStatus">,夺宝</span>
						<span v-show="!loginStatus" class="red-highlight">请登录</span>
					</div>
				</div>

				<div class="right-part" v-if="$route.path == '/register'">
					<span>已有账号？</span>
					<span class="red-highlight" v-on:click="redirectTo('/login')">前往登录</span>
				</div>

				<div class="right-part" v-if="$route.path == '/login'">
					<span>暂无账号？</span>
					<span class="red-highlight" v-on:click="redirectTo('/register')">前往注册</span>
				</div>

				<div class="clear"></div>
			</div>
		</div>

		<div class="section2">
			<div class="wrapper">
				<ul class="left-part">
					<li>
						<router-link to="/home">
							<span>首页</span>
						</router-link>
					</li>
					<li>
						<router-link to="/latest">
							<span>最新开奖</span>
						</router-link>
					</li>
					<li>
						<router-link to="/userGuide">
							<span>夺宝指南</span>
						</router-link>
					</li>
				</ul>

				<ul class="right-part">
					<li>
						<span>累计夺宝</span>
					</li>

					<li>
						<ul>
							<li v-for="item in times">
								<span>{{item}}</span>
							</li>
						</ul>
					</li>
				</ul>

				<div class="clear"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import '../../scss/common.scss';
	import { mapState } from 'vuex';

	export default {
		name: 'header',

		data: function () {
			return {
				times             : [9, 9, 9],
				winMessageCount   : 0,
				notificationCount : 0,
				showFloatWindow   : false
			}
		},

		methods: {
			redirectTo: function (path) {
				this.$router.push(path);
				this.showFloatWindow = false;
			},

			logout: function () {
				this.$store.dispatch('setLoginStatus', false);
				this.$router.push('/home');
			},

			ucMouseOver: function () {
				this.showFloatWindow = true;
			},

			ucMouseOut: function () {
				this.showFloatWindow = false;
			},

			floatWindowMouseOver: function () {
				this.showFloatWindow = true;
			},

			floatWindowMouseOut: function () {
				this.showFloatWindow = false;
			},
		},

		components: {
		},

	  	computed: mapState({
	  		loginStatus: function (state) {
	  			return state.loginStatus;
	  		},

	  		userName: function (state) {
	  			return state.userName;
	  		}
	  	})
	}
</script>

<style lang="scss" scoped>
	$wrapperWidth   : 1200px;
	$section1Height : 80px;
	$section2Height : 40px;

	.header {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 3;

		.section1 {
			background-color: #FFF;
			color: #666666;
			font-size: 14px;
			height: $section1Height;
			line-height: $section1Height;
			width: 100%;

			.wrapper {
				height: 100%;
				width: $wrapperWidth;
				margin: 0 auto;

				.left-part {
					float: left;
					height: 100%;

					.logo {
						float: left;
						margin-top: 11px;
						width: 158px;
					}

					ul {
						display: inline-block;
						float: left;
						list-style: none;
						margin-left: 28px;

						li {
							float: left;
							height: $section1Height;
							line-height: $section1Height;
							margin-left: 12px;

							.icon-shield {
								background-image: url(../../assets/common-sprite.png);
								background-position: 0 0;
								color: #FFF;
								cursor: pointer;
								display: inline-block;
								height: 36px;
								line-height: 36px;
								text-align: center;
								vertical-align: middle;
								width: 30px;
							}

							&:first-child {
								margin-left: 0;
							}

							.text {
								font-size: 12px;
							}
						}
					}
				}

				.right-part {
					float: right;

					.red-highlight {
						cursor: pointer;
						color: #d53328;
					}

					.text {
						cursor: pointer;
						float: right;

						.down-arrow {
							background-image: url("../../assets/common-sprite.png");
							background-position: -112px -52px;
							display: inline-block;
							height: 8px;
							width: 10px;
						}
					}

					.slash {
						float: right;
						margin: 0 8px;
					}

					.user-center {
						position: relative;

						.float-window {
							background-color: #f5f5f5;
							color: #797979;
							height: 140px;
							width: 90px;
							position: absolute;
							right: 0;
							top: 60px;

							li {
								height: 35px;
								line-height: 35px;
								width: 100%;
								text-align: center;
							}
						}
					}
				}
			}
		}

		.section2 {
			background-color: #d53328;
			color: #FFF;
			font-size: 14px;
			height: $section2Height;
			width: 100%;

			.wrapper {
				width: $wrapperWidth;
				margin: 0 auto;

				.left-part {
					float: left;
					list-style: none;

					.router-link-active{
				        background: rgba(0, 0, 0, .1);
				    }

					li {
						display: inline-block;
						height: $section2Height;
						line-height: $section2Height;

						a {
							text-decoration: none;
							display: block;
							height: 100%;
							padding: 0 22px;

							span {
								color: #FFF;
							}

							&:hover {
								background: rgba(0, 0, 0, .1);
							}
						}
					}
				}

				.right-part {
					float: right;
					list-style: none;

					li {
						display: inline-block;
						height: $section2Height;
						line-height: $section2Height;
						margin-left: 18px;

						ul {
							display: inline-block;
							list-style: none;
							margin-left: 18x;

							li {
								background: rgba(0, 0, 0, .2);
								border: none;
								border-radius: 4px;
								color: #FFF;
								display: inline-block;
								font-weight: bold;
								height: 25px;
								line-height: 25px;
								margin-left: 15px;
								text-align: center;
								width: 25px;

								&:first-child {
									margin-left: 0;
								}
							}
						}

						&:first-child {
							cursor: pointer;
							font-weight: bold;
							margin-left: 0;
						}
					}
				}
			}
		}
	}
</style>