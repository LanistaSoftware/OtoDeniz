<template>
    <img class="d-logo" :src="'/logo/'+img">
</template>
<script>
export default {
    props:['img']
}
</script>
<style lang="less" scoped>
.d-logo {
    width: 3rem;
    height: 2rem;
}
</style>