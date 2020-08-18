<template>
  <div class="d-mail">
    <d-input class="mail-input" ts />
    <d-button class="mail-button" bgVariant="bg-black" textVariant="text-yellow"
      >Gönder</d-button
    >
  </div>
</template>
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
}
.mail-input {
  border-radius: none;
  width: 100%;

}
</style>
