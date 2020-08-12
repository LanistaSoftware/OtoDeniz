<template>
  <div class="center-card">
    <div class="center-card-image">
      <img src="1.svg" alt="card_img" />
    </div>
    <div class="center-card-content">
      <div class="content-header">
        <h2 class="f_light">Bölgenin en geniş yedek parça ağı</h2>
      </div>
      <div class="content-text">
        <p class="f_regular">
          Van ve çevre iller bazında mevcut en geniş yedek parça ağı
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.center-card {
  display: grid;
  text-align: center;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  grid-template-areas: "card-image" "content";
}
.center-card-content {
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "content-header" "content-text";
  grid-area: content;
}
.center-card-image {
  grid-area: card-image;
  display: grid;

  justify-content: center;
  align-content: center;
  img {
    width: 100%;
    height: auto;
  }
}
.content-header {
  grid-area: content-header;
  display: flex;
  justify-content: center;
  h2 {
    width: 20%;
  }
}
.content-text {
  grid-area: content-text;
  text-align: center;
  color: @drop;
  display: flex;
  justify-content: center;
  p {
    width: 30%;
  }
}
@media @xs {
  .content-header {
    display: none;
  }
  .content-text {
    grid-area: content-text;
    text-align: center;
    color: @drop;
    display: flex;
    justify-content: center;
    p {
      width: 70%;
    }
  }
}
@media @sm {
  .content-header {
    display: none;
  }
  .content-text {
    grid-area: content-text;
    text-align: center;
    color: @drop;
    display: flex;
    justify-content: center;
    p {
      width: 70%;
    }
  }
}
</style>
