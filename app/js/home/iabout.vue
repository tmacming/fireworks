<template lang="html">
    <section :class="$style.iabout">
        <div :class="$style.left">
            <img src="http://hndqhp.com/Content/Templaes/C20206N/mobile/style/images/aboutimg.png" alt="">
            <span></span>
        </div>
        <ul :class="$style.right">
            <li :class="$style.right_title">
                <h1>关于强德</h1>
                <h6>ABOUT</h6>
            </li>
            <li>    
                <strong>&nbsp;&nbsp;&nbsp;&nbsp;湖南德强花炮有限公司</strong>
                <p>位于风景秀美的桃源县青林回族维吾尔族乡老官坪村，公司总占地面积44... </p>
            </li>
            <li :class="$style.more">
                <router-link :to="{ name:'about' }">
                    查看更多
                </router-link>
            </li>
        </ul>
    
    </section>
</template>

<script>
export default{

}
</script>

<style lang="scss" module>
.iabout{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: url(http://hndqhp.com/Content/Templaes/C20206N/mobile/style/images/aboutBg.jpg);
    height: 450px;
    margin-top: 40px;
    box-sizing: border-box;
    padding:0 20px;
    color: #fff;
    .left{
        img{
            border: 4px solid #fff;
            height: 300px;
            width: 250px;
            z-index: 2;
        }
        span{
            display: block;
            border: 4px solid #fff;
            height: 300px;
            width: 250px;
            margin-top: -290px;
            margin-left: 20px;
            z-index: 1;
        }
    }
    .right{
        margin-top: -70px;
        padding-left: 20px;
        box-sizing: border-box;
        .right_title{
            background: url(http://hndqhp.com/Content/Templaes/C20206N/mobile/style/images/aboutBg1.png) no-repeat;
            background-size: 80px;
            padding-top: 40px;
            padding-left: 82px;
            margin-top: -22px;
            height: 60px;
            h1{
                font-size: 30px;
                margin-bottom: 4px;
            }
            h6{
                font-size: 20px;
                font-weight: normal;
                text-transform: uppercase;
                position: relative;
            }
            h6:after{
                position: absolute;
                content: "";
                display: inline-block;
                width: 60%;
                height: 4px;
                background-color: #fff;
                position: absolute;
                right: 2px;
                bottom: 3px;
            }
        }
        strong{
            font-size: 26px;
        }
        p{
            font-size: 22px;
            padding-top: 10px;
            padding-bottom: 20px;
        }
    }
    .more{
        a{
            position: absolute;
            text-decoration: none;
            height: 40px;
            width: 200px;
            padding-top: 5px;
            padding-left: 30px;
            margin-top: 50px;
            color:#fff;
            font-size: 25px;
            background: url(http://hndqhp.com/Content/Templaes/C20206N/mobile/style/images/aboutMore.png) no-repeat;
            background-size: 200px 40px;
        }
    }
}
</style>