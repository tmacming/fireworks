<template lang="html">
    <div>
        <Heador></Heador>
        <Headernav></Headernav>
        <Detail title="联系我们"  v-bind:items="items">
            <section>
                <div :class="$style.content">   
                    <strong>湖南德强花炮有限公司</strong><br>
                    <p>
                        全国服务热线：400-0736-338 <br>
                        联系人：李先生  <br>
                        电话：0736-2623302 <br>
                        邮箱：421269015@qq.com <br>
                        网址：www.hndqhp.com <br>
                        联系地址：桃源县青林回族维吾尔族乡老官坪村家官家堉组 <br>
                        注册地址：湖南省常德市桃源县浯溪河乡老官坪村官家堉组 <br>
                    </p>
                </div>
            </section>
        </Detail>
        <Footer></Footer>
        <Footernav></Footernav>
    </div>
</template>

<script>
import Heador from "../common/header"
import Headernav from "../common/headernav"
import Detail from "../common/detailsnav"
import Footer from "../common/footer"
import Footernav from "../common/footernav"

export default {
  components:{
    Heador,
    Headernav,
    Footer,
    Footernav,
    Detail
  },
  data() {
      return {
          items: [],
      }
  }
}
</script>

<style lang="scss" module>
  @import '../../css/reset.scss';
 .content{
     line-height: 50px;
     strong{
         font-size: 25px;
         font-weight: bold;
     }
     p{
         font-size: 30px;
         font-weight: normal;
     }
 }
</style>
