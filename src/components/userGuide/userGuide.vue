<template>
	<div class="page user-guide">
		<div class="wrapper">
			<div class="bar">
				<div class="bar-title">
					<div>夺宝指南</div>
				</div>
			</div>

			<ul class="content">
				<li v-for="item in list" v-on:click="goGuideContent(item.id)">
					<span class="dot"></span>
					<span>{{item.title}}</span>
				</li>

				<div class="clear"></div>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'user-guide',

		props: [
		],

		data: function () {
			return {
				list: [
					{id:'1', 'title': '夺宝联盟游戏规则及开奖说明'},
					{id:'2', 'title': '夺宝联盟游戏规则及开奖说明'},
					{id:'3', 'title': '夺宝联盟游戏规则及开奖说明'},
					{id:'4', 'title': '夺宝联盟游戏规则及开奖说明'},
					{id:'5', 'title': '夺宝联盟游戏规则及开奖说明'},
					{id:'6', 'title': '夺宝联盟游戏规则及开奖说明'},
					{id:'7', 'title': '夺宝联盟游戏规则及开奖说明'}
				]
			}
		},

		methods: {
			goGuideContent: function (id) {
				this.$router.push({ name: 'guideContent', params: {guideId: id}});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.user-guide {
		$wrapperWidth   : 1200px;
		$barTitleHeight : 32px;

		.wrapper {
			color: #414141;
			height: 100%;
			width: $wrapperWidth;
			margin: 0 auto;
			padding-top: 8px;
			padding-bottom: 380px;

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
				list-style: none;
				width: 100%;
				margin:0 auto;
				padding: 18px 80px;

				li {
					cursor: pointer;
					float: left;
					height: 50px;
					line-height: 50px;
					width: 345px;

					.dot {
						background-color: #d43328;
						display: inline-block;
						width: 10px;
						height: 10px;
						border-radius: 50%;
						margin-right: 10px;
					}
				}
			}
		}
	}
</style>