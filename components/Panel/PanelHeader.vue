<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="warning">
      <b-navbar-brand href="#">
        <img src="/oto_deniz_logo.svg" width="150" alt="Oto Deniz Logo" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- <b-navbar-nav>
          <nuxt-link to="/admin/panel/products">Parçalarım</nuxt-link>
          <nuxt-link to="/admin/panel/wishlist">İstek Listesi</nuxt-link>
          <nuxt-link to="/admin/panel/maillist">Mail Listesi</nuxt-link>
          <nuxt-link to="/admin/panel/information">Bilgilerim</nuxt-link>
        </b-navbar-nav> -->
        <HeaderMenu inline="/" :content="menu" />
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>Kullanıcı İşlemleri</em>
            </template>
            <b-dropdown-item href="#">Çıkış</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "PanelHeader",
    data() {
    return {
      menu: [
        {
          text: "Parçalarım",
          link: "admin/panel/products",
        },
        {
          text: "İstek Listesi",
          link: "admin/panel/wishlist",
        },
        {
          text: "Mail Listesi",
          link: "admin/panel/maillist",
        },
        {
          text: "Bilgilerim",
          link: "admin/panel/information",
        }
      ],
    };
  },
};
</script>

<style>
</style>