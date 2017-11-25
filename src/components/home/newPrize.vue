<template>
	<div class="new-prize">
		<div class="wrapper">
			<section-title title="最新开奖" :sectionData="sectionData">
			</section-title>
			<prize-info></prize-info>
		</div>


	</div>
</template>

<script>
	import SectionTitle  from './sectionTitle';
	import PrizeInfo from './prizeInfo';
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
					border: '3px solid #d53328'
				}
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