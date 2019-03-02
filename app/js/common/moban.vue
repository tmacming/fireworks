<template lang="html">
    <div>
        <Heador></Heador>
        <Headernav></Headernav>
        <Detail :title="title" etitle="分类导航" v-bind:items="items">
            <section :class="$style.content">
                <ul>
                    <li>
                        <img :src="img" alt="">
                    </li>
                    <li>
                        <p>{{ name }}</p>
                        <strong>
         
         湖南德强花炮有限公司是桃源县资质齐全的年生产规模达4000万元的鞭炮、礼炮、烟花生产型的烟花爆竹生产企业。以弘扬中华民族传统文化的内涵己任，让德强花炮给千家万户带来平安，带来吉祥。电话：400-0736-338     </strong>    
                    </li>
                    <li>
                        <span @click="getUp">{{ up }}</span>
                        <span @click="getDown">{{ down }}</span>
                    </li>
                </ul>
            </section>
        </Detail>
        <Footer></Footer>
        <Footernav></Footernav>
    </div>
</template>

<script>
import axios from "axios"
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
          //得到router-link 传来的参数
          nameId: this.$route.query.id,
          up : "上一篇",
          down: "下一篇",
          title: "",
          items: [{
                    page: "lei",
                    text: "雷",
                },{
                    page: "yanhua",
                    text: "烟花",
                },{
                    page: "bianp",
                    text: "鞭炮",
                },{
                    page: "xiaoguo",
                    text: "燃放效果",
                }],
              img: "",
              name: ""
         }
  },
  methods: {
      getUp(){
          if(this.up=="上一篇"){
            this.nameId = this.nameId - 1
            this.getName()   
          }
      },
      getDown(){
          if(this.down=="下一篇"){
            this.nameId = this.nameId + 1
            this.getName()
          }
          
      },
      getName() {
            axios.get('http://localhost:3000/moban',{
                params: {
                    id: this.nameId
                }
            })
            .then(this.handleGetProduct)
      },
      handleGetProduct(res){
        res = res.data

        //判断头部
        res[0].id==1?this.up="没有了":this.up="上一篇"
        //判断尾部
        res[0].id==36?this.down="没有了":this.down="下一篇"

      switch(res[0].fid){
        case "lei":
            this.title="雷";
            break
        case "yh":
            this.title="烟花";
            break
        case "bp":
            this.title="鞭炮";
            break
        case "xg":
            this.title="燃烧效果";
      }
        
        
        this.name = res[0].name
        this.img = res[0].img
      },
  },
  mounted() {
    this.getName()
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
        span{
            padding: 10px 90px;
            border: 1px solid rgb(129, 125, 125);
            color: #666;
        }
    }
  }

</style>
