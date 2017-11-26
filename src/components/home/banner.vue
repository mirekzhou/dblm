<template>
	<div class="banner">
		<div class="banner-wraper wrapper">
			<swiper :options="swiperOption"  ref="mySwiper">  
				<swiper-slide v-for="item in banners" :key="item">  
					<img :src="item" style="width:100% !important">
				</swiper-slide>  
				<div class="swiper-pagination" slot="pagination"></div>  
			</swiper>  

			<rule></rule>
		</div>
	</div>
</template>

<script>
	require('swiper/dist/css/swiper.css');
	import Rule from './rule'
	import { swiper, swiperSlide } from 'vue-awesome-swiper';
	import homeBanner from '../../assets/banner.png';
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
	}
</style>