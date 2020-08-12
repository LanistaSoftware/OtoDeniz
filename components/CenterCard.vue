<template>
  <div class="center-card">
    <div class="center-card-image">
      <img :src="img" alt="card_img" />
    </div>
    <div class="center-card-content">
      <div class="content-header">
        <h2 class="f_light">{{ title }}</h2>
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
  justify-content: center;
  align-content: center;
  img {
    width: 100%;
    height: auto;
  }
}
.content-header {
  grid-area: content-header;
  display: grid;
  justify-items: center;
  h2 {
    width: 20%;
  }
}
.content-text {
  grid-area: content-text;
  text-align: center;
  color: @drop;
  display: grid;
  justify-items: center;
  p {
    width: 30%;
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
