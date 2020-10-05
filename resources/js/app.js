require('./bootstrap');


import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');

import Form from './utilites/form';
window.Form = Form;

window.moment = moment;
window.Event = new Vue();

import {routes} from './routes';

const router = new VueRouter({
	routes,
	mode: ''
});

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

import pr_header from './components/pr_header.vue';
import pr_footer from './components/pr_footer.vue';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
    components: {pr_header, pr_footer},
});
