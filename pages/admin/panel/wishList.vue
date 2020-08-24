<template>
  <div class="wish-list w-100" id="wish">
    <Operations>
      <slot>
        <b-col class="m-0 p-0 d-flex w-100 align-items-center">
          <b-button variant="success">
            İndir
            <b-icon-download class="ml-2"></b-icon-download>
          </b-button>
          <b-form-checkbox
            v-if="selected.length != 0"
            class="ml-3"
            id="checkbox"
            v-model="status"
            name="checkbox"
            value="answered"
            unchecked-value="not_answered"
            >Cevaplandı olarak işaretle.</b-form-checkbox
          >
        </b-col>
      </slot>
    </Operations>
    <b-row class="m-0 px-5 d-flex justify-content-center product-container">
      <b-table
        responsive
        striped
        hover
        :items="requests"
        :fields="fields"
        ref="selectableTable"
        @row-selected="onRowSelected"
      >
        <template v-slot:cell(Islemler)="row" class="text-center">
          <div class="d-flex w-100">
            <b-button variant="danger" size="sm" class="mr-2" @click="deletereq(row.item.key)">
              <span>Sil</span>
              <b-icon-trash></b-icon-trash>
            </b-button>
            <b-button
              v-if="row.item.item.status"
              variant="success"
              size="sm"
              class="mr-2"
              disabled
            >
              <span>Cevaplandı</span>
              <b-icon-check></b-icon-check>
            </b-button>
            <b-button
              v-if="!row.item.item.status"
              variant="info"
              size="sm"
              class="mr-2"
              @click="updatereq(row.item.key)"
            >
              <span>
                Tamamlandı
              </span>
              <b-icon-chat></b-icon-chat>
            </b-button>
          </div>
        </template>
      </b-table>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "wishList",
  data() {
    return {
      fields: [
        {
          key: "item.model",
          label: "Araç Bilgisi"
        },
        {
          key: "item.yıl",
          label: "Araç Yılı"
        },
        {
          key: "item.sasi",
          label: "Şasi No"
        },
        {
          key: "item.parca",
          label: "Parça Adı"
        },
        {
          key: "item.isim",
          label: "İsim"
        },
        {
          key: "item.soyisim",
          label: "Soyisim"
        },
        {
          key: "item.tel",
          label: "Telefon"
        },
        {
          key: "item.email",
          label: "E-mail"
        },
        {
          key: "item.date",
          label: "Ekleme tarihi",
          sortable: true
        },
        "Islemler"
      ],
      items: [
        {
          carInfo: "Ford Focus 1.6 TDI",
          modelYear: 2009,
          chassisNo: "AKDFJKDSIDK4444KSJKSJ",
          partName: "Krank Mili",
          name: "Serkan",
          surName: "Korkaç",
          phone: "05340303000",
          email: "korkac@kackor.com"
        },
        {
          carInfo: "Ford Focus 1.6 TDI",
          modelYear: 2009,
          chassisNo: "AKDFJKDSIDK4444KSJKSJ",
          partName: "Krank Mili",
          name: "Serkan",
          surName: "Korkaç",
          phone: "05340303000",
          email: "korkac@kackor.com"
        },
        {
          carInfo: "Ford Focus 1.6 TDI",
          modelYear: 2009,
          chassisNo: "AKDFJKDSIDK4444KSJKSJ",
          partName: "Krank Mili",
          name: "Serkan",
          surName: "Korkaç",
          phone: "05340303000",
          email: "korkac@kackor.com"
        }
      ],
      selectMode: "multi",
      selected: [],
      status: null
    };
  },
  computed: {
    ...mapState({
      requests: "requests"
    })
  },
  created() {
    this.getAllRequest();
  },

  methods: {
    ...mapActions({
      getAllRequest: "getAllRequest",
      updateStatus: "updateStatus",
      deleteRequest: "deleteRequest"
    }),
    onRowSelected(items) {
      this.selected = items;
    },
    updatereq(id) {
      this.updateStatus(id).then(() => {
        this.getAllRequest();
      });
    },
    deletereq(id) {
      this.deleteRequest(id).then(() => {
        this.getAllRequest();
      });
    }
  }
};
</script>
