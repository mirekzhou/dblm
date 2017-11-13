import axios from 'axios';

export default {
	get: function ({state, dispatch, commit}, opt) {
	},

	post: function ({state, dispatch, commit}, opt) {
		var rs;
		var qs     = require('qs');
		var domain = 'wwww.baidu.com/';

		opt.data = qs.stringify(opt.data);

		axios({
			method  : 'post',
			url     : domain + opt.url,
			data    : opt.data,
			timeout : 20000
		}).then(function (response) {

		}).catch(function (xhr, testStatus, error) {
			console.log('【错误】：' + xhr);
			console.log('【参数】：' + JSON.stringify(opt));
		})
	}
};