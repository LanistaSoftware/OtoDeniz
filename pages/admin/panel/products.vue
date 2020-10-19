<template>
<no-ssr>
  <div class="service-section-product w-100" id="ürünler">
    <b-sidebar  width="40%" ref="product-bar" id="productBar" title="Ürün İşlemleri" shadow>
      <AddProduct :item="edititem" :form-state="formState" />
    </b-sidebar>
    <Operations>
      <slot>
        <b-button id="addbutton" @click="openSidebar('Add')" class="w-25" variant="success">
          Ekle
          <b-icon-plus></b-icon-plus>
        </b-button>
        <b-button v-show="false" v-b-toggle.productBar ref="as" />
      </slot>
    </Operations>
    <b-row class="m-0 px-5 d-flex justify-content-center product-container">
      <b-col
        sm="5"
        md="4"
        lg="3"
        xl="2"
        class="d-flex align-items-center p-2"
        v-for="product in products"
        :key="product.key"
      >
        <b-card
          img-alt="Ürün Resmi"
          img-top
          tag="article"
          class="product-card mb-2"
        >
        <d-img :imgurl="product.item.file"/>
          <b-card-title>
            <h5>{{ product.item.categories }}</h5>
          </b-card-title>
          <b-card-text>
            <h5 class="text-primary">{{ product.item.name }}</h5>
          </b-card-text>
          <b-card-text>{{ product.item.desc }}</b-card-text>
          <b-col class="w-100 m-0 p-0 text-center">
            <b-button href="#" size="sm" variant="danger" @click="deleteDoc(product.key,product.item.file)">
              <b-icon-trash />
            </b-button>
            <b-button
              @click="openSidebar('Edit'),edititem=product"
              href="#"
              size="sm"
              variant="warning"
            >
              <b-icon-pencil-square />
            </b-button>
          </b-col>
        </b-card>
      </b-col>
    </b-row>
  </div>
</no-ssr>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "products",
  computed: {
    ...mapState({
      products: "products"
    })
  },
  data() {
    return {
      formState: null,
      edititem:null
    };
  },
  mounted() {
    this.getAllProduct()
  },
  methods: {
    ...mapActions({
      getAllProduct: "getAllProduct",
      deleteDocument :'deleteDocument'
    }),
    deleteDoc(id,file) {
      this.deleteDocument({id:id, file:file}).then(() => {
        this.getAllProduct()
      })
    },
     openSidebar(state) {
      this.formState = state
      this.$refs['as'].click()
    }
  }
};
</script>
