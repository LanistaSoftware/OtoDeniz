<template>
    <img class="d-logo" :src="'/logo/'+img" :alt="img">
</template>
<script>
export default {
    props:{
        img: {
            type:String,
            default: null
        }
    }
}
</script>
<style lang="less" scoped>
.d-logo {
    width: 100%;
    height: auto;
}
</style>