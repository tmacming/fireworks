<template lang="html">
    <nav :class="$style.footernav">
        <ul :class="$style.nav">
            <li>
                <router-link :to="{ name: 'home' }">
                    <img src="http://hndqhp.com/Content/Templaes/C20206N/mobile/style/images/bt_home.png" alt="">
                    <h2>首页</h2>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'plat' }">
                    <img src="http://hndqhp.com/Content/Templaes/C20206N/mobile/style/images/bt_map.png" alt="">
                    <h2>地图</h2>
                </router-link>
            </li>
            <li>
                <a href="tel:4000736338">
                    <img src="http://hndqhp.com/Content/Templaes/C20206N/mobile/style/images/bt_tel.png" alt="">
                    <h2>电话</h2>
                </a>
            </li>
            <li>
                <router-link :to="{ name: 'home' }">
                    <img src="http://hndqhp.com/Content/Templaes/C20206N/mobile/style/images/bt_zixun.png" alt="">
                    <h2>咨询</h2>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default{
}
</script>

<style lang="scss" module>
.footernav{
    position: fixed;
    z-index: 98;
    bottom:0;
    width: 100%;
    .nav{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        background: #e21e1f;
        li{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100px;
            border-right: 2px solid #636363;
            width: 25%;
            img{
                height: 40px;
                width: 50px;
                padding: 0 0 5px 5px;
            }

            a{
                text-decoration: none;
                color: #fff;
                font-size: 30px;
            }
        }
    }
}
</style>