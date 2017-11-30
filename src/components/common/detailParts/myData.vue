<template>
	<div class="my-data">
		<div class="title">我的夺宝数据</div>

		<div class="content">
			<div class="left-part">
				<span>收集幸运号码</span>
				<span class="item" v-for="num in numArr">{{num}}</span>
				<span>个</span>
			</div>

			<div class="right-part">
				<span class="big-text">中奖概率：</span>
				<span class="red-highlight">{{winRate}}</span>
				<span class="small-text">依据当前中奖名额计算，幸运号码越多中奖概率越大</span>
			</div>

			<div class="clear"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'my-data',

		props: [
		],

		data: function () {
			return {
				numArr: [3, 4],
				winRate: '35%'
			}
		},

		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.my-data {
		$contentHeight : 157px;

		margin-top: 30px;
		width: 100%;

		.title {
            background-color:#F7F7F7;
            height:50px;
            line-height:50px;
            padding-left:15px;
		}

		.content {
			border:1px solid #F0F0F0;
			border-top: 0;
			height: $contentHeight;

			.left-part {
				float: left;
				height: $contentHeight;
				line-height: $contentHeight;
				text-align: right;
				width: 400px;

				span {
					font-size: 20px;
				}

				.item {
					background-color: #d43328;
					border-radius: 6px;
					color: #FFF;
					display: inline-block;
					font-size: 24px;
					height: 55px;
					line-height: 55px;
					margin-left: 5px;
					text-align: center;
					width: 55px;
				}
			}

			.right-part {
				float: right;
				height: $contentHeight;
				line-height: $contentHeight;
				text-align: left;
				width: 664px;

				.big-text {
					font-size: 20px;
				}

				.small-text {
					font-size: 14px;
					margin-left: 10px;
					vertical-align: 3px;
				}

				.red-highlight {
					color: #d43328;
					font-size: 20px;
				}
			}
		}
	}
</style>