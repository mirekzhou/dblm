<template>
	<div class="prize-info clear">
		<swiper :options="swiperOption"  ref="prizeInfoSwiper" >
			<swiper-slide v-for="(val, index) in formatPrizeInfoData" :key="index" v-if="formatPrizeInfoData">
				<div class="box" v-for="item in val">
					<img :src="item.imgUrl" v-on:click="goDetail" alt="">

					<div class="shade" v-on:click="goDetail">
						<p>{{item.title}}</p>
						<p class="red">{{item.cycle}}</p>
					</div>

					<div class="info-wrap">
						<div class="info-inner">
							<i class="left"></i>
							<div class="left">
								<p>中奖用户：{{item.phoneNumber}}</p>
								<p>中奖号码：{{item.winNumber}}</p>
							</div>
						</div>
					</div>
				</div>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	require('swiper/dist/css/swiper.css');
	import { swiper, swiperSlide } 	 from 	 'vue-awesome-swiper';
	import '../../scss/common.scss';
	export default {
		name: 'prize-info',

		props: [
			'prizeInfoData'
		],

		data: function () {
			return {
				swiperOption: {
					pagination: '.swiper-pagination',
					paginationClickable: true,
					speed: 500,
					autoplay: 5000,
					autoplayDisableOnInteraction : false
				},

				formatPrizeInfoData: []
			}
		},

		components: {
			'swiper'		: swiper,
			'swiper-slide'  : swiperSlide,
		},

		methods: {
			goDetail: function () {
				this.$router.push('/latestDetail');
			}
		},

		created: function () {
			var tempLength = this.prizeInfoData.length;
			var page = Math.ceil(tempLength/3);

			for (var i = 0; i < page; i++ ) {
				if (this.formatPrizeInfoData[i] == undefined) {
					this.formatPrizeInfoData[i] = [];
				}
				for (var j = 0; j < 3; j++) {
					if(this.prizeInfoData[i*3 + j] != undefined) {
						this.formatPrizeInfoData[i].push(this.prizeInfoData[i*3 + j])
					}
				}
			}
		},
	}
</script>

<style lang="scss" scoped>
	$infoWidth		:	384px;
	.prize-info {
		margin-top: 20px;
		position: relative;
		cursor: pointer;

		.swiper-container  {
			height: 350px;

			.box {
				position: relative;
				height: 339px;
				float: left;
				margin-right: 5px;
				border-radius: 8px;
				overflow: hidden;

				img {
					width: $infoWidth;
					height: 269px;
				}

				.info-wrap {
					width: $infoWidth;
					height: 90px;
					position: absolute;
					bottom: 0;
					color: #fff;
					background: url("../../assets/common-sprite.png") 0 -248px;

					.info-inner {
						width: 272px;
						height: 54px;
						margin: 23px 0px 0 50px;

						i {
							display: inline-block;
							width: 54px;
							height: 54px;
							border: 2px solid white;
							border-radius: 50%;
							background: url("../../assets/prize_info_header.png");
						}

						div {
							margin: 10px 0 0 30px;
						}
					}
				}

				.red {
					color: #d53328;
				}

				.shade {
					position: absolute;
					width: 251px;
					height: 81px;
					background-color: rgba(0,0,0,0.2);
					left: 50%;
					top: 50%;
					transform: translate(-50%,-50%);
					text-align: center;
					padding-top: 25px;
					color: #fff;
				}
			}

			.swiper-pagination {
				position: absolute;
				width: 14px;
				height: 74px;
				top: -6px;
				right: 0;
				left: inherit;
				cursor: default;

				span {
					display: inline-block;
					width: 12px;
					height: 12px;
					border: 1px solid #d53328;
					border-radius: 50%;
					margin-top: 10px;

					&:first-child {
						margin-top: 0;
					}

					&.active {
						background: #d53328;
					}
				}
			}
		}
	}
</style>