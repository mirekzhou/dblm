export default {
	getLoginStatus: function ({state, dispatch, commit}) {
		var status;
    	var opt = {
    		url: Config.urls.loginStatus
    	};

		Service.get(opt, function (data) {
			status = (data == 0)?true : false;
			commit('SET_LOGIN_STATUS', {status: status});

			if (status) {    //Èç¹ûÒÑµÇÂ¼
				dispatch('getLoginUserInfo');           //»ñÈ¡µÇÂ¼ÓÃ»§ÐÅÏ¢

				if (!state.sportUrl) {             //»ñÈ¡ÌåÓýurl
					dispatch('getSportUrl');
				}

				if (!state.phoneBettingUrl) {      //»ñÈ¡µçÍ¶url
					dispatch('getPhoneBettingUrl');
				}
			} else {         //Èç¹ûÎ´µÇÂ¼
				if (!state.sportTryUrl) {          //»ñÈ¡Î´µÇÂ¼ÌåÓýurl
					dispatch('getSportTryUrl');
				}

				if (!state.phoneBettingTryUrl) {   //»ñÈ¡Î´µÇÂ¼µçurl
					dispatch('getPhoneBettingTryUrl');
				}
			}
		});
	},

	switchRegisterDialog: function ({commit}, opt) {
		commit('SET_REGISTER_DIALOG_STATUS', {status: opt.status});
	},

	setLoginStatus: function ({commit}, opt) {
		commit('SET_LOGIN_STATUS', {status: opt.status});
	},

	setAlertStatus: function ({commit}, opt) {
		commit('SET_ALERT_STATUS', {status: opt.status});
	}
};