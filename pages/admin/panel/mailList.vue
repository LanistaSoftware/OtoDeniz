<template>
  <div class="mail-list w-100" id="mail">
    <Operations>
      <slot>
        <export-excel
          :data="maillist"
          :fields="json_fields"
          worksheet="Mail Listesi"
          name="mail-list.xls"
        >
          <b-button variant="success">
            İndir
            <b-icon-download class="ml-2"></b-icon-download>
          </b-button>
        </export-excel>
      </slot>
    </Operations>
    <b-row class="m-0 px-5 d-flex justify-content-center product-container">
      <b-table responsive striped hover :items="maillist" :fields="fields">
        <template v-slot:cell(islemler)="row">
          <div class="text-right w-100">
            <b-button
              variant="danger"
              size="sm"
              class="mr-2"
              @click="deleteMail(row.item.key)"
            >
              <b-icon-trash></b-icon-trash>
            </b-button>
          </div>
        </template>
      </b-table>
    </b-row>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "mailList",
  computed: {
    ...mapState({
      maillist: "List"
    })
  },
  methods: {
    ...mapActions({
      getAllList: "getAllList",
      deleteList: "deleteList"
    }),
    deleteMail(id) {
      this.deleteList(id).then(() => {
        this.getAllList();
      });
    }
  },
  created() {
    this.getAllList();
  },
  data() {
    return {
      json_fields: {
        Email: 'item.mail',
        Email: 'item.mail'
      },
      fields: [
        {
          key: "item.mail",
          label: "E-mail"
        },
        {
          key: "islemler",
          class: "text-right"
        }
      ]
    };
  }
};
</script>
