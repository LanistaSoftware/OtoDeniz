<template>
<div>
  <b-navbar toggleable="lg" type="light" variant="warning">
    <b-navbar-brand href="#"><img src="/oto_deniz_logo.svg" width="80" alt="Oto Deniz Logo"></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/admin/panel/products">Parçalarım</b-nav-item>
        <b-nav-item href="#">İstek Listesi</b-nav-item>
        <b-nav-item href="#">Mail Listesi</b-nav-item>
        <b-nav-item href="#">Bilgilerim</b-nav-item>
      </b-navbar-nav>

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
name: 'PanelHeader'
}
</script>

<style>

</style>