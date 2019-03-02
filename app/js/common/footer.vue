<template lang="html">
    <footer>
        <footer :class="$style.footer ">版权所有：湖南德强花炮有限公司 <br>
                             联系人：李先生 电话：400-0736-338<br>
                             地址：桃源县青林回族维吾尔族乡老官坪村家官家堉组<br>
              技术支持：<a href="http://www.hnjing.com/" target="_blank" title="竞网智赢">竞网智赢</a></footer>
    </footer>
</template>

<script>
export default{

}
</script>

<style lang="scss" module>
    .footer{
        text-align: center;text-align: center;
        padding: 60px 2%;
        margin-bottom: 80px;
        font-size: 24px;
        background-size: 100%;
        color: #333333;
        line-height: 40px;
        a{
            text-decoration: none;
            color: #333333;
        }
}
</style>