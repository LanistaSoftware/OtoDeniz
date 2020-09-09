<template>
  <div class="pn-header">
    <b-navbar toggleable="lg" type="light" variant="warning">
      <b-navbar-brand href="#">
        <img src="/oto_deniz_logo.svg" width="150" alt="Oto Deniz Logo" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <HeaderMenu inline="/" :content="menu" />

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>Kullanıcı İşlemleri</em>
            </template>
            <b-dropdown-item href="#" @click="LogOut">Çıkış</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "PanelHeader",
  data() {
    return {
      menu: [
        {
          text: "Parçalarım",
          link: "admin/panel/products"
        },
        {
          text: "İstek Listesi",
          link: "admin/panel/wishlist"
        },
        {
          text: "Mail Listesi",
          link: "admin/panel/maillist"
        },
        {
          text: "Bilgilerim",
          link: "admin/panel/information"
        }
      ]
    };
  },
  methods: {
    ...mapActions({
      LogOut: "LogOut"
    })
  }
};
</script>

<style lang="less">
.pn-header {
  color: @htext !important;
}
</style>
