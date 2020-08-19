<template>
  <div class="mail-list w-100" id="mail">
    <Operations>
      <slot>
        <b-button variant="success">
          İndir
          <b-icon-download class="ml-2"></b-icon-download>
        </b-button>
      </slot>
    </Operations>
    <b-row class="m-0 px-5 d-flex justify-content-center product-container">
      <b-table responsive striped hover :items="items" :fields="fields">
        <template v-slot:cell(islemler)>
          <div class="text-right w-100">
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
  name: "mailList",
  data() {
    return {
      fields: ["mail", "islemler"],
      items: [
        {
          mail: "korkac@kackor.com",
        },
        {
          mail: "korkac@kackor.com",
        },
        {
          mail: "korkac@kackor.com",
        },
        {
          mail: "korkac@kackor.com",
        },
      ],
    };
  },
};
</script>
