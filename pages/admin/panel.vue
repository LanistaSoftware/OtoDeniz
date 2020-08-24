<template>
  <div class="panel-body">
    <PanelHeader />
    <nuxt-child />
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "Panel",
  computed: {
    ...mapState({
      auth: 'auth'
    })
  },
  created(){
    if (!this.auth) {
      this.$router.push('/admin')
    }
  }
};
</script>

<style>
</style>