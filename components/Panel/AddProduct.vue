<template>
  <div class="px-3 py-2">
    <b-row class="m-0 px-5 w-100 d-flex justify-content-center product-container">
      <b-col class="d-flex align-items-center p-2">
        <h6>Önizleme</h6>
        <b-card
          :img-src="form.file"
          img-alt="Ürün Resmi"
          img-top
          tag="article"
          class="product-card mb-2"
        >
          <b-card-title>
            <h5>{{form.categories}}</h5>
          </b-card-title>
          <b-card-text>
            <h5 class="text-primary">{{form.name}}</h5>
          </b-card-text>
          <b-card-text>{{form.desc}}</b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <b-form>
      <b-form-group id="input-group-1" label="Ürün Resmi :" label-for="file-upload">
        <b-form-file
          id="file-upload"
          v-model="form.file"
          :state="Boolean(file)"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
        ></b-form-file>
      </b-form-group>

      <b-form-group id="input-group-2" label="Parça Kategorisi:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.categories" required placeholder="Kategori Adı"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Parça Adı:" label-for="input-3">
        <b-form-input id="input-3" v-model="form.name" required placeholder="Parça Adı"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4" label="Açıklama:" label-for="input-4">
        <b-form-input id="input-4" v-model="form.desc" required placeholder="Açıklama"></b-form-input>
      </b-form-group>
      <b-button v-if="formState === 'Add'" type="submit" variant="primary">Kaydet</b-button>
      <b-button v-else type="submit" variant="warning">Güncelle</b-button>
      <b-button type="reset" @click="reset" variant="danger">Temizle</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "AddProduct",
  props: {
    formState: {
      type: String,
      default: "Add",
    },
  },
  data() {
    return {
      form: {
        categories: null,
        name: null,
        desc: null,
        pageButton: null,
        file: null,
      },
    };
  },
  methods: {
    reset() {
      this.form.name = null;
      this.form.desc = null;
      this.form.file = null;
      this.form.categories = null;
    },
  },
};
</script>