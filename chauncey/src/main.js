import Vue from 'vue'
import App from './App.vue'

import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import './assets/reset.css'

router.beforeEach((to, from, next) => {
    // 让页面回到顶部
    document.documentElement.scrollTop = 0;
    next();
})

Vue.prototype.globalGetData = function() {
    console.log('getData');
};

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')