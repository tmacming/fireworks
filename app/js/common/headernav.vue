<template lang="html">
    <nav :class="$style.nav">
        <ul :class="$style.nav_ul">
            <li>
                <router-link :to="{ name:'home' }">
                    <img src="http://hndqhp.com/Content/Templaes/C20206N/mobile/style/images/nav_home.png" alt="">
                    <h4>网站首页</h4>
                </router-link>
            </li>
            <li>
                <ul>
                   <router-link :to="{ name:'about' }">
                        <li>关于德强</li>
                    </router-link>
                    <router-link :to="{ name:'looks'}">
                        <li :class="$style.sring">厂容厂貌</li>
                    </router-link>
                </ul>
            </li>
            <li>
                <ul>
                   <router-link :to="{ name:'honor' }">
                        <li>资质荣誉</li>
                    </router-link>
                    <router-link :to="{ name:'news' }">
                        <li :class="$style.sring">新闻资讯</li>
                    </router-link>
                </ul>
            </li>
            <li>
                <ul>
                    <router-link :to="{ name:'product'}">
                        <li>产品中心</li>
                    </router-link>
                    <router-link :to="{ name:'lianxi'}">
                        <li :class="$style.sring">联系我们</li>
                    </router-link>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script>
export default{
   
}
</script>

<style lang="scss" module>
.nav{
    height: 120px;
    margin-top: 100px;
    background: #e21e1f;
    padding-top: 50px;
    font-size: 30px;
    a{
        text-decoration: none;
        color: #fff;
    }
    .nav_ul{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        box-sizing: border-box;
        img{
            height: 50px;
            width: 60px;
            padding-left: 25px;
        }
        h4{
            padding-top: 5px;
        }
        .sring{
            padding-top: 30px;
        }
    }
}
</style>

