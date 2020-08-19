<template>
  <div class="d-search ">
    <img src="search.png" />
    <d-input class="d-search-input" sm />
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
}
.d-search {
  display: inline-flex;
  align-items: center;
  width: 80%;
  border-bottom-right-radius: 0.3em;
  border-top-right-radius: 0.3em;
}
.d-search-button {
  width: 20%;
  border-bottom-right-radius: 0.3em;
  border-top-right-radius: 0.3em;
  margin-left: -8px;
}
.d-search-input {
  width: 100%;
  padding-left: 3rem !important;
  width: 80%;
}
</style>
