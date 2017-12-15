<template>
	<div class="new-prize">
		<div class="wrapper">
			<section-title title="最新开奖" :sectionData="sectionData">
			</section-title>
			<prize-info :prizeInfoData='prizeInfoData' v-if="prizeInfoData.length > 0"></prize-info>
		</div>
	</div>
</template>

<script>
	import SectionTitle 	 from './sectionTitle';
	import PrizeInfo 		 from './prizeInfo';
	import prize_info_1		 from '../../assets/prize_info_1.jpg';
	import prize_info_2		 from '../../assets/prize_info_2.jpg';
	import '../../scss/common.scss';


	export default {
		name: 'new-prize',

		props: [
		],

		data: function () {
			return {
				sectionData: {
					color: '#d53328',
					iconPosition: '0 -104px',
					isMore: true,
					width: 25,
					height: 25,
					border: '8px solid #d53328'
				},

				prizeInfoData: []
			}
		},

		components: {
			'section-title'  :  SectionTitle,
			'prize-info'	 :  PrizeInfo
		},

		methods: {
				getData: function () {
				var that = this;
				var opt = {
					localUrl: true,
					url: '../../../data/prizeInfo.json',
					callback: function (data) {
						that.prizeInfoData = data.data;

						for (var i = 0; i < that.prizeInfoData.length; i++) {
							if (!that.prizeInfoData[i].imgUrl) {
								that.prizeInfoData[i].imgUrl = prize_info_1;
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
	.new-prize {
		float: left;
		width: 100%;

		.wrapper {
			margin: 0 auto;
		}
	}
</style>