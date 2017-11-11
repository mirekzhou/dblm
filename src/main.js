import 'babel-polyfill';
import Vue    from 'vue';
import App    from './App';
import router from './router';
import store  from './store';

Vue.config.productionTip = true

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
});