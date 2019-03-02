<template lang="html">
    <div>
        <Heador></Heador>
        <Headernav></Headernav>
        <Detail title="行业动态" etitle="分类导航" v-bind:items="items">
            <section :class="$style.content">
                <ul>
                    <li>
                        <h1>解读《烟花爆竹安全管理条例》</h1>
                        <h4>作者： 百度 来源： 百度 </h4>
                        <strong>　　1.《条例》的适用范围是什么？</strong>
                        <p>
                          
　　答：烟花爆竹的生产、经营、运输和燃放，适用《条例》。《条例》中所称的烟花爆竹，是指烟花爆竹制品和用于生产烟花爆竹的民用黑火药、烟火药、引火线等物品。
                      </p>

                      <strong>　　2. 国家对涉及烟花爆竹的哪些活动实施行政许可？</strong>
　　                   <p>
　　答：国家对烟花爆竹的生产、经营、运输和举办焰火晚会以及其他大型焰火燃放活动，实行许可证制度。未经许可，任何单位或者个人不得生产、经营、运输烟花爆竹，不得举办焰火晚会以及其他大型焰火燃放活动。</p>

                      <strong>　　3. 从事烟花爆竹生产的哪些人员需要经过培训、考核？</strong>
                      <p>
　　答：生产烟花爆竹的企业，应当对生产作业人员进行安全生产知识教育，对从事药物混合、造粒、筛选、装药、筑药、压药、切引、搬运等危险工序的作业人员进行专业技术培训。从事危险工序的作业人员经设区的市人民政府安全生产监督管理部门考核合格，方可上岗作业。</p>   
                    </li>
                    <li>
                       <span>没有了</span>
                       <span><router-link :to="{ name: 'ranfang'}">下一篇</router-link></span>
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
    strong{
        font-size: 25px;
        font-weight: bold;
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
