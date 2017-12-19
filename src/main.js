import 'babel-polyfill';
import Vue    from 'vue';
import App    from './App';
import router from './router';
import store  from './store';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Velocity from 'velocity-animate';
import Share    from 'vue-social-share'

Vue.config.productionTip = true
Vue.use(VueAwesomeSwiper)
Vue.use(Share)

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
});

window.Velocity = window.velocity = Velocity;

router.afterEach(function (to, from, next) {
	velocity(document.body, 'scroll', {duration: 0, offset: -200});
});