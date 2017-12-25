export default {
	showHelpDialog: function ({commit}, opt) {
		commit('SET_HELP_DIALOG_STATUS', {status: true});
	},

	hideHelpDialog: function ({commit}, opt) {
		commit('SET_HELP_DIALOG_STATUS', {status: false});
	},
};