export default {
	SET_ALERT_STATUS: function (state, opt) {
		state.showAlert = opt.status;
	},

	SET_ALERT_DATA: function (state, opt) {
		state.alertData = opt;
	},

	SET_WIN_ALERT_STATUS: function (state, opt) {
		state.showWinAlert = opt.status;
	},

	SET_WIN_ALERT_DATA: function (state, opt) {
		state.winAlertData = opt;
	},
};