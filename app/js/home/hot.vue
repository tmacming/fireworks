<template lang="html">
     <Panel title="热门推荐产品" etitle="HOT RECOMMENDED PRODUCTS" :class="$style.panel">
       <section :class="$style.content">
           <ul :class="$style.item_ul1">
               <li :class="$style.item1" v-for="item in items" :key="item.id">
                   <router-link :to="{ name:item.href }">
                       {{item.name}}
                   </router-link>
               </li>
           </ul>
           <ul :class="$style.item_ul2">
               <li :class="$style.item2" v-for="content in contents" :key="content.id">
                   <router-link :to="{ name:content.href , query: {id: content.id} }">
                       <ul>
                           <li :class="$style.shang">
                               <img :src="content.img" alt="">
                           </li>
                           <li :class="$style.xia">
                               <p>{{ content.name }}</p>
                               <img src="http://hndqhp.com/Content/Templaes/C20206N/mobile/style/images/proMore.png" alt="">
                           </li>
                       </ul>
                   </router-link>
               </li>
           </ul>
       </section>
    </Panel>
</template>

<script>
import Panel from "../common/panel"

export default{
    components:{
        Panel
    },
    data() {
        return {
            items: [{
                href:"lei",
                name:"雷",
            },{
                href:"bianp",
                name:"鞭炮",
            },{
                href:"yanhua",
                name:"烟花",
            }],
            contents: [{
                id: 1,
                href:"moban",
                img:"http://hndqhp.com/Content/UploadFiles/201705240151464.jpg",
                name:"15发 震天...",
            },{
                id: 2,
                href:"moban",
                img:"http://hndqhp.com/Content/UploadFiles/201705240151558.jpg",
                name:"45发 彩花...",
            },{
                id: 3,
                href:"moban",
                img:"http://hndqhp.com/Content/UploadFiles/201705240151416.jpg",
                name:"45发 笛音...",
            },{
                id: 4,
                href:"moban",
                img:"http://hndqhp.com/Content/UploadFiles/201705240151603.jpg",
                name:"45发 震天...",
            },{
                id: 5,
                href:"moban",
                img:"http://hndqhp.com/Content/UploadFiles/201705240151712.jpg",
                name:"88发 发财...",
            },{
                id: 6,
                href:"moban",
                img:"http://hndqhp.com/Content/UploadFiles/201705240151806.jpg",
                name:"88发 财富...",
            }]
        }
    }
}
</script>

<style lang="scss" module>
.panel{
    .content{
            a{
                text-decoration: none;
                color: #666;
            }
            .item_ul1{
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                .item1{
                    height: 50px;
                    line-height: 50px;
                    width: 190px;
                    border: 1px solid #e21e1f;
                    text-align: center;
                }
            }
            .item_ul2{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                flex-wrap: wrap;
                margin: 15px 11px;
                .item2{
                    border: 1px solid #666;
                    margin-top: 15px;
                    .shang{
            
                        img{
                            height: 160px;
                            width: 190px;
                        }
                    }
                    .xia{
                        display: flex;
                        flex-direction: row;
                        justify-content: space-around;
                        align-items: center;
                        height: 45px;
                        background: #2e2f33;
                        p{
                            font-size: 25px;
                            color: #fff;
                        }
                        img{
                            height: 35px;
                            width: 35px;
                        }
                    }
                }
            }

    }
}
</style>