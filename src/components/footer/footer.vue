<template>
	<div class="footer">
		<div class="wrapper">
			<ul class="left-part">
				<li>
					<div class="name">新手指南</div>
					<ul>
						<li>用户协议</li>
						<li>常见问题</li>
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
					轻松分享，创造快乐！夺宝联盟旨在传递快乐，帮助身边的每一位朋友挖掘社交圈的价值，扩大社交分享、增进社交粘性。通过夺宝联盟，身边的朋友随时都是一个联盟，紧密团结、不断扩大、众志成城、创造机遇。
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'footer'
	}
</script>

<style lang="scss" scoped>
	.footer {
		background-color: #434343;
		color: #FFF;
		height: 160px;
		width: 100%;

		.wrapper {
			font-size: 12px;
			height: 100px;
			width: 1200px;
			margin: 0 auto;
			padding-top: 35px;

			.left-part {
				float: left;
				list-style: none;
				width: 50%;

				li {
					float: left;

					.name {
						border-right: 1px solid #e6e6e6;
						display: inline-block;
						padding: 0 22px;
					}

					ul {
						list-style: none;
						margin-top: 14px;

						li {
							color: #7f7f7f;
							cursor: pointer;
							display: block;
							float: none;
							line-height: 30px;
							text-align: center;
						}
					}

					&:first-child {
						.name {
							padding-left: 0;
						}

						ul {
							li {
								text-align: left;
							}
						}
					}

					&:last-child {
						.name {
							border-right: 0;
							padding-right: 0;
						}

						ul {
							li {
								text-align: right;
							}
						}
					}
				}
			}

			.right-part {
				float: right;
				width: 50%;

				p {
					color: #7f7f7f;
					margin-top: 14px;
				}
			}
		}
	}
</style>