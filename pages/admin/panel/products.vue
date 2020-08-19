<template>
  <div class="service-section-product" id="ürünler">
    <b-card
      v-for="(item, i) in products"
      :key="i"
      :title="item.categories"
      :img-src="'/'+item.img"
      img-alt="Ürün Resmi"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text><h4 class="text-primary">{{item.name}}</h4></b-card-text>
      <b-card-text>{{item.desc}}</b-card-text>


      <b-button href="#" size="sm" variant="danger"><b-icon-trash /></b-button>
      <b-button href="#" size="sm" variant="warning"><b-icon-pencil-square /></b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "products",
  data() {
    return {
      products: [
        {
          categories: "MOTOR PARÇALARI",
          name: "Krank Mili",
          desc: "Chevrolet Cruze 2013 1.6 Benzinli",
          pageButton: "Hemen Arayın",
          img: "2.png",
        },
        {
          categories: "MOTOR PARÇALARI",
          name: "Krank Mili",
          desc: "Chevrolet Cruze 2013 1.6 Benzinli",
          pageButton: "Hemen Arayın",
          img: "2.png",
        },
        {
          categories: "MOTOR PARÇALARI",
          name: "Krank Mili",
          desc: "Chevrolet Cruze 2013 1.6 Benzinli",
          pageButton: "Hemen Arayın",
          img: "2.png",
        },
        {
          categories: "MOTOR PARÇALARI",
          name: "Krank Mili",
          desc: "Chevrolet Cruze 2013 1.6 Benzinli",
          pageButton: "Hemen Arayın",
          img: "2.png",
        },
        {
          categories: "MOTOR PARÇALARI",
          name: "Krank Mili",
          desc: "Chevrolet Cruze 2013 1.6 Benzinli",
          pageButton: "Hemen Arayın",
          img: "2.png",
        },
        {
          categories: "MOTOR PARÇALARI",
          name: "Krank Mili",
          desc: "Chevrolet Cruze 2013 1.6 Benzinli",
          pageButton: "Hemen Arayın",
          img: "2.png",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.service-section-product {
  width: 100%;
  display: flex-box;
}
</style>