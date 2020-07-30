import './js/';
import './scss/main.scss';
import './css/main.css';
// import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Vue.js
window.Vue = require('vue');
Vue.use(BootstrapVue);
Vue.use(IconsPlugin)
import store from './store';
import App from './components/App.vue';

// Vue components (for use in html)
// const ExampleComponent = { require('./components/Example.vue').default };

Vue.component('MenuComponent', require('./components/layout/Menu.vue').default)
Vue.component('app', require('./components/App.vue').default)
Vue.component('ItemsList', require('./components/layout/ItemsList.vue').default)
Vue.component('SearchItems', require('./components/layout/SearchItems.vue').default)
Vue.component('AddItem', require('./components/layout/AddItem.vue').default)
Vue.component('Tasks', require('./components/pages/Tasks.vue').default)
    // Vue.component('Menu', require('./components/Menu.vue').default)
    // Vue init
const app = new Vue({
        el: '#app',
        store,
        render: h => h(App)
    })
    // new Vue({
    //     render: function(h) {
    //         return h(App);
    //     },
    //     store,
    //     el: '#app'
    // });