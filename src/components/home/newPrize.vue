<template>
	<div class="new-prize">
		<div class="wrapper">
			<section-title title="最新开奖" :sectionData="sectionData">
			</section-title>
			<prize-info :prizeInfoData='prizeInfoData'></prize-info>
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

				prizeInfoData: [
					{
						imgUrl: prize_info_1,
						title: '品尝芳醇的桂花之魄',
						cycle: '第20170923993期',
						phoneNumber: '13657221474',
						winNumber: '12000',

					},
					{
						imgUrl: prize_info_2,
						title: '品尝芳醇的桂花之魄',
						cycle: '第20170923993期',
						phoneNumber: '13657221474',
						winNumber: '12000'

					},
					{
						imgUrl: prize_info_1,
						title: '品尝芳醇的桂花之魄',
						cycle: '第20170923993期',
						phoneNumber: '13657221474',
						winNumber: '12000'
					},
					{
						imgUrl: prize_info_1,
						title: '品尝芳醇的桂花之魄',
						cycle: '第20170923993期',
						phoneNumber: '13657221474',
						winNumber: '12000'
					},
					{
						imgUrl: prize_info_1,
						title: '品尝芳醇的桂花之魄',
						cycle: '第20170923993期',
						phoneNumber: '13657221474',
						winNumber: '12000'
					},
					{
						imgUrl: prize_info_1,
						title: '品尝芳醇的桂花之魄',
						cycle: '第20170923993期',
						phoneNumber: '13657221474',
						winNumber: '12000'
					},
					{
						imgUrl: prize_info_1,
						title: '品尝芳醇的桂花之魄',
						cycle: '第20170923993期',
						phoneNumber: '13657221474',
						winNumber: '12000'
					}
				]
			}
		},

		components: {
			'section-title'  :  SectionTitle,
			'prize-info'	 :  PrizeInfo
		},

		methods: {
		}
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