export default {
	showAddressDialog: function ({commit}, opt) {
		commit('SET_ADDRESS_DIALOG_STATUS', {status: true});
	},

	hideAddressDialog: function ({commit}, opt) {
		commit('SET_ADDRESS_DIALOG_STATUS', {status: false});
	},
};