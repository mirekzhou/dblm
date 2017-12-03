import 'babel-polyfill';
import Vue    from 'vue';
import App    from './App';
import router from './router';
import store  from './store';
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = true
Vue.use(VueAwesomeSwiper)
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
});