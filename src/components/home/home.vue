<template>
	<div class="page home-page">
		<div class="wrapper">
			<div class="nav">
				首页 > 夺宝 > IPhone8 128G
			</div>

			<product></product>
			<drawing-zone></drawing-zone>
			<my-data></my-data>
			<lucky-board></lucky-board>
			<user-records></user-records>
		</div>

	</div>
</template>

<script>
	import '../../scss/common.scss';
	import Product         from './product';
	import DrawingZone     from './drawingZone';
	import MyData          from './myData';
	import LuckyBoard      from './luckyBoard';
	import UserRecords     from './userRecords';

	export default {
		name: 'home-page',

		data: function () {
			return {
			}
		},

		components: {
			'product'        :  Product,
			'drawing-zone'   :  DrawingZone,
			'my-data'        :  MyData,
			'lucky-board'    :  LuckyBoard,
			'user-records'   :  UserRecords
		}
	}
</script>

<style lang="scss" scoped>
	$wrapperWidth   : 1024px;

	.home-page {
		color: #000;

		.wrapper {
			width: 1024px;

			.nav {
				margin-top: 21px;

			}
		}
	}
</style>