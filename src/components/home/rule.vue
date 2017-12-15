<template>
	<div class="rule">
		<div class="rule-wrap">
			<div class="title">
				<i class="icon-book"></i>
				<span>夺宝规则</span>
			</div>

			<div v-for ="val in rules" v-if="rules.length > 0">
				<div class="rule-box">
					<div class="step-title">
						<i class="icon-light"></i>
						<span>{{val.stepTitle}}</span>
					</div>
					<p>{{val.text}}</p>
				</div>
				<div class="line"></div>
			</div>
		</div>

		<div class="annotatio">
			<p>注：助攻越多，幸运码越多，中奖率越大；一个好友在同个夺宝中只可助攻一次。</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'rule',

		props: [
		],

		data: function () {
			return {
				rules: []
			}
		},

		methods: {
			getData: function () {
				var that = this;
				var opt = {
					localUrl: true,
					url: '../../../data/rule.json',
					callback: function (data) {
						that.rules = data.data;
					}
				};

				this.$store.dispatch('get', opt);
			},
		},
		mounted: function () {
			this.getData();
		},
	}
</script>

<style lang="scss" scoped>
	$ruleInnerWidth			: 228px;
	$lineWidth 				: 253px;

	.rule {
		position: absolute;
		right: 0;
		top: 0;
		z-index: 1;
		width: 274px;
		height: 410px;
		text-align: center;
		line-height: 26px;
		color: #737272;
		padding: 15px 0 0 12px;
		margin-top: 6px;
		font-size: 12px;
		background: #f6f2ed;

		.rule-wrap {
			margin: 0 auto;

			.rule-box {
				width: $ruleInnerWidth;
				margin: 0 auto;

				.step-title {
					vertical-align: center;
					margin-top: 10px;
					color: #666666;

					.icon-light {
						display: inline-block;
						width: 16px;
						height: 20px;
						background: url("../../assets/common-sprite.png") 0 -59px;
						vertical-align: top;
						margin: 2px 10px 0 0;
					}
				}
			}

			.line {
				height: 1px;
				width: $lineWidth;
				background-color: #f1ede8;
				margin-top: 10px;
			}

			.title {
				color: #d63328;

				.icon-book {
					display: inline-block;
					width: 22px;
					height: 18px;
					background: url("../../assets/common-sprite.png") 0 -39px;
					vertical-align: top;
					margin: 5px 5px 0 0;
				}
			}
		}

		.annotatio {
			width: $lineWidth;
			margin-top: 5px;
		}
	}
</style>