<template lang="html">
    <div>
        <Heador></Heador>
        <Headernav></Headernav>
        <Hslider></Hslider>
        <Hot></Hot>
        <Iabout></Iabout>
        <Honor></Honor>
        <News></News>
        <Contact></Contact>
        <Search></Search>
        <Footer></Footer>
        <Footernav></Footernav>
    </div>
</template>

<script>
import Heador from "../common/header"
import Headernav from "../common/headernav"
import Hslider from "./hslider"
import Hot from "./hot"
import Iabout from "./iabout"
import Honor from "./honor"
import News from "./news"
import Contact from "./contact"
import Footer from "../common/footer"
import Footernav from "../common/footernav"
import Search from "./search"

export default {
  components:{
    Heador,
    Headernav,
    Hslider,
    Hot,
    Iabout,
    Honor,
    News,
    Contact,
    Footer,
    Footernav,
    Search
  }
}
</script>

<style lang="scss" module>
  @import '../../css/reset.scss';
</style>
