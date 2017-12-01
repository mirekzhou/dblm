<template>
	<div id="app">
		<my-header></my-header>

		<transition name="fade">
		    <keep-alive>
		      	<router-view></router-view>
		    </keep-alive>
		</transition>

		<my-footer></my-footer>

		<share-dialog   v-show="showShareDialog"></share-dialog>
		<address-dialog v-show="showAddressDialog"></address-dialog>

<!-- 		<suspension></suspension>
		<breaking-news></breaking-news>
		<login></login>
		<register></register>
		<notifier :show="showToast" :toastr="toastr"></notifier> -->
	</div>
</template>

<script>
	import { mapActions } from 'vuex';
	import { mapState }   from 'vuex';
	import login          from './components/login';
	import register       from './components/register';
	import suspension     from './components/suspension';
	import breakingNews   from './components/breakingNews';
	import notifier       from 'cxlt-vue2-toastr/src/toastr/toastr';
	import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css';
	import header         from './components/header/header';
	import footer         from './components/footer/footer';
	import ShareDialog    from './components/common/ShareDialog';
	import addressDialog  from './components/common/addressDialog';

	export default {
		name: 'app',

		data: function () {
			return {
				showToast: true,
				toastr: {
					title: '紧急通知',
					message: '人民银行于北京时间2017-05-20 00:00 ~ 08:00进行系统升级，维护期间不支持办理出入款事务，造成不便请您谅解！',
					closeButton: true,
				    position: 'top right',
				    showDuration: 2000,
				    type: 'info',
				    timeOut: 5000
				}
			}
		},

		mounted: function () {
			// this.$store.dispatch('getLoginStatus');
			// this.$store.dispatch('getRegisterConfig');
		},

		methods: {
		},

		computed: mapState({
			showShareDialog: function (state) {
				return state.showShareDialog;
			},

			showAddressDialog: function (state) {
				return state.showAddressDialog;
			}
		}),

		components: {
			'my-header'     :  header,
			'my-footer'     :  footer,
			'login'         :  login,
			'register'      :  register,
			'suspension'    :  suspension,
			'breaking-news' :  breakingNews,
			'notifier'      :  notifier,
			'share-dialog'  :  ShareDialog,
			'address-dialog':  addressDialog
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