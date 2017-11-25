<template>
	<div class="banner">
		<div class="banner-wraper wrapper">
			<swiper :options="swiperOption"  ref="mySwiper">  
				<swiper-slide v-for="item in banners" :key="item">  
					<img :src="item" style="width:100% !important">
				</swiper-slide>  
				<div class="swiper-pagination" slot="pagination"></div>  
			</swiper>  

			<div class="rule-wrapper">
				<div class="rules">
					<div class="title">
						<i class="icon-book"></i>
						<span>夺宝规则</span>
					</div>

					<div v-for ="val in rules">
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
		</div>
	</div>
</template>

<script>
	require('swiper/dist/css/swiper.css');
	import { swiper, swiperSlide } from 'vue-awesome-swiper';
	import homeBanner from '../../assets/kaijiang.jpg';
	import '../../scss/common.scss';

	export default {
		name: 'banner',

		props: [
		],

		data: function () {
			return {
				swiperOption: {
					pagination: '.swiper-pagination',
					paginationClickable: true,
					autoplay: 5000,
					loop: true,
					spaceBetween: 0
				},

				banners: [
					homeBanner,
					homeBanner,
					homeBanner,
					homeBanner
				],

				rules: [
					{
						stepTitle: '步骤一',
						text: '选择心仪商品参与夺宝获得一枚幸运码，同时生产夺宝分享链接'
					},
					{
						stepTitle: '步骤二',
						text: '将链接分享给好友，邀请好友来助攻，好友点击链接即可为您多获得一枚幸运码'
					},
					{
						stepTitle: '步骤三',
						text: '等待平台开出幸运号码，持有对应的用户0元揽获大奖'
					},
				]
			}
		},

		components: {
			'swiper': swiper,
			'swiper-slide': swiperSlide
		},

		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	$productImgWidth        : 428px;
	$productImgHeight       : 428px;
	$countdownTop           : 12px;
	$lineWidth 				: 253px;
	$ruleInnerWidth			: 228px;

	.banner {
		margin-top: 120px;
		width: 100%;
		height: 424px;
		float: left;
		background-color: #eae0d4;

		.banner-wraper {
			margin: 0 auto;
			height: 100%;
			position: relative;


			.swiper-container {
				height: 100%;

				.swiper-wrapper {
					height: 100%;

					img {
						height: 100%;
					}
				}
			}
		}

		.rule-wrapper {
			position: absolute;
			right: 0;
			top: 0;
			z-index: 99;
			width: 274px;
			height: 410px;
			text-align: center;
			line-height: 26px;
			color: #737272;
			padding: 15px 0 0 12px;
			margin-top: 6px;
			font-size: 12px;
			
			.rules {
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
	}
</style>