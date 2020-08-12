<template>
    <button class="d-button" :class="[bgVariant,textVariant]"  v-on="$listeners"><slot /></button>
</template>
<script>
export default {
    props: {
        bgVariant: {
            type:String,
            default:null
        },
        textVariant: {
            type:String,
            default:null
        }
    }
}
</script>
<style lang="less">
.d-button {
  font-family: @f;
  width: 100%;
  cursor: pointer;
  padding: 0.8rem 0;
  outline: none;
  border-radius: .3em;
  font-size: 1rem;
  border: none;
  transition: 0.2s;

  &:hover {
    filter: contrast(110%);
  }
}
</style>