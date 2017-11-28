export default {
	getLoginStatus: function ({state, dispatch, commit}) {
	},

	setLoginStatus: function ({commit}, data) {
		commit('SET_LOGIN_STATUS', {status: data});
	}
};