<template>
	<div class="snatch-treasure">
		<div class="wrapper">
			<section-title title="夺宝专区" :sectionData="sectionData">
			</section-title>
			<treasure></treasure>
		</div>
	</div>
</template>

<script>
	import SectionTitle  from './sectionTitle';
	import '../../scss/common.scss';
	import Treasure from './treasure';


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
				}
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