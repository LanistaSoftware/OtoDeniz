<template>
  <div>
    <ul>
      <li>
        <nuxt-link tag="a" to="#ansayfa" exact-active-class="">Ana sayfa</nuxt-link>
        <span />
      </li>
      <li>
        <nuxt-link tag="a" to="#ansayfa" exact-active-class="">Ana sayfa</nuxt-link><span />
      </li>
      <li>
        <nuxt-link tag="a" to="#ansayfa" exact-active-class="">Ana sayfa</nuxt-link><span />
      </li>
      <li>
        <nuxt-link tag="a" to="#ansayfa" exact-active-class="">Ana sayfa</nuxt-link><span />
      </li>
      <li>
        <nuxt-link tag="a" to="#ansayfa" exact-active-class="">Ana sayfa</nuxt-link><span />
      </li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
li {
  color: @htext;
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
}
span {
  display: none;
}
ul {
  display: flex;
  align-items: center;
}
</style>
