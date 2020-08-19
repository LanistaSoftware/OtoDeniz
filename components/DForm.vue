<template>
  <div class="d-form">
    <div class="form-group">
      <div>
        <label for="model">Araç marka modeli</label>
        <d-input type="text" name="model" id="model"  />
      </div>
      <div>
        <label for="yıl">Araç Yılı</label>
        <d-input type="text" name="Araç Yılı" id="yıl" />
      </div>
      <div>
        <label for="sno">Araç Şasi No</label>
        <d-input type="text" name="sasiono" id="sno" />
      </div>
      <div>
        <label for="parca">Aradığınız Parça</label>
        <d-input type="text" name="parca" id="parca"  />
      </div>
      <div>
        <label for="isim">İsim</label>
        <d-input type="text" name="isim" id="isim"  />
      </div>
      <div>
        <label for="soyisim">Soyisim</label>
        <d-input type="text" name="soyisim" id="soyisim" />
      </div>
      <div>
        <label for="tel">Telefon</label>
        <d-input type="text" name="tel" id="tel" />
      </div>
      <div>
        <label for="mail">E-Mail</label>
        <d-input type="text" name="mail" id="mail" />
      </div>
    </div>
    <div class="form-button">
      <d-button textVariant="text-blue" bgVariant="bg-blue">
        Gönder
      </d-button>
    </div>
  </div>
</template>
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
