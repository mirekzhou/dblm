/*
**  【1】 mutation必须同步执行, 所以异步请求不能写在mutation里面
**  【2】 mutation的参数是state
*/

export default {
	SET_SHAREDIALOG_STATUS: function (state, opt) {
		state.showShareDialog = opt.status;
	}
};