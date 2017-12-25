import Vue       from 'vue';
import Vuex      from 'vuex';
import actions   from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
	postDict: {},

	loginStatus            :   false,      //登录状态
	userName               :   'Kris',
	loginUserInfo          :   '',      //已登录用户信息

	showAlert              :   false,
	alertData              :   '',

	showLoginDialog        :   false,
	showRegisterDialog     :   false,

	showShareDialog 	   :   false,
	showAddressDialog      :   false,
	showHelpDialog         :   false,
	showWinDialog          :   false,
	showLoseDialog         :   false
};

export default new Vuex.Store({
	state      :  state,
	actions    :  actions,
	mutations  :  mutations
});

