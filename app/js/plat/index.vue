<template lang="html">
    <div>
        <Heador></Heador>
        <Bmap></Bmap>
    </div>
</template>

<script>
import Heador from '../common/header'
import Bmap from './bmap'

export default{
    components:{
        Heador,
        Bmap
    }
}
</script>

<style lang="scss" module>
@import '../../css/reset.scss';
</style>