<template>
  <div class="mobile-header-container bg-yellow">
    <div class="mobile-header">
      <div class="mobile-header-top">
        <div>
          <img src="/users.svg" alt="" srcset="" />
        </div>
        <div>
          <img src="/oto_deniz_logo.svg" alt="" srcset="" />
        </div>
        <div>
          <img src="/users.svg" alt="" srcset="" />
        </div>
      </div>
      <div class="mobile-header-bottom">
        <logo-slide />
      </div>
    </div>
  </div>
</template>
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
  border-top: 0.3px solid rgba(216, 178, 54, 0.4);
  display: grid;
  align-self: center;
}
</style>
