<template>
  <b-img width="240" height="135" class="rounded-0" :src="url" :alt="imgurl"/>
</template>
<script>
export default {
  props: ["imgurl"],
  data() {
    return {
      url: null
    };
  },
  methods: {
    async getimg() {
      try {
        let ref = this.$fireStorage.ref().child(this.imgurl);
        const url = await ref.getDownloadURL();
        this.url = url;
        return url;
      } catch (error) {
        return this.url;
      }
    }
  },
  created(){
      this.getimg()
  },
};
</script>