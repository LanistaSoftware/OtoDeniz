<template>
  <input
    v-bind="$attrs"
    type="text"
    @input="$emit('input', $event.target.value)"
    :class="{ 'd-input': !sm, 'd-sm-input': sm, 'd-ts':ts}"
  />
</template>
<script>
export default {
    prop: ['value'],
    props: {
        sm: {
            type:Boolean,
            default:false
        },
        ts: {
            type:Boolean,
            default:false
        }
    },
    data(){
      return {
        content: this.value
      }
    },
    methods: {
       handleInput (e) {
      this.$emit('input', this.content)
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
.d-ts {
  background-color:rgba(0, 0, 0, 0);
  border-radius:none;
  border: none;
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
