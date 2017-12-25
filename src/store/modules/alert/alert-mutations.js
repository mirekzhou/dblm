export default {
	SET_ALERT_STATUS: function (state, opt) {
		state.showAlert = opt.status;
	},

	SET_ALERT_DATA: function (state, opt) {
		state.alertData = opt;
	}
};