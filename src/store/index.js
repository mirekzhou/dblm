import Vue       from 'vue';
import Vuex      from 'vuex';
import actions   from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
	loginStatus            :   '',      //登录状态
	loginUserInfo          :   '',      //已登录用户信息

	showLoginDialog        :   false,
	showRegisterDialog     :   false,
	showAlert              :   false
};

export default new Vuex.Store({
	state      :  state,
	actions    :  actions,
	mutations  :  mutations
});

