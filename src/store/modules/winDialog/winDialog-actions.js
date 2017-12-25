export default {
	showWinDialog: function ({commit}, opt) {
		commit('SET_WIN_DIALOG_STATUS', {status: true});
	},

	hideWinDialog: function ({commit}, opt) {
		commit('SET_WIN_DIALOG_STATUS', {status: false});
	},
};