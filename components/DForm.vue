<template>
  <div class="d-form">
    <div class="form-group">
      <div>
        <label for="model">Araç marka modeli</label>
        <d-input v-model="form.model" type="text" name="model" id="model" />
      </div>
      <div>
        <label for="yıl">Araç Yılı</label>
        <d-input v-model="form.yıl" type="text" name="Araç Yılı" id="yıl" />
      </div>
      <div>
        <label for="sno">Araç Şasi No</label>
        <d-input v-model="form.sasi" type="text" name="sasiono" id="sno" />
      </div>
      <div>
        <label for="parca">Aradığınız Parça</label>
        <d-input v-model="form.parca" type="text" name="parca" id="parca" />
      </div>
      <div>
        <label for="isim">İsim</label>
        <d-input v-model="form.isim" type="text" name="isim" id="isim" />
      </div>
      <div>
        <label for="soyisim">Soyisim</label>
        <d-input v-model="form.soyisim" type="text" name="soyisim" id="soyisim" />
      </div>
      <div>
        <label for="tel">Telefon</label>
        <d-input v-model="form.tel" type="text" name="tel" id="tel" />
      </div>
      <div>
        <label for="mail">E-Mail</label>
        <d-input v-model="form.email" type="text" name="mail" id="mail" />
      </div>
    </div>
    <div class="form-button">
      <d-button textVariant="text-blue" bgVariant="bg-blue" @click="Istekekle">
        Gönder
      </d-button>
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      form: {
        model: null,
        sasi: null,
        parca: null,
        yıl: null,
        isim: null,
        soyisim: null,
        tel: null,
        email: null
      }
    };
  },
  methods: {
    ...mapActions({
      parcaIstek: 'parcaIstek'
    }),
    Istekekle(){
      this.parcaIstek(this.form).then(() => {
        this.form.model = null
        this.form.sasi = null
        this.form.parca = null
        this.form.yıl = null
        this.form.isim = null
        this.form.soyisim = null
        this.form.tel = null
        this.form.email = null
      })
    }
  }
};
</script>
<style lang="less" scoped>
input {
  margin-top: 1rem;
}
.d-form {
  padding-top: 5rem;
}
.form-group {
  display: grid;
  gap: 2rem 1rem;
  grid-template-columns: 1fr 1fr;
  label {
    margin-bottom: 0.3rem;
  }
}
.form-button {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  button {
    color: @white;
    width: 15%;
  }
}
@media @xs {
  .form-group {
    grid-template-columns: 1fr;
    display: grid;
    label {
      display: flex;
      justify-content: center;
      margin-bottom: 0.3rem;
    }
  }
  button {
    color: @white;
    width: 100% !important;
  }
}
@media @sm {
  .form-group {
    grid-template-columns: 1fr;
    label {
      display: flex;
      justify-content: center;
      margin-bottom: 0.3rem;
    }
  }
  button {
    color: @white;
    width: 100% !important;
  }
}
</style>
