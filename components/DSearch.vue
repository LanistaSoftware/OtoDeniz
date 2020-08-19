<template>
  <div class="d-search">
    <img src="search.png" />
    <d-input class="d-search-input"/>
    <d-button
      class="d-search-button"
      textVariant="text-white"
      bgVariant="bg-green"
      sm
      >Ara</d-button
    >
  </div>
</template>
<style lang="less" scoped>
img {
  width: 1rem;
  position: absolute;
  margin-left: 1rem;
  align-self: center;
}
.d-search {
  display: inline-flex;
  width: 80%;
  border-radius: 0.7em !important;


}
.d-search-button {
  width: 20%;
  border-bottom-right-radius: 0.5em;
  border-top-right-radius: 0.5em;
  margin-left: -8px;
}
.d-search-input {
  width: 100%;
  padding-left: 3rem !important;
  border-radius: 0.5em !important;
  width: 80%;
}
</style>
