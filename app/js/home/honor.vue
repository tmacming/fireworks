<template lang="html">
    <section>
        <Panel title="资质荣誉" etitle="HONOR" :class="$style.panel">
            <section>
                <ul :class="$style.item">
                    <li v-for="item in items" :key="item.id">
                        <router-link :to="{ name:item.name }">
                            <img :src="item.herf" alt="">
                            <h4>{{item.text}}</h4>
                        </router-link>
                    </li>
                </ul>
            </section>
        </Panel>
    </section>
</template>

<script>
import Panel from "../common/panel"
export default{
    components:{
        Panel
    },
    data() {
        return {
            items:[{
                name:"shifan",
                herf:"http://hndqhp.com/Content/UploadFiles/201705240152166.jpg",
                text:"安全生产文化建设..."
            },{
                name:"biaozhun",
                herf:"http://hndqhp.com/Content/UploadFiles/201705240152275.jpg",
                text:"安全生产标准化二..."
            },{
                name:"xuke",
                herf:"http://hndqhp.com/Content/UploadFiles/201705240152369.jpg",
                text:"安全生产许可证"
            },{
                name:"zhizhao",
                herf:"http://hndqhp.com/Content/UploadFiles/201705240152447.jpg",
                text:"营业执照"
            },]
        }
    }
}
</script>

<style lang="scss" module>
.panel{
    .item{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
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
}
</style>