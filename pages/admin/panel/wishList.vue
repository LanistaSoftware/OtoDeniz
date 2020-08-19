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
            v-if="selected.length!=0"
            class="ml-3"
            id="checkbox"
            v-model="status"
            name="checkbox"
            value="answered"
            unchecked-value="not_answered"
          >Cevaplandı olarak işaretle.</b-form-checkbox>
        </b-col>
      </slot>
    </Operations>
    <b-row class="m-0 px-5 d-flex justify-content-center product-container">
      <b-table
        responsive
        striped
        hover
        :items="items"
        :fields="fields"
        selectable
        ref="selectableTable"
        :select-mode="selectMode"
        @row-selected="onRowSelected"
      >
        <template v-slot:cell(islemler) class="text-center">
          <div class="d-flex w-100">
            <b-button variant="danger" size="sm" class="mr-2">
              <b-icon-trash></b-icon-trash>
            </b-button>
          </div>
        </template>
      </b-table>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "wishList",
  data() {
    return {
      fields: [
        "carInfo",
        "modelYear",
        "chassisNo",
        "partName",
        "name",
        "surName",
        "phone",
        "email",
        "islemler",
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
          email: "korkac@kackor.com",
        },
        {
          carInfo: "Ford Focus 1.6 TDI",
          modelYear: 2009,
          chassisNo: "AKDFJKDSIDK4444KSJKSJ",
          partName: "Krank Mili",
          name: "Serkan",
          surName: "Korkaç",
          phone: "05340303000",
          email: "korkac@kackor.com",
        },
        {
          carInfo: "Ford Focus 1.6 TDI",
          modelYear: 2009,
          chassisNo: "AKDFJKDSIDK4444KSJKSJ",
          partName: "Krank Mili",
          name: "Serkan",
          surName: "Korkaç",
          phone: "05340303000",
          email: "korkac@kackor.com",
        },
      ],
      selectMode: "multi",
      selected: [],
      status: null,
    };
  },
  methods: {
    onRowSelected(items) {
      this.selected = items;
    },
  },
};
</script>