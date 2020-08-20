<template>
  <div class="px-3 py-2">
    <b-row
      class="m-0 px-5 w-100 d-flex justify-content-center product-container"
    >
      <b-col class="d-flex align-items-center p-2">
        <h6>Önizleme</h6>
        <b-card
          :img-src="prewImage"
          img-alt="Ürün Resmi"
          img-top
          tag="article"
          class="product-card mb-2"
        >
          <b-card-title>
            <h5>{{ form.categories }}</h5>
          </b-card-title>
          <b-card-text>
            <h5 class="text-primary">{{ form.name }}</h5>
          </b-card-text>
          <b-card-text>{{ form.desc }}</b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <b-form @submit.prevent="handleSubmit()">
      <b-form-group
        id="input-group-1"
        label="Ürün Resmi :"
        label-for="file-upload"
      >
        <input
          id="file-upload"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
          ref="file"
          type="file"
          v-on:change="selectedFile"
        />
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Parça Kategorisi:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.categories"
          required
          placeholder="Kategori Adı"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Parça Adı:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.name"
          required
          placeholder="Parça Adı"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4" label="Açıklama:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="form.desc"
          required
          placeholder="Açıklama"
        ></b-form-input>
      </b-form-group>
      <b-button v-if="formState === 'Add'" type="submit" variant="primary"
        >Kaydet</b-button
      >
      <b-button v-else type="submit" variant="warning">Güncelle</b-button>
      <b-button type="reset" @click="reset" variant="danger">Temizle</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddProduct",
  props: {
    formState: {
      type: String,
      default: "Add"
    },
    item: {
      type: String,
      default: null,
      required: false
    }
  },
  data() {
    return {
      prewImage: null,
      id: null,
      form: {
        categories: null,
        name: null,
        desc: null,
        file: null
      }
    };
  },
  watch: {
    item(to) {
      if (this.formState == "Edit") {
        this.form.categories = to.item.categories;
        this.form.name = to.item.name;
        this.form.desc = to.item.desc;
        this.form.file = to.item.file;
        this.id = to.key;
        this.getimg(this.form.file);
      } else {
        this.form.categories = null;
        this.form.name = null;
        this.form.desc = null;
        this.form.file = null;
      }
    }
  },
  methods: {
    ...mapActions({
      addProduct: "addProduct",
      getAllProduct: "getAllProduct",
      UpdateProduct: "UpdateProduct"
    }),
    handleSubmit() {
      if (this.formState === "Edit") {
        this.updateOnly();
      } else {
        this.setProduct();
      }
    },
    updateOnly() {
      this.UpdateProduct({ form: this.form, id: this.id }).then(() => {
        this.getAllProduct();
        this.prewImage = null;
      });
    },
    setProduct() {
      this.addProduct(this.form).then(() => {
        this.prewImage = null;
        this.getAllProduct();
      });
    },
    selectedFile() {
      var file = "";
      file = this.$refs.file.files[0];
      console.log(this.$refs.file);
      this.form.file = file;
      // this.galery.image.append("file", file);
      if (!file || file.type.indexOf("image/") !== 0) return;

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = evt => {
        let img = new Image();
        img.onload = () => {};
        this.prewImage = evt.target.result;
        img.src = evt.target.result;
      };
      reader.onerror = evt => {
        alert(evt);
      };
    },
    async getimg(img) {
      try {
        let ref = this.$fireStorage.ref().child(img);
        const url = await ref.getDownloadURL();
        this.prewImage = url;
        return url;
      } catch (error) {
        return url;
      }
    },
    reset() {
      this.form.name = null;
      this.form.desc = null;
      this.form.file = null;
      this.form.categories = null;
      this.prewImage = null;
    }
  }
};
</script>
