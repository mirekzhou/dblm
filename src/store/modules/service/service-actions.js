import axios from 'axios';

export default {
	get: function({state, dispatch, commit}, opt) {
        var task;
        var that   = this;
		var url    = encodeURI(opt.url);

        opt.data = opt.data || {};

		axios({
			method  : 'get',
			url     : opt.url,
			data    : opt.data,
			timeout : 20000
		}).then(function (response) {
			if (opt.callback && typeof opt.callback === 'function') {
				opt.callback(response);
			}
		}).catch(function (xhr, testStatus, error) {
			console.log('【错误】：' + xhr);
			console.log('【参数】：' + JSON.stringify(opt));
		});
	},

	post: function ({state, dispatch, commit}, opt) {
		var rs;
		var qs     = require('qs');
		var domain = 'wwww.baidu.com/';

		opt.data = qs.stringify(opt.data);

		/*
		** 请求控制：两条相同的请求，如果第一条请求还未返回，则丢弃第二条请求
		*/
		if (!state.postDict[opt.url] || state.postDict[opt.url] == 'end') {
			state.postDict[opt.url] = 'start';
		} else if (state.postDict[opt.url] == 'start') {
			return;
		}

		axios({
			method  : 'post',
			url     : domain + opt.url,
			data    : opt.data,
			timeout : 20000
		}).then(function (response) {
			state.postDict[opt.url]= 'end';
		}).catch(function (xhr, testStatus, error) {
			state.postDict[opt.url]= 'end';
			console.log('【错误】：' + xhr);
			console.log('【参数】：' + JSON.stringify(opt));
		})
	}
};