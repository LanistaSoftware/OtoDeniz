<template>
  <div class="mobile-header-container bg-yellow">
    <mobile-menu :show="show" @show="emitMenu($event)" />
    <div class="mobile-header">
      <div class="mobile-header-top">
        <div>
          <img src="/grid.svg" alt="" srcset="" @click="show = true" />
        </div>
        <div>
          <img src="/oto_deniz_logo.svg" alt="" srcset="" />
        </div>
        <div>
          <a href="https://islem-takip.otodeniz.com.tr">
                      <img src="/users.svg" alt="" srcset="" />

          </a>
        </div>
      </div>
      <div class="mobile-header-bottom">
        <no-ssr>
        <logo-slide />
        </no-ssr>      
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    emitMenu(e) {
      this.show = e;
    }
  }
};
</script>
<style lang="less" scoped>
.mobile-header {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "top" "bottom";
  width: 100%;
}
.mobile-header-top {
  grid-area: top;
  display: grid;
  margin: 1rem 3rem;
  padding: 1rem 0rem;
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
  }
  div:nth-child(3) {
    justify-self: right;
    align-self: center;
  }
  div:nth-child(2) {
    align-self: center;
    display: flex;
    justify-content: center;
    img {
      width: 50%;
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
