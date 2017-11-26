<template>
	<div class="snatch-treasure">
		<div class="wrapper">
			<section-title title="夺宝专区" :sectionData="sectionData">
			</section-title>
			<treasure :treasureData='treasureData'></treasure>
		</div>
	</div>
</template>

<script>
	import SectionTitle 	 from './sectionTitle';
	import Treasure          from './treasure';
	import prizeImg			 from '../../assets/kaijiang.jpg'
	import '../../scss/common.scss';


	export default {
		name: 'snatch-treasure',

		props: [
		],

		data: function () {
			return {
				sectionData: {
					color: '#d55528',
					iconPosition: '0 -150px',
					isMore: false,
					width: 29,
					height: 25,
					border: '8px solid #d55528'
				},

				treasureData: [
					{
						'cycle': '125545121212期',
						'imgUrl': prizeImg,
						'prize': 'IPHONE8 128G 夺宝联盟巴西世界杯高级定制版全球限量1000台 各种颜色均有 全网通 全网通 全网通',
						'price': '8999',
						'progressData': {
							'total': 220,
							'current': 120
						},
						'drawLotteryStatus': 1
					},
					{
						'cycle': '125545121212期',
						'imgUrl': prizeImg,
						'prize': 'IPHONE8 128G 夺宝联盟巴西世界杯高级定制版全球限量1000台 各种颜色均有 全网通 全网通 全网通',
						'price': '8999',
						'progressData': {
							'total': 220,
							'current': 120
						},
						'drawLotteryStatus': 2
					},
					{
						'cycle': '125545121212期',
						'imgUrl': prizeImg,
						'prize': 'IPHONE8 128G 夺宝联盟巴西世界杯高级定制版全球限量1000台 各种颜色均有 全网通 全网通 全网通',
						'price': '8999',
						'progressData': {
							'total': 220,
							'current': 120
						},
						'drawLotteryStatus': 3
					},
					{
						'cycle': '125545121212期',
						'imgUrl': prizeImg,
						'prize': 'IPHONE8 128G 夺宝联盟巴西世界杯高级定制版全球限量1000台 各种颜色均有 全网通 全网通 全网通',
						'price': '8999',
						'progressData': {
							'total': 220,
							'current': 120
						},
						'drawLotteryStatus': 4
					},
				]
			}
		},

		components: {
			'section-title'  :  SectionTitle,
			'treasure'       :  Treasure
		},

		methods: {
		}
	}
</script>

<style lang="scss" scoped>
	.snatch-treasure {
		float: left;
		width: 100%;
		margin-top: 25px;

		.wrapper {
			margin: 0 auto;
		}
	}
</style>