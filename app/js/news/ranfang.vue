<template lang="html">
    <div>
        <Heador></Heador>
        <Headernav></Headernav>
        <Detail title="行业动态" etitle="分类导航" v-bind:items="items">
            <section :class="$style.content">
                <ul>
                    <li>
                        <h1>燃放烟花安全需知</h1>
                        <h4>作者： 百度 来源： 百度 </h4>
                        <p>
         　　小型焰火燃放时，观众请保持20米的安全距离，而大型盆花燃放时的安全距离至少80米，礼花弹燃放时的安全距离为400米。用密封的箱子，最好锁上，存放在远离小孩所能拿到的干爽的地方。<br><br>
         
　　1.认真阅读每个产品上的详细的燃放说明。千万不要将烟花装在口袋里面。<br>

　　2.手持烟花，同一时间只能点一支，并且戴上手套。让小孩间隔1.5米左右，并且不允许在对方脸上晃动<br>

　　3.燃放时将狗、猫等对烟火害怕的动物关起来，以免他们受到惊吓后对人造成其他伤害。<br>

　　4.烟花燃放时，伸长手用香火去点，千万不能明火。小心照看小孩。烟花点燃后，如果没有反映，不要上前查看。<br>

　　5.大风影响燃放效果，也会带来其他隐患，所以燃放是要选择空旷的场地。注意将待放的烟花远离烟火。<br>

　　6.燃放后戴上手套用铁夹收拾好烟花的残余空筒，第二天早上在清理烟花碎纸片。千万不要将烟花给5岁以下的小孩。     
　　                       
                        </p>   
                    </li>
                    <li>
                       <span><router-link :to="{ name: 'jiedu'}">上一篇</router-link></span>
                       <span>没有了</span>
                    </li>
                </ul>
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
          items: [{
                    page: "dongtai",
                    text: "公司动态",
                },{
                    page: "hangye",
                    text: "行业动态",
                }],
      }
  }
}
</script>

<style lang="scss" module>
  @import '../../css/reset.scss';
  .content{
    line-height: 55px;
    padding: 0 10px;
    h1{ 
        margin-top: 20px;
        text-align: center;
    }
    h4{
        font-weight: normal;
        font-size: 20px;
        text-align: center;
    }
    p{
        font-weight: normal;
        font-size: 20px;
        margin-bottom: 45px;
    }
    
        
        span{
        padding: 10px 90px;
        border: 1px solid rgb(129, 125, 125);
        color: #666; 
        a{
            text-decoration: none;
            color: #666;
        }
    }
    }

</style>
