<template>
  <button
    :class="[bgVariant, textVariant, { 'd-button': !sm, 'd-sm-button': sm }]"
    @click="callback($event)"
  >
    <slot v-if="!phone" />
    <a v-else :href="'tel:'+Info.phone">
      <slot></slot>
    </a>
  </button>
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed: {
    ...mapState({
      Info:'Info'
    })
  },
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
    },
    phone: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    callback: function(e) {
      this.$emit("click", e);
    }
  }
};
</script>
<style lang="less">
.d-button {
  font-family: @f;
  width: 100%;
  cursor: pointer;
  padding: 10px 0;
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
