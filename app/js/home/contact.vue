<template lang="html">
    <section>
        <Panel title="联系我们" etitle="CONTACT" :class="$style.panel">
            <section :class="$style.content">
                <ul>
                    <li>
                        <font>单位名称：</font>
                        湖南德强花炮有限公司
                    </li>
                    <li>
                        <font>联系QQ：</font>
                        421269015
                        <a :class="$style.font_a" href="mqqwpa://im/chat?chat_type=wpa&uin=421269015&version=1"></a>
                    </li>
                    <li>
                        <font>联系邮箱：</font>
                        421269015@qq.com
                    </li>
                    <li>
                        <font>联系电话：</font>
                        <a href="tel:4000736338">400-0736-338</a>
                        (点击拨打)
                    </li>
                </ul>
            </section>
        </Panel>
    </section>
</template>

<script>
import Panel from "../common/panel"
export default{
    components:{
        Panel
    }
}
</script>

<style lang="scss" module>
.panel{
    .content{
        li{
            margin: 18px 10px 0 10px;
            padding-left: 70px;
            height: 80px;
            line-height: 80px;
            border-bottom: 6px solid #ececec;
            font-size: 20px;
            font{
                color: #e02d2a;
            }
            .font_a{
                background: url(http://hndqhp.com/Content/Templaes/C20206N/mobile/style/images/qqBg.png) no-repeat center;
                display: inline-block;
                vertical-align: middle;
                margin-left: 6px;
                width: 180px;
                height: 70px;
                background-size: 170px 45px;
            }
        }
        a{
            text-decoration: none;
            color: #000;
        }
        li:nth-child(1){
            background: url(http://hndqhp.com/Content/Templaes/C20206N/mobile/style/images/tongxun.png) no-repeat 10px 13px #f4f4f4;
            background-size: 55px;
        }
        li:nth-child(2){
            background: url(http://hndqhp.com/Content/Templaes/C20206N/mobile/style/images/tongxun.png) no-repeat 10px -80px #f4f4f4;
            background-size: 55px;
        }
        li:nth-child(3){
            background: url(http://hndqhp.com/Content/Templaes/C20206N/mobile/style/images/tongxun.png) no-repeat 10px -180px #f4f4f4;
            background-size: 55px;
        }
        li:nth-child(4){
            background: url(http://hndqhp.com/Content/Templaes/C20206N/mobile/style/images/tongxun.png) no-repeat 10px -275px #f4f4f4;
            background-size: 55px;
        }
    }
}
</style>