export default {
	showAlert: function ({commit}, opt) {
		commit('SET_ALERT_STATUS', {status: true});
		commit('SET_ALERT_DATA', opt);
	},

	hideAlert: function ({commit}, opt) {
		commit('SET_ALERT_STATUS', {status: false});
	}
};