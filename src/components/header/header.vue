<template>
	<div class="header">
		<div class="section1">
			<div class="wrapper">
				<div class="text">个人中心</div>
				<div class="text">注册</div>
				<div class="text">你好,请登录</div>
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
							<span>帮助中心</span>
						</router-link>
					</li>
				</ul>

				<ul class="right-part">
					<li>
						<span>夺宝记录</span>
					</li>

					<li>
						<span>累计参与</span>

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
				times: [9, 9, 9, 9, 9]
			}
		},

		methods: {
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
	$wrapperWidth   : 1024px;
	$section1Height : 36px;
	$section2Height : 80px;

	.router-link-active{
        span {
        	border-bottom: 2px solid #d263ee;
        	color: #d263ee ;
        	display: inline-block;
        	height: 36px;
        	line-height: 36px;
        	vertical-align: middle;
        }
    }

	.header {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 3;

		.section1 {
			background-color: #1b191a;
			color: #b8b8b8;
			font-size: 14px;
			height: $section1Height;
			line-height: $section1Height;
			width: 100%;

			.wrapper {
				width: $wrapperWidth;
				margin: 0 auto;

				.text {
					cursor: pointer;
					float: right;
					margin-left: 45px;

					&:hover {
						color: #FFF;
					}
				}
			}
		}

		.section2 {
			border-bottom: 1px solid #e1e1e1;
			color: #2d1817;
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
				        span {
				        	color: #ee0b1f;
				        }
				    }

					li {
						display: inline-block;
						height: $section2Height;
						line-height: $section2Height;
						margin: 0  20px;

						a {
							text-decoration: none;

							span {
								color: #2d1817;

								&:hover {
									color: #ee0b1f;
								}
							}
						}
					}
				}

				.right-part {
					float: right;
					list-style: none;

					li {
						color: #ee0b1f;
						display: inline-block;
						height: $section2Height;
						line-height: $section2Height;
						margin-left: 20px;

						ul {
							display: inline-block;
							list-style: none;
							margin-left: 10px;

							li {
								background-color: #9d9d9d;
								border: none;
								border-radius: 4px;
								color: #FFF;
								display: inline-block;
								height: 36px;
								line-height: 36px;
								margin-left: 10px;
								text-align: center;
								width: 30px;
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