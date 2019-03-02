<template lang="html">
   <header :class="$style.header">
      <ul :class="$style.content">
         <li :class="$style.content_img">
            <router-link :to="{ name:'home'}">
               <img src="http://hndqhp.com/Content/Logo/m-logo_20170531185420688.png" alt="">
            </router-link>
         </li>
         <li :class="$style.string">
            <p>专业生产烟花爆竹</p>
            <h4>彰显品质 传递吉祥</h4>
         </li>
      </ul>
   </header> 
</template>

<script>
export default{
   
}
</script>

<style lang="scss" module>
  .header{
     position: fixed;
     height: 120px;
     top:0;
     width: 100%;
     z-index: 98;
     background: #fff;
     .content{
         display: flex;
         flex-direction: row;
         justify-content: center;
         padding-top: 20px;
         box-sizing: border-box;
         .content_img{
            padding-right: 20px;
            img{
               height: 100px;
               width: 250px;
               }
         }
         .string{
            border-left: 2px solid #2c2c2c;
            padding:16px 0 0 20px;
            height: 80px;
            p{
               color: #2c2c2c;
               font-size: 36px;
               padding-bottom: 6px;
            }
            h4{
               color: #a6a6a6;
               font-size: 30px;
           }
         }
        }
    }
</style>
