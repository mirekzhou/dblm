<template>
	<div class="page guide-content">
		<div class="wrapper">
			<div class="bar">
				<div class="bar-title">
					<div>夺宝指南</div>
				</div>
			</div>

			<div class="content">
				<div class="section1">
					<span v-on:click="goBack">&lt;返回</span>
				</div>

				<div class="section2">
					{{title}}
				</div>

				<p class="section3">
					{{content}}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'guide-content',

		props: [
		],

		data: function () {
			return {
				title: '开奖说明以及夺宝规则，参与流程等',
				content: '这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容这里是文字内容'
			}
		},

		methods: {
			goBack: function () {
				this.$router.push('/userGuide');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.guide-content {
		$wrapperWidth   : 1200px;
		$barTitleHeight : 32px;

		.wrapper {
			color: #414141;
			height: 100%;
			width: $wrapperWidth;
			margin: 0 auto;
			padding-top: 8px;
			padding-bottom: 130px;

			.bar {
				font-size: 13px;
				width: 100%;

				.bar-title {
					border-bottom : 1px solid #d43328;
					width: 100%;

					div {
						background-color: #d43328;
						color: #FFF;
						height: $barTitleHeight;
						line-height: $barTitleHeight;
						text-align: center;
						width: 94px;
					}
				}
			}

			.content {
				border: 1px solid #e5e5e5;
				height: 444px;
				padding: 0 24px;

				.section1 {
					color: #d43328;
					font-size: 14px;
					height: 30px;
					line-height: 30px;
					text-align: right;

					span {
						cursor: pointer;
						text-decoration: underline;
						margin-right: -10px;
					}
				}

				.section2 {
					font-size: 16px;
					height: 30px;
					line-height: 30px;
					text-align: center;
				}

				.section3 {
					font-size: 14px;
					line-height: 30px;
					margin-top: 20px;
					text-indent: 30px;
				}
			}
		}
	}
</style>