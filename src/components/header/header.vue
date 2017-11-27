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

				<div class="right-part">
					<div class="text" v-on:click="redirectTo('/stationMessage')">
						<span>个人中心</span>
						<span class="down-arrow"></span>
						<ul class="float-window">
							<li>
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
						<span>你好,夺宝</span>
						<span class="red-highlight">请登录</span>
					</div>
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
						<router-link to="/help">
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
				times: [9, 9, 9, 9, 9],
				winMessageCount: 0
			}
		},

		methods: {
			redirectTo: function (path) {
				this.$router.push(path);
			}
		},

		components: {
		},

	  	computed: mapState({
	  		loginStatus: function (state) {
	  			return state.loginStatus;
	  		},

	  		loginUserInfo: function (state) {
	  			return state.loginUserInfo;
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
						}
					}
				}

				.right-part {
					float: right;

					.text {
						cursor: pointer;
						float: right;

						.red-highlight {
							color: #d53328;
						}

						.down-arrow {

						}
					}

					.slash {
						float: right;
						margin: 0 8px;
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