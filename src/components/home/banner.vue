<template>
	<div class="banner">
		<div class="banner-wraper" >
			<swiper :options="swiperOption"  ref="mySwiper" v-if="banners.length > 0">
				<swiper-slide v-for="item in banners" :key="item.imgUrl">
					<img :src="item.imgUrl" style="width:100% !important">
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
					autoplay: 3000,
					speed: 2000,
					loop: true,
					autoplayDisableOnInteraction : false,
					spaceBetween: 0,
					effect: 'fade',
					fade: {
						crossFade: true,
					}
				},

				banners: [],
			}
		},

		components: {
			'swiper'		: swiper,
			'swiper-slide'  : swiperSlide,
			'rule'		  	: Rule
		},

		methods: {
			getData: function () {
				var that = this;
				var opt = {
					localUrl: true,
					url: '../../../data/banner.json',
					callback: function (data) {
						that.banners = data.data;

						for (var i = 0; i < that.banners.length; i++) {
							if (!that.banners[i].imgUrl) {
								that.banners[i].imgUrl = homeBanner;
							}
						}
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