import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import VueLazyload from 'vue-lazyload'

// Vue.use(VueLazyload)

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>",
})
/* eslint-enable no-new */
