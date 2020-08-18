<template>
  <div class="d-form">
    <div class="form-group">
      <div>
        <label for="model">Araç marka modeli</label>
        <d-input type="text" name="model" id="model" value="model" />
      </div>
      <div>
        <label for="model">Araç marka modeli</label>
        <d-input type="text" name="model" id="model" value="model" />
      </div>
      <div>
        <label for="model">Araç marka modeli</label>
        <d-input type="text" name="model" id="model" value="model" />
      </div>
      <div>
        <label for="model">Araç marka modeli</label>
        <d-input type="text" name="model" id="model" value="model" />
      </div>
      <div>
        <label for="model">Araç marka modeli</label>
        <d-input type="text" name="model" id="model" value="model" />
      </div>
      <div>
        <label for="model">Araç marka modeli</label>
        <d-input type="text" name="model" id="model" value="model" />
      </div>
      <div>
        <label for="model">Araç marka modeli</label>
        <d-input type="text" name="model" id="model" value="model" />
      </div>
      <div>
        <label for="model">Araç marka modeli</label>
        <d-input type="text" name="model" id="model" value="model" />
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
