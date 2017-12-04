export default {
	showAlert: function ({commit}, opt) {
		commit('SET_ALERT_STATUS', {status: true});
		commit('SET_ALERT_DATA', opt);
	},

	hideAlert: function ({commit}, opt) {
		commit('SET_ALERT_STATUS', {status: false});
	},

	showWinAlert: function ({commit}, opt) {
		commit('SET_WIN_ALERT_STATUS', {status: true});
		commit('SET_WIN_ALERT_DATA', opt);
	},

	hideWinAlert: function ({commit}, opt) {
		commit('SET_WIN_ALERT_STATUS', {status: false});
	},
};