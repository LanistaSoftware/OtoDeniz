<template>
  <button :class="[bgVariant, textVariant,{ 'd-button': !sm, 'd-sm-button': sm }]" v-on="$listeners">
    <slot />
  </button>
</template>
<script>
export default {
  props: {
    bgVariant: {
      type: String,
      default: null
    },
    textVariant: {
      type: String,
      default: null
    },
    sm: {
      type: Boolean,
      default: null
    }
  }
};
</script>
<style lang="less">
.d-button {
  font-family: @f;
  width: 100%;
  cursor: pointer;
  padding: 0.5rem 0;
  outline: none;
  border-radius: 0.3em;
  font-size: 1rem;
  border: none;
  transition: 0.2s;

  &:hover {
    filter: contrast(110%);
  }
}
.d-sm-button {
  font-family: @f;
  width: 100%;
  cursor: pointer;
  padding: 0.21rem 0;
  outline: none;
  font-size: 1rem;
  border: none;
  transition: 0.2s;

  &:hover {
    filter: contrast(110%);
  }
}
</style>
