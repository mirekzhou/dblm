<template>
	<div class="page home-page">
		首页
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper';
	import homeBanner from '../../assets/home-banner.png';

	export default {
		name: 'home-page',

		data: function () {
			return {
		        swiperOption: {
		          	pagination: '.swiper-pagination',
		          	paginationClickable: true,
			        prevButton:'.left-arrow',
			        nextButton:'.right-arrow',
			        spaceBetween: 0
		        },

		        banners: [
		        	homeBanner,
		        	homeBanner,
		        	homeBanner,
		        	homeBanner
		        ]
			}
		},

		components: {
			'swiper': swiper,
			'swiper-slide': swiperSlide
		},

		methods: {
			showLoginDialog: function () {
				this.$store.dispatch('switchLoginDialog', {status: true});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.home-page {
		color: #000;

		.home-page-wrapper {
			position: relative;

			.swiper-zone {
			    -webkit-user-select: none;
			    user-select: none;
				position: relative;
				width: 100%;

				.left-arrow {
					background-image: url(../../assets/page-left-arrow.png);
					cursor: pointer;
					height: 60px;
					width: 60px;
				    position: absolute;
				    top: 50%;
				    margin-top: -30px;
				    left: 50px;
				    z-index: 2;

					&:hover {
						background-image: url(../../assets/page-left-arrow-active.png);
					}
				}

				.middle-zone {
					height: auto;
				}

				.right-arrow {
					background-image: url(../../assets/page-right-arrow.png);
					cursor: pointer;
					height: 60px;
					width: 60px;
	   				position: absolute;
				    top: 50%;
				    margin-top: -30px;
				    right: 50px;
				    z-index: 2;

					&:hover {
						background-image: url(../../assets/page-right-arrow-active.png);
					}
				}
			}
		}
	}
</style>