<template>
	<div class="product clear">
		<div class="left-part left">
			<div class="left-img">
				<img src="../../assets/kaijiang.jpg" alt="">
			</div>
		</div>
		<div class="right-part left">
			<div class="product-name">
				<h2>IPhone8 128G</h2>
			</div>

			<div class="product-description">
				<span>
					里约热内卢世界杯官方合作纪念版，全球限量1000部
				</span>
			</div>

			<div class="countdown-wrapper clear">
				<div class="issue">
					<span>第1004期</span>
				</div>

				<div class="countdown-label">
					<span>距离结束还剩</span>
				</div>

				<div class="countdown">
					<span class="time day">99</span>
					<span>天</span>
					<span class="time hour">12</span>
					<span>时</span>
					<span class="time minute">07</span>
					<span>分</span>
					<span class="time second">26</span>
					<span>秒</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'product',

		props: [
		],

		data: function () {
			return {
			}
		},

		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	$productImgWidth        : 428px;
	$productImgHeight       : 428px;
	$countdownTop           : 12px;

	.product {
		color: #000;
		margin-top: 21px;

		.left-part {

			.left-img {
				height: $productImgWidth;
				width: $productImgHeight;
				border: 1px solid #f4e2ce;

				img{
					width: 100%;
					height: 100%;
				}

			}
		}

		.right-part {
			margin-left: 30px;

			.product-name{
				color: #403e3f;
			}

			.product-description {
				color: #9e9e9e;
			}

			.countdown-wrapper {
				margin-top: 10px;
				border-top: 1px;
				padding: 14px 0;
				border-top: 1px dashed #b9b9b9; 
				border-bottom: 1px dashed #b9b9b9; 
				background-color: #fcf7f1;

				&>div {
					float: left;
				}

				.issue {
					padding: 12px 14px;
					color: #fff;
					background-color: #ea3c3d;
				}

				.countdown-label {
					color: #423f3a;
					margin-left: 17px;
					margin-top: $countdownTop;
				}

				.countdown {
					margin-top: $countdownTop;
					margin-left: 21px;
					
					.time {
						color: #e0080d;
						font-size: 18px;
						font-weight: 600;
					}
				}
			}

		}
	}
</style>