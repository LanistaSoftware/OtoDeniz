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
  width: 100%;
  cursor: pointer;
  padding: 14px;
  outline: none;
  border-radius: .5em;
  font-size: 1rem;
  border: none;
  transition: 0.2s;

  &:hover {
    filter: contrast(110%);
  }
}
</style>