import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Plat from "../plat/index.vue"
import About from "../about/index.vue"
import Culture from "../about/culture.vue"
import Product from "../product/index.vue"
import Honor from "../honor/index.vue"
import Shifan from "../honor/shifan.vue"
import Biaozhun from "../honor/biaozhun.vue"
import Xuke from "../honor/xuke.vue"
import Zhizhao from "../honor/zhizhao.vue"
import Lei from "../product/lei.vue"
import Yanhua from "../product/yanhua.vue"
import Bianp from "../product/bianp.vue"
import Xiaoguo from "../product/xiaoguo.vue"
import Looks from "../looks/index.vue"
import News from "../news/index.vue"
import Dongtai from "../news/dongtai.vue"
import Hangye from "../news/hangye.vue"
import Lipao from "../news/lipao.vue"
import Ranfang from "../news/ranfang.vue"
import Jiedu from "../news/jiedu.vue"
import Lianxi from "../lianxi/index.vue"
import Moban from "../common/moban.vue"
import Moban1 from "../common/moban1.vue"
import Search from "../common/search.vue"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/plat",
            name: "plat",
            component: Plat
        },{
            path: "/about",
            name: "about",
            component: About
        },{
            path: "/culture",
            name: "culture",
            component: Culture
        },{
            path: "/product",
            name: "product",
            component: Product
        },{
            path: "/honor",
            name: "honor",
            component: Honor
        },{
            path: "/shifan",
            name: "shifan",
            component: Shifan
        },{
            path: "/biaozhun",
            name: "biaozhun",
            component: Biaozhun
        },{
            path: "/xuke",
            name: "xuke",
            component: Xuke
        },{
            path: "/zhizhao",
            name: "zhizhao",
            component: Zhizhao
        },{
            path: "/lei",
            name: "lei",
            component: Lei
        },{
            path: "/yanhua",
            name: "yanhua",
            component: Yanhua
        },{
            path: "/bianp",
            name: "bianp",
            component: Bianp
        },{
            path: "/xiaoguo",
            name: "xiaoguo",
            component: Xiaoguo
        },{
            path: "/looks",
            name: "looks",
            component: Looks
        },{
            path: "/news",
            name: "news",
            component: News
        },{
            path: "/dongtai",
            name: "dongtai",
            component: Dongtai
        },{
            path: "/hangye",
            name: "hangye",
            component: Hangye
        },{
            path: "/lipao",
            name: "lipao",
            component: Lipao
        },{
            path: "/jiedu",
            name: "jiedu",
            component: Jiedu
        },{
            path: "/ranfang",
            name: "ranfang",
            component: Ranfang
        },{
            path: "/lianxi",
            name: "lianxi",
            component: Lianxi
        },{
            path: "/moban/+id",
            name: "moban",
            component: Moban
        },{
            path: "/moban1/+id",
            name: "moban1",
            component: Moban1
        },{
            path: "/search/+id",
            name: "search",
            component: Search
        }
    ],
})
