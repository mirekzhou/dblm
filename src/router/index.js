import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.config.debug = true;
Vue.use(VueRouter);

export default new VueRouter({
	mode: 'hash',
	base: __dirname,
	routes: [
		{
			path: '/',
			redirect: 'home'
		},
		{
			path: '/home',
			name: 'home',
			component: function (resolve) {
				require(['../components/home/home.vue'], resolve);
			}
		},
		{
			path: '/login',
			name: 'login',
			component: function (resolve) {
				require(['../components/login/login.vue'], resolve);
			}
		},
		{
			path: '/register',
			name: 'register',
			component: function (resolve) {
				require(['../components/register/register.vue'], resolve);
			}
		},
		{
			path: '/latest',
			name: 'latest',
			component: function (resolve) {
				require(['../components/latestRecords/latestRecords.vue'], resolve);
			}
		},
		{
			path: '/winRecords',
			name: 'winRecords',
			component: function (resolve) {
				require(['../components/winRecords/winRecords.vue'], resolve);
			}
		},
		{
			path: '/issueRecords',
			name: 'issueRecords',
			component: function (resolve) {
				require(['../components/issueRecords/issueRecords.vue'], resolve);
			}
		},
		{
			path: '/stationMessage',
			name: 'stationMessage',
			component: function (resolve) {
				require(['../components/stationMessage/stationMessage.vue'], resolve);
			}
		},
		{
			path: '/userGuide',
			name: 'userGuide',
			component: function (resolve) {
				require(['../components/userGuide/userGuide.vue'], resolve);
			}
		},
		{
			path: '/guideContent',
			name: 'guideContent',
			component: function (resolve) {
				require(['../components/userGuide/guideContent.vue'], resolve);
			}
		},
		{
			path: '/latestDetail',
			name: 'latestDetail',
			component: function (resolve) {
				require(['../components/latestRecords/detailPage.vue'], resolve);
			}
		},
		{
			path: '/issueDetail',
			name: 'issueDetail',
			component: function (resolve) {
				require(['../components/home/detailPage.vue'], resolve);
			}
		},
		{
			path: '/issueRecordDetail',
			name: 'issueRecordDetail',
			component: function (resolve) {
				require(['../components/issueRecords/detailPage.vue'], resolve);
			}
		},
		{
			path: '/stationMessage',
			name: 'stationMessage',
			component: function (resolve) {
				require(['../components/stationMessage/stationMessage.vue'], resolve);
			}
		},
		{
			path: '/receiveInfo',
			name: 'receiveInfo',
			component: function (resolve) {
				require(['../components/receiveInfo/receiveInfo.vue'], resolve);
			}
		}
	]
});