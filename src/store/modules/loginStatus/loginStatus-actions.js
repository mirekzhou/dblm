export default {
	getLoginStatus: function ({state, dispatch, commit}) {
	},

	setLoginStatus: function ({commit}, opt) {
		commit('SET_LOGIN_STATUS', {status: opt.status});
	}
};