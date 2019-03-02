<template lang="html">
    <div>
        <Heador></Heador>
        <Headernav></Headernav>
        <Detail title="资质荣誉" v-bind:items="items">
            <section :class="$style.content">
                <ul>
                    <li>
                        <img :src="item.src" alt="">
                    </li>
                    <li>
                        <p>安全生产标准化二级企业</p>
                        <strong>
         湖南德强花炮有限公司是桃源县资质齐全的年生产规模达4000万元的鞭炮、礼炮、烟花生产型的烟花爆竹生产企业。以弘扬中华民族传统文化的内涵己任，让德强花炮给千家万户带来平安，带来吉祥。电话：400-0736-338     </strong>    
                    </li>
                    <li>
                        <router-link :to="{ name: item.top}">上一篇</router-link>
                        <router-link :to="{ name: item.bottom }">下一篇</router-link>
                    </li>
                </ul>
            </section>
        </Detail>
        <Footer></Footer>
        <Footernav></Footernav>
    </div>
</template>

<script>
import Heador from "./header"
import Headernav from "./headernav"
import Detail from "./detailsnav"
import Footer from "./footer"
import Footernav from "./footernav"

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
          items: []
      }
  }
}
</script>

<style lang="scss" module>
  @import '../../css/reset.scss';
  .content{
    img{
        width: 100%;
    }
    p{
        text-align: center;
        margin-bottom: 20px;
    }
    strong{
        font-size: 23px;
        line-height: 40px;
    }
    li:nth-child(3){
        text-align: center;
        margin-top: 58px;
        font-size: 28px;
        a{
            text-decoration: none;
            padding: 10px 90px;
            border: 1px solid rgb(129, 125, 125);
            color: #666;
        }
    }
  }
