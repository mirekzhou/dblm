export default {
	showLoseDialog: function ({commit}, opt) {
		commit('SET_LOSE_DIALOG_STATUS', {status: true});
	},

	hideLoseDialog: function ({commit}, opt) {
		commit('SET_LOSE_DIALOG_STATUS', {status: false});
	},
};