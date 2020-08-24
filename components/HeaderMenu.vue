<template>
  <div class="d-header-menu">
    <ul>
      <li class="f_normal_bold" v-for="(item, i) in content" :key="i">
        <nuxt-link :to="inline + item.link" tag="a">
          {{ item.text }}
          <span />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: Object,
      default: null,
    },
    inline: {
      type: String,
      default: null,
    },
  },
};
</script>
<style lang="less" scoped>
a {
  text-decoration: none;
}
.d-header-menu {
  width: 100%;
}
li {
  display: block;
  color: @htext;
  font-size: 0.8rem;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
}
ul {
  display: block;
  padding: 0;
  align-items: center;
  justify-content: center;
}

@media only screen and (min-width: 991px) {
  ul {
    display: flex;
  }
  li {
    float: right;
    display: grid;
  }
}
</style>
