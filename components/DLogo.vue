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
    width: 2.5rem;
    height: 2.5rem;
}
</style>