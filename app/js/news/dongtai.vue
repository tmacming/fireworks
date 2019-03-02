<template lang="html">
    <div>
        <Heador></Heador>
        <Headernav></Headernav>
        <Detail title="公司动态" etitle="分类导航" v-bind:items="items">
            <section>
                <div :class="$style.item">
                    <ul v-for="product in products" :key="product.id">
                        <li>
                        <router-link :to="{ name: product.herf }">
                            <ul :class="$style.content">
                                <li>
                                    <div>
                                        <img :src="product.img" alt="">
                                    </div>
                                </li>
                                <li>
                                    <h4>{{ product.name }}</h4>
                                    <p>{{ product.text}}</p>
                                </li>
                            </ul>
                        </router-link>
                        </li>
                    </ul>
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
         items: [{
                    page: "dongtai",
                    text: "公司动态",
                },{
                    page: "hangye",
                    text: "行业动态",
                }],

        products: [{
            herf: "lipao",
            img: "http://hndqhp.com/Content/UploadFiles/201705250944448.jpg",
            name: "礼炮的来源",
            text: "礼炮最早源于英国海军。当时，英国最大战舰装有21门大炮，全部放空... "
        }],
      }
  }
}
</script>

<style lang="scss" module>
  @import '../../css/reset.scss';
  .item{
        margin-top: 10px;
        a{
            text-decoration: none;
            color: #000;
            font-size: 26px;
        }  
        .content{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            height: 180px;
            align-items: center;
            margin-left: 10px;
            margin-right: -10px;
            border-bottom: 1px dotted #e02d2a;
            li:nth-child(1){
                width: 35vw;
                div{
                    height: 150px;
                    width: 150px;
                    border-radius: 50%;
                    overflow: hidden;
                    display: table-cell;
                    vertical-align: middle;
                    border: 1px solid #e02d2a;
                    text-align: center;
                   img{
                    height: 160px;
                    width: 160px;
                }
                }
            }
            li:nth-child(2){
                width: 65vw;
                line-height: 40px;
                h4{
                    font-size: 30px;
                }
                p{ 
                    font-size: 25px;
                    color: #666;
                    font-weight: normal;
                }
            }
          }
            
        }
</style>
