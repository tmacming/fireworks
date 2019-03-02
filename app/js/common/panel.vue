<template lang="html">
  <section :class="[panelClass,cname]">
        <ul class="panel_header">
            <li>
                <img src="http://hndqhp.com/Content/Templaes/C20206N/mobile/style/images/titleBgL.png" alt="">
            </li>
            <li>
                <h1>{{title}}</h1>
                <h4>{{etitle}}</h4>
            </li>
            <li>
                <img src="http://hndqhp.com/Content/Templaes/C20206N/mobile/style/images/titleBgR.png" alt="">
            </li>
        </ul>
    <slot/>
  </section>
</template>

<script>
export default {
    props: {
        cname: {
            type: String,
            default: "",
        },
        title: {
            type: String,
            default: "",
        },
        etitle: {
            type: String,
            default: "",
        },

    },
    data() {
        return {
            panelClass: "panel",
        }
    },
}
</script>

<style lang="scss">
.panel {
    background: #fff;
   .panel_header{
       display: flex;
       flex-direction: row;
       justify-content: space-between;
       align-items: center;
       box-sizing: border-box;
       text-align: center;
       height: 120px;
       padding-top: 20px;
       h1{
           font-size: 45px;
           padding-bottom: 15px;
           color: #333333;
       }
       h4{
           font-size: 20px;
           color: #9a9a9a;
           font-weight: normal;
           white-space: nowrap;
       }
       img{
           height: 40px;
           width: 100%;
       }
   }
}
</style>
