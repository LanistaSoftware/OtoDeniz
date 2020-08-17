<template>
  <div>
    <ul>
      <li class="f_normal_bold" v-for="(item, i) in menu" :key="i">
        <nuxt-link :to="'#' + item.link" tag="a" exact
          >{{ item.text }} <span />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          text: "Ana sayfa",
          link: "anasayfa"
        },
        {
          text: "Hakkımızda",
          link: "hakkımızda"
        },
        {
          text: "Ürünler",
          link: "ürünler"
        },
        {
          text: "İstek Listesi",
          link: "isteklistesi"
        },
        {
          text: "İletişim",
          link: "iletişim"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
li {
  color: @htext;
  float: right;
  display: grid;
  font-size: 1rem;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
}
ul {
  display: flex;
  align-items: center;
}
</style>
