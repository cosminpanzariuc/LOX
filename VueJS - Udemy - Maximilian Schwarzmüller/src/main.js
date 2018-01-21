import Vue from 'vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue';
import {routes} from './routes';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});


Vue.http.options.root = 'https://vuejs-http-ca0ba.firebaseio.com/data.json';
// Vue.http.interceptors.push((request, next) => {
//     if (request.method == 'POST') {
//         request.method = 'PUT';
//         console.log(request);
//     }
//     next(response => {
//         response.json = () =>{ //not in production!!!
//             return {messages: response.body}
//         }
//     });
// });


Vue.directive('highlight', {
    bind(el, binding, vnode){
        // el.style.backgroundColor = 'green';
        // el.style.backgroundColor = binding.value;

        let delay = 0;
        if (binding.modifiers['delayed']) {
            delay = 1000;
        }

        setTimeout(() => {
            if (binding.arg == 'background') {
                el.style.backgroundColor = binding.value;
            } else {
                el.style.color = binding.value;
            }
        }, delay);
    }
});


Vue.filter('to-lowercase', (value)=> {
    return value.toLowerCase();
});


new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})


