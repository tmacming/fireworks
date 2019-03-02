<template lang="html">
    <div>
        <Detail title="关于德强" etitle="分类导航"  v-bind:items="items">
            <section :class="$style.content">
                <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;湖南德强花炮有限公司</strong>
                位于风景秀美的桃源县青林回族维吾尔族乡老官坪村，公司总占地面积448亩，各类工库房102栋、总建筑面积17000多平方米，是B、C级组合烟花和C级爆竹的烟花爆竹综合性生产企业；公司目前共有职工121人，其中持证的安全管理人员共12名，特种作业持证人员共46人。<br><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过坚持标准化建设和几年来持续不断的安全投入，使得公司各项安全硬件设施和综合条件不断完善：公司目前已得到国土、林业、规划、环保等部门的全面许可；工房建筑结构符合标准要求，厂区道路全部硬化，厂区布局合理且分区严格，三库建设基本达到国家标准要求，视频监控基本实现全覆盖管理，电路线路满足安全要求等。同时通过确立公司“确保安全就是积德行善”的企业安全文化理念，大力推进公司规范化管理、安全生产标准化建设和企业安全文化建设工作，在安全管理逐步形成安全责任落实体系、安全教育培训体系、安全管理制度体系、隐患排查治理体系和应急救援管理体系的基础上，进一步完善质量管理体系、环境保护体系和职业健康管理体系，让公司安全生产工作不断得到有效提高，也为公司安全生产创造了良好成绩：公司是2010年以来省、市、县安监部门的“两化”样板单位，以全省最高分成功创建“安全生产标准化二级企业”，2016年获得湖南省人民政府授予的“安全生产文化建设示范企业”的光荣称号。公司也多次被桃源县人民政府和桃源县安监局授予“安全生产先进企业”和“安全生产先进单位”称号。
            </section>
        </Detail>
    </div>
</template>

<script>
import Detail from "../common/detailsnav"
export default{
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
    },
    components:{
        Detail
    }
}
</script>

<style lang="scss" module>
    .content{
        padding: 0 3%;
        font-weight: normal;
        font-size: 21px;
        line-height: 46px;
        letter-spacing: 2px;
        strong{
            font-weight: bold;
        }
    }
</style>