<template lang="html">
    <div>
        <Heador></Heador>
        <Headernav></Headernav>
        <Detail title="公司动态" etitle="分类导航" v-bind:items="items">
            <section :class="$style.content">
                <ul>
                    <li>
                        <h1>礼炮的来源</h1>
                        <h4>作者： 百度 来源： 百度 </h4>
                        <p>
                      礼炮最早源于英国海军。当时，英国最大战舰装有21门大炮，
                      全部放空便是最高礼节。这就是21响礼炮的来历。其次19门炮，
                      19响便是次一点的礼节了。1875年，美国人从英国那里学来这种方法，
                      正式采用放礼炮的礼节，后来便风行世界，并一直延续到今天。<br><br>
                      
　　                   庆典礼炮却不像欢迎礼炮那样，它是各国自行规定的，很有些随意性。
                      英国君主诞辰，加冕的庆典鸣放62响；美国国庆时鸣放50响，表示美国有50个州；
                      我国开国大典时用54门大炮，齐放28响，表示当时第一届政协有45个政治单位和9个方面的特约代表，
                      共54个方面的人士。28响则是建国时正值中国共产党成立28周年。<br><br>
                      
　　                  在外交方面，礼炮是每遇贵宾到来，鸣放礼炮表示敬意，是国际上惯用的外交礼节。
                      按国际惯例：鸣放21响是欢迎国家元首、政府首脑等贵宾，这是最高礼遇。
                       鸣放19响，是欢迎部长将军一级的外宾。鸣放17响、15响等，是欢迎更低一级的外宾。鸣放礼炮都是单数。     
                        </p>   
                    </li>
                    <li>
                       <span>没有了</span>
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
