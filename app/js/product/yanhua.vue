<template lang="html">
    <div>
        <Heador></Heador>
        <Headernav></Headernav>
        <Detail title="烟花" etitle="分类导航" v-bind:items="items">
            <section>
                <ul :class="$style.item">
                    <li v-for="honor in honors" :key="honor.id">
                        <router-link :to="{ name: honor.href , query: {id: honor.id} }">
                            <img :src="honor.img" alt="">
                            <h4>{{honor.name}}</h4>
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
import axios from "axios"
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
        honors: [],
        res:[],
        product: [],
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
                }]
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
          for(var i=14; i<24; i++){ this.product.push(this.res[i]) }
          this.honors = this.product
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
    .more{
            text-align: center;
            width: 100%;
            background: #ddd;
            margin: 10px;
            height: 75px;
            font-size: 30px;
            line-height: 70px;
            color: #666;
        }
</style>
