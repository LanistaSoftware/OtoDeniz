<template>
  <div class="center-card">
    <div class="center-card-image">
      <img :src="img" alt="card_img" />
    </div>
    <div class="center-card-content">
      <div class="content-header">
        <h5 class="f_bolder">{{ title }}</h5>
      </div>
      <div class="content-text">
        <p class="f_regular">
          <slot />
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    img: {
      type: String,
      default: null
    }
  }
};
</script>
<style lang="less" scoped>
.center-card {
  display: grid;
  text-align: center;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  align-content: center;
  grid-template-areas: "card-image" "content";
}
.center-card-content {
  grid-template-rows: 1fr 1fr;
  display: grid;
  grid-template-areas: "content-header" "content-text";
  grid-area: content;
}
.center-card-image {
  grid-area: card-image;
  display: grid;
  img {
    width: 50%;
    justify-self: center;
    height: auto;
  }
}
.content-header {
  grid-area: content-header;
  display: grid;
  justify-items: center;
  padding-top:0.8rem;
}
.content-text {
  grid-area: content-text;
  text-align: center;
  color: @drop;
  display: grid;
  justify-items: center;
  p {
    width: 80%;
    font-size: 0.8rem;
  }
}
@media @xs {
  .center-card-content {
    grid-template-rows: 1fr;
    grid-template-areas: "content-text";
  }
  .content-header {
    display: none;
  }
  .content-text {
    grid-area: content-text;
    text-align: center;
    color: @drop;
    display: grid;
    justify-items: center;
    p {
      width: 70%;
    }
  }
}
@media @sm {
  .center-card-content {
    grid-template-rows: 1fr;
    grid-template-areas: "content-text";
  }

  .content-header {
    display: none;
  }
  .content-text {
    grid-area: content-text;
    text-align: center;
    color: @drop;
    display: grid;
    justify-items: center;
    p {
      width: 70%;
    }
  }
}
</style>
