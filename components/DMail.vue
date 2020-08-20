<template>
  <div class="d-mail">
    <d-input class="mail-input"  v-model="mail" ts />
    <d-button class="mail-button" bgVariant="bg-black" textVariant="text-yellow"
      @click="handleSubmit">Gönder</d-button
    >
  </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
  data(){
    return {
      mail:null
    }
  },
  methods: {
    ...mapActions({
      addRequest:'addRequest'
    }),
    handleSubmit(){
      this.addRequest(this.mail).then(() => {
        this.mail = null
      })
    }
  }
}
</script>
<style lang="less" scoped>
.d-mail {
  display: flex;
  border: 0.5px solid @drop;
  border-radius: 0.5em;
  width: 100%;
}
.mail-button {
  margin-left: -8px;
  border-radius: 0.3em;
  width: 45%;
}
.mail-input {
  border-radius: none;
  width: 100%;

}
</style>
