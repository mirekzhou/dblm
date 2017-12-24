<template>
	<div class="snatch-treasure">
		<div class="wrapper">
			<section-title title="夺宝专区" :sectionData="sectionData">
			</section-title>
			<treasure :treasureData='treasureData' v-if="treasureData.length > 0"></treasure>
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

				treasureData: []
			}
		},

		components: {
			'section-title'  :  SectionTitle,
			'treasure'       :  Treasure
		},


		methods: {
			getData: function () {
				var that = this;
				var opt = {
					localUrl: true,
					url: '../../../data/treasure.json',
					callback: function (data) {
						that.treasureData = data.data;

						for (var i = 0; i < that.treasureData.length; i++) {
							if (!that.treasureData[i].imgUrl) {
								that.treasureData[i].imgUrl = prizeImg;
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
	.snatch-treasure {
		float: left;
		width: 100%;
		margin-top: 25px;

		.wrapper {
			margin: 0 auto;
		}
	}
</style>