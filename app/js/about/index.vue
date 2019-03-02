<template lang="html">
    <div>
        <Heador></Heador>
        <Headernav></Headernav>
        <About></About>
        <Footer></Footer>
        <Footernav></Footernav>
    </div>
</template>

<script>
import Heador from "../common/header"
import Headernav from "../common/headernav"
import About from "./about"

import Footer from "../common/footer"
import Footernav from "../common/footernav"

export default {
  components:{
    Heador,
    Headernav,
    Footer,
    Footernav,
    About
  }
}
</script>

<style lang="scss" module>
  @import '../../css/reset.scss';
</style>
