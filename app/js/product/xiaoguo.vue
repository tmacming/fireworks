<template lang="html">
    <div>
        <Heador></Heador>
        <Headernav></Headernav>
        <Detail title="燃放效果" etitle="分类导航" v-bind:items="items">
            <section>
                <ul :class="$style.item">
                    <li v-for="product in products" :key="product.id">
                        <router-link :to="{ name: product.href, query: {id: product.id}  }">
                            <img :src="product.img" alt="">
                            <h4>{{ product.name }}</h4>
                        </router-link>
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

        products: [],
        res: [],
        product: [],
        more :"点击加载更多"
      }
  },
  methods: {
      getProduct (){
      axios.get('http://localhost:3000/data')
        .then(this.handleGetProduct)
      },
      handleGetProduct(res){
          res = res.data
          this.res = res
          for(var i=28; i<36; i++){ this.product.push(this.res[i]) }
          this.products = this.product
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
    }
</style>
