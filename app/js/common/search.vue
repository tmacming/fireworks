<template lang="html">
    <div>
        <Heador></Heador>
        <Headernav></Headernav>
        <Detail title="搜索结果" etitle="分类导航" v-bind:items="items">
            <section>
                <ul :class="$style.item">
                    <li v-for="product in products" :key="product.id">
                        <router-link :to="{ name: product.href , query: {id: product.id} }">
                            <img :src="product.img" alt="">
                            <h4>{{ product.name }}</h4>
                        </router-link>
                    </li>
                </ul>
                <span>{{meiyou}}</span>
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
import axios from "axios"

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
        searchId: this.$route.query.id,
        products: [],
        meiyou: ""
      }
  },
  methods: {
      getProduct (){
      axios.get('http://localhost:3000/data')
        .then(this.handleGetProduct)
      },
      handleGetProduct(res){
          res = res.data
          var reg = new RegExp(this.searchId)
          var len = res.length
          for(var i=0;i<len;i++){
              if(reg.test(res[i].name)){
                  this.products.push(res[i])
              }
          }
          if(this.products.length==0){
              this.meiyou = "抱歉，未搜索到您要的数据！"
          }
      }
  },
  mounted () {
    this.getProduct()
  }
}
</script>

<style lang="scss" module>
  @import '../../css/reset.scss';
  .item{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        margin-top: 10px;
        li{
            width: 46.5%;
            text-align: center;
            margin-bottom: 30px;
            img{
                height: 200px;
                width: 280px;
                margin-bottom: 20px;
            }
            a{
                text-decoration: none;
                color: #000;
                font-size: 26px;
            }
        }
        span{
            font-weight: normal;
            color: #a7a7a7;
            font-size: 30px;
        }
    }
</style>
