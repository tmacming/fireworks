<template lang="html">
    <div>
        <Heador></Heador>
        <Headernav></Headernav>
        <Detail title="企业文化" etitle="分类导航" v-bind:items="items">
            <section :class="$style.content">
              <div>
                <p>全员参与、强化管理<br>
                精益求精、铸造品质<br>
                讲究实效、完善管理<br>
                提升品质、增创效益<br>
                忠于职业、忠于人格<br>
                提升品质、安全保证</p>
              </div>
              <div>
                <img src="http://hndqhp.com/Content/UploadFiles/image/20170524/20170524135827_7270.jpg" alt="">
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
            page: "about",
            text: "关于德强",
        },{
            page: "culture",
            text: "企业文化",
        }]
    } 
  }
}
</script>

<style lang="scss" module>
@import '../../css/reset.scss';
  .content{
    text-align: center;
    p{
      font-size: 23.5px;
      font-weight: normal;
      line-height: 46px;
      letter-spacing: 2px;
      margin-top: 20px;
    }
    img{
      width: 100%;
      margin-top: 60px;
    }
  }
</style>
