<template>
	<div class="home-page">
			<banner></banner>
			<win-info></win-info>
			<new-prize></new-prize>
			<snatch-treasure></snatch-treasure>
			<user-records></user-records>

	</div>
</template>

<script>
	import '../../scss/common.scss';
	import Banner         from './banner';
	import WinInfo     from './winInfo';
	import newPrize          from './newPrize';
	import SnatchTreasure      from './snatchTreasure';
	import UserRecords     from './userRecords';

	export default {
		name: 'home-page',

		data: function () {
			return {
			}
		},

		components: {
			'banner'        :  Banner,
			'win-info'   :  WinInfo,
			'new-prize'        :  newPrize,
			'snatch-treasure'    :  SnatchTreasure,
			'user-records'   :  UserRecords
		}
	}
</script>

<style lang="scss" scoped>
	$wrapperWidth   : 1200px;

	.home-page {
		color: #000;
	}
</style>