<template>
  <div class="information w-100" id="mail">
    <Operations />
    <b-row class="m-0 px-5 d-flex justify-content-center product-container">
      <b-card style="max-width: 70%;" class="mb-2">
        <table class="table table-striped">
          <thead>
            <tr>
              <th colspan="3"><h4 class="text-success">Firma Bilgileri</h4></th>
            </tr>
          </thead>
          <tbody>
            <EditInfo edit-tag="Şirket Ünvanı" :edit-field="company.name" />
            <EditInfo edit-tag="Şirket Adresi" :edit-field="company.adress" />
            <EditInfo edit-tag="Şirket Telefon" :edit-field="company.phone" />
            <EditInfo edit-tag="Şirket Eposta" :edit-field="company.email" />
            <EditInfo logo edit-tag="Şirket Logo" :edit-field="company.logo" />
          </tbody>
        </table>
      </b-card>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Information",
  data() {
    return {
      company: {
        name: "Oto Deniz Ltd. Şti.",
        adress: "Oto Deniz Cad. Oto Deniz Sk.",
        phone: "444 0 536",
        email: "otodeniz.gmail.com",
        logo: "oto_deniz_logo.svg",
      },
    };
  },
};
</script>