<template>
	<div class="footer">
		<div class="wrapper">
			<ul class="left-part">
				<li>
					<div class="name">新手指南</div>
					<ul>
						<li>用户协议</li>
						<li>常见指南</li>
					</ul>
				</li>

				<li>
					<div class="name">开奖说名</div>
					<ul>
						<li>开奖彩种说明</li>
						<li>公平性保障</li>
					</ul>
				</li>

				<li>
					<div class="name">友情链接</div>
					<ul>
						<li>无线娱乐</li>
					</ul>
				</li>
			</ul>

			<div class="right-part">
				<div class="name">关于我们</div>

				<p>
					用户可以通过第三方账号登陆、使用本站账号登陆参与到联盟夺宝游戏中来，帮助好友获得幸运码，同一第三方账号或本站账号只能为同一夺宝商品获得幸运码一次用户可以通过第三方账号登陆、使用本站账号登陆参与到联盟夺宝游戏中来，帮助好友获得幸运码，同一第三方账号或本站账号只能为同一夺宝商品获得幸运码一为同一夺宝商品获得幸运码一次
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'footer',

		data: function () {
			return {
			}
		},

		components: {
		},

		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.footer {
		background-color: #1b191a;
		color: #FFF;
		height: 200px;
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 0;

		.wrapper {
			font-size: 12px;
			height: 100px;
			width: 1024px;
			margin: 0 auto;

			.left-part {
				float: left;
				list-style: none;
				width: 50%;

				li {
					float: left;
					margin-right: 50px;
					width: 100px;

					.name {
						height: 60px;
						line-height: 60px;
					}

					ul {
						list-style: none;

						li {
							color: #7f7f7f;
							cursor: pointer;
							display: block;
							line-height: 20px;
						}
					}
				}
			}

			.right-part {
				float: right;
				width: 50%;

				.name {
					height: 60px;
					line-height: 60px;
				}

				p {
					color: #7f7f7f;
					line-height: 20px;
				}
			}
		}
	}
</style>