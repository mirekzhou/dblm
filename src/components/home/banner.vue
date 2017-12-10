<template>
	<div class="banner">
		<div class="banner-wraper">
			<swiper :options="swiperOption"  ref="mySwiper">
				<swiper-slide v-for="item in banners" :key="item">
					<img :src="item" style="width:100% !important">
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>

			<div class="wrapper">
				<rule></rule>
			</div>
		</div>
	</div>
</template>

<script>
	require('swiper/dist/css/swiper.css');
	import Rule 					 from	 './rule';
	import homeBanner  			  	 from 	 '../../assets/banner.jpg';
	import homeBanner2  			 from 	 '../../assets/banner2.jpg';
	import homeBanner3  			 from 	 '../../assets/banner3.jpg';
	import homeBanner4 			  	 from 	 '../../assets/banner4.jpg';
	import { swiper, swiperSlide } 	 from 	 'vue-awesome-swiper';
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
					speed: 2000,
					loop: true,
					autoplayDisableOnInteraction : false,
					spaceBetween: 0,
					effect: 'fade',
					fade: {
						crossFade: true,
					}
				},

				banners: [
					homeBanner,
					homeBanner2,
					homeBanner3,
					homeBanner4
				],
			}
		},

		components: {
			'swiper'		: swiper,
			'swiper-slide'  : swiperSlide,
			'rule'		  	: Rule
		},

		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	$productImgWidth        : 428px;
	$productImgHeight       : 428px;
	$countdownTop           : 12px;

	.banner {
		width: 100%;
		height: 424px;
		float: left;
		background-color: #eae0d4;

		.banner-wraper {
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

			.wrapper {
				height: 100%;
				width: 1200px;
				margin: 0 auto;
				position: relative;
				top: -100%;
			}
		}
	}
</style>