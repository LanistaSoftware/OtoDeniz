<template>
  <b-row class="m-0 px-5 py-3 w-100">
    <b-col class="text-left p-0 m-0">
      <slot />
    </b-col>
    <b-col class="text-right p-0 m-0">
      <div class="search-container position-relative">
        <b-form-input v-model="search" placeholder="Ara.."></b-form-input>
        <b-button variant="primary" class="position-absolute" style="top:0; right:0;">
          <b-icon-search></b-icon-search>
        </b-button>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Operations",
  data() {
    return {
      search: null,
    };
  },
  props: {
    buttons: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
</style>