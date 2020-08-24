<template>
  <tr>
    <td class="font-weight-bolder">{{ editTag }}</td>
    <td v-if="!editState && !logo">{{ editField }}</td>
    <td v-if="editState && !logo">
      <b-form-input v-model="editField"></b-form-input>
    </td>
    <td v-if="!editState && logo">
      <b-img :src="prewImage" width="100%" fluid alt="Responsive image"></b-img>
    </td>
    <td v-if="editState && logo">
      <input class="mt-3" type="file" ref="file" @change="selectedFile" />
    </td>
    <td class="text-center">
      <b-button
        v-if="!editState"
        size="sm"
        @click="editState = !editState"
        variant="warning"
      >
        <b-icon-pencil-square />
      </b-button>
      <b-button v-else size="sm" variant="success" @click="update(editField)">
        <b-icon-arrow-up-circle-fill />
      </b-button>
      <b-button
        v-if="editState"
        @click="editState = !editState"
        size="sm"
        variant="danger"
      >
        <b-icon-x />
      </b-button>
    </td>
  </tr>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "EditInfo",
  props: {
    editTag: {
      type: String,
      default: null
    },
    editField: {
      type: String,
      default: null
    },
    editKey: {
      type: String,
      default: null
    },
    logo: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      file: null,
      prewImage: null,
      editState: false
    };
  },
  mounted() {
    if (this.logo) {
      this.getimg(this.editField);
    }
  },
  methods: {
    ...mapActions({
      updateInfo: "updateInfo",
      getInfo: "getInfo",
      addLogo: "addLogo"
    }),
    update(edit) {
      if (this.logo) {
        this.addLogo(this.file).then(() => {
          this.getInfo();
          this.editState = false;
        });
      } else {
        var form = {
          key: edit
        };
        form[this.editKey] = form["key"];
        delete form["key"];
        this.updateInfo(form).then(() => {
          this.getInfo();
          this.editState = false;
        });
      }
    },
    async getimg(img) {
      try {
        let ref = await this.$fireStorage.ref().child(img);
        const url = await ref.getDownloadURL();
        this.prewImage = url;
      } catch (error) {
        console.log(error);
      }
    },
    selectedFile() {
      var file = "";
      file = this.$refs.file.files[0];
      console.log(this.$refs.file);
      this.file = file;
      // this.galery.image.append("file", file);
      if (!file || file.type.indexOf("image/") !== 0) return;

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = evt => {
        let img = new Image();
        img.onload = () => {};
        this.prewImage = evt.target.result;
        img.src = evt.target.result;
      };
      reader.onerror = evt => {
        alert(evt);
      };
    }
  }
};
</script>

<style></style>
