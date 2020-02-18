import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import Landing from './pages/Landing.vue';
import Home from './pages/Home.vue';
import Signup from './pages/Signup.vue';
import Login from './pages/Login.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{ path: '/', component: Landing },
		{ path: '/home', component: Home },
		{ path: '/signup', component: Signup },
		{ path: '/login', component: Login },
	],
});

new Vue({
	render: h => h(App),
	router,
}).$mount('#app');
