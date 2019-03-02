<template lang="html">
    <section>
        <Panel title="新闻" etitle="NEWS" :class="$style.panel">
            <ul v-for="item in items" :key="item.id">
                <li>
                    <router-link :to="{ name: item.herf }">
                        <ul :class="$style.news">
                            <li>
                                <h3>{{item.h3}}</h3>
                                <h4>{{item.h4}}</h4>
                            </li>
                            <li>
                                <h1>{{item.h1}}</h1>
                                <h2>{{item.h2}}</h2>
                            </li>
                            <li>
                                <em></em>
                            </li>
                        </ul>
                    </router-link>
                </li>
            </ul>
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
                herf:"jiedu",
                h3:"24",
                h4:"2017-05",
                h1:"解读《烟花爆竹安全管理条例...",
                h2:" 生产烟花爆竹的企业，应当在投入生产前向所在地设...",
            },{
                herf:"lipao",
                h3:"24",
                h4:"2017-05",
                h1:"礼炮的来源",
                h2:" 礼炮最早源于英国海军。当时，英国最大战舰装有2...   ",
            },{
                herf:"ranfang",
                h3:"24",
                h4:"2017-05",
                h1:"燃放烟花安全需知",
                h2:" 小型焰火燃放时，观众请保持20米的安全距离，而...   ",
            }]
        }
    }   
}
</script>

<style lang="scss" module>
    .panel{
        a{
                text-decoration: none;
                color: #000;
            }
        .news{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            background: #f4f4f4;
            margin-bottom: 20px;
            height: 100px;
            width: 100%;
            box-sizing: border-box;
            li:nth-child(1){
                background: #b4b4b4;
                color: #f4f4f4;
                width: 18%;
                margin: 5px 0 0 5px;
                text-align: center;
                height: 90px;
                h3{
                    font-size: 50px;
                    margin: 5px 0;
                }
                h4{
                    font-size: 20px;
                }
            }
            li:nth-child(2){
                width: 71%;
                position: relative;
                margin: 10px 0 0 10px;
                h1{
                    font-size: 26px;
                    margin-bottom: 20px;
                    margin-top: 10px;
                }
                h2{
                    font-size: 22px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    word-break: break-all;
                    color: #b4b4b4;
                }
            }
            li:nth-child(3){
                width: 10%;
                background: url(http://hndqhp.com/Content/Templaes/C20206N/mobile/style/images/newsMore.png) no-repeat;
                background-size: 40px 80px;
                height: 100px;
                margin: 10px 15px 0 0;
            }
        }
    }
</style>