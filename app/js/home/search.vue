<template lang="html">
    <section :class="$style.search">
        <input type='text' value="" id="searchKey" 
        @keyup.enter="search" 
        @input="search($event)" 
        placeholder="请输入关键词"/>
        <router-link :to="{ name:'search', query:{ id: id }}">
            <img src="http://hndqhp.com/Content/Templaes/C20206N/mobile/style/images/sousuoBg.png" alt="">
        </router-link>
    </section>
</template>

<script>
export default{
    data() {
        return {
            id: ""
        }
    },
    methods: {
        search: function(event){
            this.id = event.data
        }
    }
}
</script>

<style lang="scss" module>
.search{
    width: 100%;
    height: 100px;
    padding-top: 40px;
    text-align: center;
    box-sizing: border-box;
    input{
        height: 50px;
        width: 300px;
        font-size: 30px;
        border-radius: 20px;
        margin-left: 100px;
        color: #a7a7a7;
        border: 1px solid #a7a7a7;
    }
    img{
        float: right;
        height: 55px;
        width: 55px;
        margin-right: 140px;
    }
}
</style>