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
			name: '/',
			component: function (resolve) {
				require(['../components/home/home.vue'], resolve);
			}
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
				require(['../components/latest/latest.vue'], resolve);
			}
		},
		{
			path: '/help',
			name: 'help',
			component: function (resolve) {
				require(['../components/help/help.vue'], resolve);
			}
		},
		{
			path: '/userCenter',
			name: 'userCenter',
			component: function (resolve) {
				require(['../components/userCenter/userCenter.vue'], resolve);
			}
		}
	]
});