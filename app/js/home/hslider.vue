<template>
<section>
    <div class="hswiper">
        <swiper :options="swiperOption" class="home_swiper">
            <swiper-slide><img src="http://hndqhp.com/Content/UploadFiles/image/20170531/20170531192745_7596.jpg"></swiper-slide>
            <swiper-slide><img src="http://hndqhp.com/Content/UploadFiles/image/20170523/20170523160451_3810.jpg"></swiper-slide>
            <swiper-slide><img src="http://hndqhp.com/Content/UploadFiles/image/20170531/20170531192753_4348.jpg"></swiper-slide>
        </swiper>
        <div class="swiper-pagination"></div> 
    </div>
</section>
</template>
 
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    data(){
        return {
            //设置属性
            swiperOption:{
                //显示分页
                pagination: {
                    el: '.swiper-pagination',
                    clickable:true
                },
                //切换模式  横屏或者竖屏
                // direction : 'vertical',
                //设置自动播放速度
                autoplay: {
                    disableOnInteraction: false,
                    delay:2500
                },
                //开启无限循环
                loop:true,
                //设置点击箭头
                paginationClickable :true,
                prevButton:'.swiper-button-prev',
                nextButton:'.swiper-button-next',
                //设置同屏显示的数量，默认为1，使用auto是随意的意思。
                slidesPerView:1,
                //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
                mousewheel:true ,
                //默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动可能不止一格且不会贴合。
                // freeMode:true 
            }
        }
    },
    components:{
        swiper,
        swiperSlide
    }
}   
</script>

<style lang="css">
@import "~swiper/dist/css/swiper.css";
.hswiper{
    height: 300px;
}   
.home_swiper img{
    height: 300px;
    width: 100%;
}
.swiper-pagination{
    position: relative;
    margin-top: -50px;
}
.swiper-pagination-bullet{
    width: 100px;
    height: 12px;
    margin-left: 5px;
    border-radius: 0;
    background: #fdfdf0;
}
.swiper-pagination-bullet-active{
    background: #ffe973;
}

</style>