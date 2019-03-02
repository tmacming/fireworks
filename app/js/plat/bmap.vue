<template>
<div ref="close">
    <baidu-map 
               :class="$style.mapDemo"
               :scroll-wheel-zoom="true"
               :center="center"
               :zoom="zoom"
               @ready="handler"
               ak="7948735e15716ec89b7a481f1c426446">
    </baidu-map>
    <div :class="$style.mapFooter">
            <p>详细地址： 桃源县青林回族维吾尔族乡老官坪村家官家堉组</p>
            <router-link :to="{ name:'home'}">
                <div :class="$style.close"></div>
            </router-link>
    </div>
</div>
    <!-- ak属性为你自己申请的ak密钥，其他更多属性，下面附带传送门 -->
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'


export default {
    name: "shop-info",
    data() {
        return {
            center: {lng: 111.384269, lat: 29.029983},
            zoom: 15
        }
    },
    components: {
        BaiduMap
    },
    methods: {
        //固定写法
        handler ({BMap, map}) {
            console.log(BMap, map)
            this.center.lng = 111.384269
            this.center.lat = 29.029983
            this.zoom = 15
        }
    }
}
 
</script>

<style lang="scss" module>
@import '../../css/reset.scss';
 .mapDemo {
        width: 100%;
        height: 860px;
        margin-top: 120px;
    }
.mapFooter{
        position: relative;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        p{
            float: left;
            width: 80%;
            height: 60px;
            line-height: 35px;
            font-size: 25px;
            color: rgb(139, 136, 136);
            font-weight: normal;
            padding: 20px;
        }
        .close{
            width: 60px;
            height: 60px;
            float: right;
            border-radius: 50%;
            border: 3px solid  rgb(139, 136, 136);
            background: url(http://hndqhp.com/Content/Templaes/C20206N/mobile/style/images/map-close.png) center no-repeat;
            background-size: 46px;
            margin: 16px 16px 0 0;
        }
}
</style>