<template>
  <div class="product-card d_shaodw">
    <div class="product-card-image">
      <img src="2.png" alt="" srcset="" />
    </div>
    <div class="product-card-body">
      <div class="body-title">
        <h2 class="f_regular">MOTOR PARÇALARI</h2>
      </div>
      <div class="body-subtitle">
        <h2>Krank Mili</h2>
      </div>
      <div class="body-description">
        <h2 class="desc-title">Chevrolet Cruze 2013 1.6 Benzinli</h2>
        <d-button
          class="body-button button"
          bgVariant="bg-blue"
          textVariant="text-white"
          >Hemen Arayın</d-button
        >
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.product-card {
  display: grid;
  grid-template-rows: 0.5fr 0.8fr;
  grid-template-areas: "product-card-image" "product-card-body";
  width: 100%;
  background-color: @white;
  border-radius: 2em;
  cursor: pointer;
}
.product-card-image {
  grid-area: product-card-image;
  overflow: hidden;
  border-top-left-radius: 2em;
  border-top-right-radius: 2em;
  display: grid;
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
}
.product-card-body {
  display: grid;
  grid-area: product-card-body;
  width: 100%;
  height: 100%;
  grid-template-rows: 1fr 1fr 0.5fr;
  grid-template-areas: "body-title" "body-subtitle" "body-description";
  justify-items: center;
}
.body-title {
  grid-area: body-title;
  color: @drop;
}
.body-subtitle {
  grid-area: body-subtitle;
  h2 {
    color: @blue;
  }
}
.body-description {
  grid-area: body-description;
  display: grid;
  text-align: center;
  padding: 1rem;
  width: 100%;
  justify-items: center;
  h2 {
    width: 70%;
  }
}
.body-button {
  display: none;
}
@media @xs {
  .body-title {
    display: none;
  }
  .body-button {
    display: block;
    width: 80%;
    margin-bottom: 0.5rem;
  }
  .product-card-body {
    grid-template-rows: none;
  }
  .body-description {
    h2 {
      color: @drop;
    }
  }
}
@media @sm {
  .body-title {
    display: none;
  }
  .body-button {
    display: block;
    width: 80%;
  }
  .product-card-body {
    grid-template-rows: none;
  }
  .body-description {
    h2 {
      color: @drop;
    }
  }
}
</style>
