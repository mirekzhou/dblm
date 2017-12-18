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

				<p class="section3" v-html="content">
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
				title: '',
				content: '',

				dict: {
					'1': {
						title: '什么是夺宝联盟？',
						content: '夺宝联盟一个集抽奖、砍价、投票于一体的娱乐分享平台，他集成了抽奖的随机性，砍价的可玩性，投票的方便性，让每一个参与夺宝的用户都能通过分享，邀请好友助攻，获得幸运码，最终在系统的抽奖中获得奖品。夺宝联盟是一个专为用户挖掘身边社交圈价值的平台，我们提供免费的平台和免费的奖品，供每一位用户在这里轻松分享快乐、创造梦想机遇。'
					},
					'2': {
						title: '夺宝联盟怎么玩？',
						content: '夺宝联盟玩法简单，上手轻松。我们将不定时的在平台开放夺宝奖品，且每一期的奖品都不同，用户只需点击奖品下方的参与夺宝，即可生成属于自己的夺宝链接，将夺宝链接发给好友，邀请好友前来助攻，您即可获得随机的幸运码，每一位好友助攻获得一个幸运码，累计的幸运码越多，中奖率就越大。在达到开奖人数和开奖时间后，系统即会在本期所有参与夺宝的用户中抽取幸运码，抽中的幸运码用户将免费获得本轮夺宝的奖品。'
					},
					'3': {
						title: '什么是幸运码？',
						content: '每一期夺宝开始后，在您参与夺宝或分享夺宝获得助攻后，都会获得随机的幸运号码。幸运号码是开奖时抽取中奖的唯一标识，只有一个幸运码也可能会中奖，累计的幸运码越多则中奖率也会越大。'
					},
					'4': {
						title: '开奖规则说明',
						content: '中奖号码计算方法：中奖号码={A+B}/参与人数（取余数）+10000001<div style="paddingLeft: 50px;">A:本商品最后50名参与用户的时间之和，精确至毫秒</div><div style="paddingLeft: 50px;">例如16:25:30.527->162530527</div><div style="paddingLeft: 50px;">B:截止时间最近一期XX彩开奖结果，如出现例外则视结果为00000，用户号码从10000001起始，顺序发放</div>'
					},
					'5': {
						title: '参与人次与中奖名额',
						content: '每个夺宝项目，设置有要求参与人次以及倒计时。<div style="paddingLeft: 50px;">倒计时截止时，若参与人数<要求参与人次，则为联盟组建失败，不开奖。</div><div style="paddingLeft: 50px;">倒计时截止时，参与人数达到要求参与人次的，则顺利进行开奖。</div><div style="paddingLeft: 50px;">只要倒计时未结束，参与人数达到要求后，其他用户仍可参与夺宝或是夺宝助攻</div>'
					},
					'6': {
						title: '中奖以后如何领奖？',
						content: '中奖后平台会通过邮件、手机及系统通知中通知您，您也可以在个人中心里查看到自己获得的奖品，在奖品后面完善您个人的邮寄地址，奖品即会送达到您的手中。'
					},
					'7': {
						title: '如何提高中奖率？',
						content: '不断的分享，邀请更多的好友来助攻，获得更多的幸运码，就会提高中奖率。一个好友只能贡献一个幸运码。'
					}
				}
			}
		},

		activated: function () {
			var id = this.$route.params.guideId || '1';

			this.title   = this.dict[id].title;
			this.content = this.dict[id].content;
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