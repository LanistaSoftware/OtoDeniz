<template>
  <tr>
    <td class="font-weight-bolder">{{editTag}}</td>
    <td v-if="!editState && !logo">{{editField}}</td>
    <td v-if="editState && !logo">
      <b-form-input v-model="editField"></b-form-input>
    </td>
    <td v-if="!editState && logo">
      <b-img :src="'/'+editField" width="100%" fluid alt="Responsive image"></b-img>
    </td>
    <td  v-if="editState && logo">
      <b-form-file v-model="editField" class="mt-3" plain></b-form-file>
    </td>
    <td class="text-center">
      <b-button v-if="!editState" size="sm" @click="editState=!editState" variant="warning">
        <b-icon-pencil-square />
      </b-button>
      <b-button v-else size="sm" variant="success">
        <b-icon-arrow-up-circle-fill />
      </b-button>
      <b-button v-if="editState" @click="editState=!editState" size="sm" variant="danger">
        <b-icon-x />
      </b-button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "EditInfo",
  props: {
    editTag: {
      type: String,
      default: null,
    },
    editField: {
      type: String,
      default: null,
    },
    logo: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      editState: false,
    };
  },
};
</script>

<style>
</style>