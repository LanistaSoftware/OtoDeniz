<template>
  <div class="service-section-product w-100" id="ürünler">
    <b-sidebar width="40%" id="sidebar-1" title="Ürün İşlemleri" shadow>
      <AddProduct :form-state="formState" />
    </b-sidebar>
    <Operations>
      <slot>
        <b-button @click="formState='Add'" v-b-toggle.sidebar-1 class="w-25" variant="success">
          Ekle
          <b-icon-plus></b-icon-plus>
        </b-button>
      </slot>
    </Operations>
    <b-row class="m-0 px-5 d-flex justify-content-center product-container">
      <b-col
        sm="5"
        md="4"
        lg="3"
        xl="2"
        class="d-flex align-items-center p-2"
        v-for="(item, i) in products"
        :key="i"
      >
        <b-card
          :img-src="'/'+item.img"
          img-alt="Ürün Resmi"
          img-top
          tag="article"
          class="product-card mb-2"
        >
          <b-card-title>
            <h5>{{item.categories}}</h5>
          </b-card-title>
          <b-card-text>
            <h5 class="text-primary">{{item.name}}</h5>
          </b-card-text>
          <b-card-text>{{item.desc}}</b-card-text>
          <b-col class="w-100 m-0 p-0 text-center">
            <b-button href="#" size="sm" variant="danger">
              <b-icon-trash />
            </b-button>
            <b-button @click="formState='Edit'" v-b-toggle.sidebar-1  href="#" size="sm" variant="warning">
              <b-icon-pencil-square />
            </b-button>
          </b-col>
        </b-card>
      </b-col>
    </b-row>
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
      formState: null,
    };
  },
};
</script>
