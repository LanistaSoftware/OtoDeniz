<template>
  <div class="mobile-header-container bg-yellow">
    <mobile-menu :show="show" @show="emitMenu($event)" />
    <div class="mobile-header">
      <div class="mobile-header-top">
        <div>
          <img src="/grid.svg" alt="otodeniz"  @click="show = true" />
        </div>
        <div>
          <img :src="prewImage" alt="oto deniz"  />
        </div>
        <div>
          <a href="https://islem-takip.otodeniz.com.tr">
            <img src="/users.svg" alt="otodeniz"/>
          </a>
        </div>
      </div>
      <div class="mobile-header-bottom">
        <client-only>
          <logo-slide />
        </client-only>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      show: false,
      prewImage:'/'
    };
  },
  computed: {
    ...mapState({
      Info: "Info"
    })
  },
  async created() {
    await this.getInfo().then(async () => {
      await this.getimg();
    });
  },
  methods: {
    ...mapActions({
      getInfo: "getInfo"
    }),
    emitMenu(e) {
      this.show = e;
    },
    async getimg() {
      try {
        let ref = await this.$fireStorage.ref().child(this.Info.logo);
        const url = await ref.getDownloadURL();
        this.prewImage = url;
      } catch (error) {}
    }
  }
};
</script>
<style lang="less" scoped>
.mobile-header {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas: "top" "bottom";
  width: 100%;
}
.mobile-header-top {
  grid-area: top;
  display: grid;
  margin: 1rem 3rem;
  padding: 0rem;
  align-self: start;
  grid-template-columns: 1fr 1fr 1fr;
  img {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div:nth-child(1) {
    justify-self: left;
    align-self: center;
    img {
      max-width: 60px;
    }
  }
  div:nth-child(3) {
    justify-self: right;
    align-self: center;
    img {
      max-width: 60px;
    }
  }
  div:nth-child(2) {
    align-self: center;
    display: flex;
    justify-content: center;
    img {
      min-width: 80px;
    }
  }
}
.mobile-header-bottom {
  grid-area: bottom;
  overflow: hidden;
  padding: 1rem;
  border-top: 0.3px solid rgba(216, 178, 54, 0.4);
  display: grid;
  align-self: center;
}
</style>
