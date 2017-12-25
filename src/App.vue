<template>
	<div id="app">
		<my-header></my-header>

		<transition name="fade">
		    <keep-alive>
		      	<router-view></router-view>
		    </keep-alive>
		</transition>

		<my-footer></my-footer>

		<share-dialog   v-if="showShareDialog"></share-dialog>
		<address-dialog v-if="showAddressDialog"></address-dialog>
		<help-dialog    v-if="showHelpDialog"></help-dialog>
		<win-dialog     v-if="showWinDialog"></win-dialog>
		<lose-dialog    v-if="showLoseDialog"></lose-dialog>
	</div>
</template>

<script>
	import { mapState }   from 'vuex';
	import suspension     from './components/suspension';
	import header         from './components/header/header';
	import footer         from './components/footer/footer';

	import ShareDialog    from './components/common/ShareDialog';
	import addressDialog  from './components/common/addressDialog';
	import helpDialog     from './components/common/helpDialog';
	import winDialog     from './components/common/winDialog';
	import loseDialog     from './components/common/loseDialog';

	import alert          from './plugins/alert';

	export default {
		name: 'app',

		data: function () {
			return {
			}
		},

		mounted: function () {
			this.$store.dispatch('showHelpDialog');    //弹出助攻对话框
			//this.$store.dispatch('showWinDialog');       //弹出夺宝成功对话框
			//this.$store.dispatch('showLoseDialog');    //弹出夺宝失败对话框
		},

		methods: {
		},

		computed: mapState({
			showAlert: function (state) {
				return state.showAlert;
			},

			showShareDialog: function (state) {
				return state.showShareDialog;
			},

			showAddressDialog: function (state) {
				return state.showAddressDialog;
			},

			showHelpDialog: function (state) {
				return state.showHelpDialog;
			},

			showWinDialog: function (state) {
				return state.showWinDialog;
			},

			showLoseDialog: function (state) {
				return state.showLoseDialog;
			}
		}),

		components: {
			'my-header'     :  header,
			'my-footer'     :  footer,
			'suspension'    :  suspension,

			'alert'         :  alert,
			'share-dialog'  :  ShareDialog,
			'address-dialog':  addressDialog,
			'help-dialog'   :  helpDialog,
			'win-dialog'    :  winDialog,
			'lose-dialog'   :  loseDialog
		}
	}
</script>

<style lang="scss">
	html {
		height: 100%;
		width: 100%;
		margin: 0;
		padding: 0;
		overflow-y: scroll;
	}

	body {
		background-color: #FFF;
	}

	#app {
		.fade-enter-active, .fade-leave-active {
		  transition-property: opacity;
		  transition-duration: .25s;
		}

		.fade-enter-active {
		  transition-delay: .25s;
		}

		.fade-enter, .fade-leave-active {
		  opacity: 0
		}
	}
</style>