<template lang="html">
    <div>
        <Heador></Heador>
        <Headernav></Headernav>
        <Detail title="资质荣誉" v-bind:items="items">
            <section>
                <ul :class="$style.item">
                    <li v-for="honor in honors" :key="honor.id" @click="">
                        <router-link :to="{ name: honor.name }">
                            <img :src="honor.src" alt="">
                            <h4>{{honor.text}}</h4>
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
          honors: [{
              name:"shifan",
              src: "http://hndqhp.com/Content/UploadFiles/201705240152166.jpg",
              text:"安全生产文化建设..."
          },{
              name:"biaozhun",
              src: "http://hndqhp.com/Content/UploadFiles/201705240152275.jpg",
              text:"安全生产标准化二..."
          },{
              name:"xuke",
              src: "http://hndqhp.com/Content/UploadFiles/201705240152369.jpg",
              text:"安全生产许可证"
          },{
              name:"zhizhao",
              src: "http://hndqhp.com/Content/UploadFiles/201705240152447.jpg",
              text:"营业执照"
          }],
          items: []
      }
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
