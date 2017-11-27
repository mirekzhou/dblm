export default {
	getShareDialogStatus: function ({state, dispatch, commit}) {
	},

	setShareDialogStatus: function ({commit}, opt) {
		commit('SET_SHAREDIALOG_STATUS', {status: opt.status});
	}
};