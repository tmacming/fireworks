<template lang="html">
  <section :class="[panelClass,cname]">
       <ul :class="$style.nav">
           <li>
              {{ title }}
           </li>
           <li :class="$style.nav_li" @click="toggle()">
              {{ etitle }}
           </li>
       </ul>
       <div :class="$style.nav_div" v-show="play">
            <ul :class="$style.nav_2" v-for="item in items" :key="item.id">
                <li>
                    <router-link :to="{ name: item.page }">
                    {{ item.text }}
                    </router-link>
                </li>
            </ul>
        </div>
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
        items: {
            type: Array,
            required: true,
            default: "",
        },
    },
    data() {
        return {
            panelClass: "panel",
            play: false
        }
    },
    methods :{
        toggle: function(){
            this.play = !this.play
        }
    }
}
</script>

<style lang="scss" module>
.nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 0 10px;
    font-size: 30px; 
    background: #eee;
    li:nth-child(2){
        color: rgb(163, 153, 153);
    }
    .nav_li{
        margin-right: 50px;
    }
    .nav_li::after{
        content: '';
        position: absolute;
        width: 40px;
        height: 40px;
        background: url(http://hndqhp.com/Content/Templaes/C20206N/mobile/style/images/arrow-down.png) no-repeat;
        background-size: 35px;
        margin-left: 130px;
        margin-top: -23px;
    }
}
.nav_div{
    display: block;
    .nav_2{
        display:inline-block;
        font-size: 30px;
        padding-left: 6px;
        a{
            text-decoration: none;
            color: rgba(163, 153, 153, 0.774);
        }
        li{
            float: left;
            width: 140px;
            padding: 15px 25px;
            margin: 5px;
            border: 2px solid rgb(187, 16, 16);
            border-radius: 10px;
            text-align: center;
        }
        .router-link-exact-active{
            background: rgb(151, 6, 6);
        }
    }
}
</style>
