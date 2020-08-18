<template>
  <input
    type="text"
    v-bind="$attrs"
    :value="value"
    @input="$emit('input', $event.target.value)"
    :class="{ 'd-input': !sm, 'd-sm-input': sm }"
  />
</template>
<script>
export default {
    props: {
        sm: {
            type:Boolean,
            default:false
        }
    }
}
</script>
<style lang="less" scoped>
.d-input {
  padding: 0.5rem;
  width: 100%;
  background-color: @white;
  border: 1.4px solid @gray;
  outline: none;
  border-radius: 0.2em;
  color: @drop;
  font-size: 1.2rem;
}
.d-sm-input {
  padding: 0.5rem;
  width: 100%;
  background-color: @white;
  border: 1px solid @gray;
  outline: none;
  border-radius: 0.3em;
  color: @drop;
  font-size: 0.6rem;
}
</style>
