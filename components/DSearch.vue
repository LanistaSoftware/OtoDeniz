<template>
  <div class="d-search">
    <img src="search.png" />
    <d-input v-model="val" class="d-search-input" />
    <d-button
      class="d-search-button"
      textVariant="text-white"
      bgVariant="bg-green"
      sm
      @click="searchprod()"
      >Ara</d-button
    >
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      val: null
    };
  },
  watch: {
    val() {
      if (this.val == null || this.val == "") {
        this.$emit("pr", this.products);
      }
    }
  },
  computed: {
    ...mapState({
      products: "products"
    })
  },
  methods: {
    searchprod() {
      var products = [];
      if (this.val == null || this.val == "") {
        this.$emit("pr", this.products);
      } else {
        this.products.map(pr => {
          if (
            pr.item.name == this.val ||
            pr.item.categories == this.val ||
            pr.item.desc == this.val
          ) {
            products.push(pr);
          }
          this.$emit("pr", products);
        });
      }
    }
  }
};
</script>
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
input {
  border: transparent !important;
}
</style>
