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
            <EditInfo edit-key= 'name' edit-tag="Şirket Ünvanı" :edit-field="Info.name" />
            <EditInfo edit-key= 'adress' edit-tag="Şirket Adresi" :edit-field="Info.adress" />
            <EditInfo edit-key= 'phone' edit-tag="Şirket Telefon" :edit-field="Info.phone" />
            <EditInfo edit-key= 'email' edit-tag="Şirket Eposta" :edit-field="Info.email" />
            <EditInfo edit-key= 'logo' logo edit-tag="Şirket Logo" :edit-field="Info.logo" />
          </tbody>
        </table>
      </b-card>
    </b-row>
  </div>
</template>
<script>
import { mapActions,mapState } from "vuex";

export default {
  name: "Information",
  methods: {
    ...mapActions({
    getInfo: "getInfo"
    })
  },
  created() {
    this.getInfo();
  },
  computed: {
    ...mapState({
      Info: 'Info'
    })
  },
  data() {
    return {
      // company: {
      //   name: "Oto Deniz Ltd. Şti.",
      //   adress: "Oto Deniz Cad. Oto Deniz Sk.",
      //   phone: "444 0 536",
      //   email: "otodeniz.gmail.com",
      //   logo: "oto_deniz_logo.svg"
      // }
    };
  }
};
</script>
