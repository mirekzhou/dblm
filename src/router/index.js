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
			component: function (resolve) {
				require(['../components/userCenter/userCenter.vue'], resolve);
			},
			children: [
				{
					path: '',
					redeirect: 'guide'
				},
				{
					path: 'guide',
					comoponent: function (resolve) {
						require(['../components/userCenter/guide/guide.vue'], resolve);
					}
				},
				{
					path: 'forget',
					comoponent: function (resolve) {
						require(['../components/userCenter/forget/forget.vue'], resolve);
					}
				},
				{
					path: 'message',
					comoponent: function (resolve) {
						require(['../components/userCenter/message/message.vue'], resolve);
					}
				},
				{
					path: 'bonus',
					comoponent: function (resolve) {
						require(['../components/userCenter/bonus/bonus.vue'], resolve);
					}
				},
			]
		}
	]
});