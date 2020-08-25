<template>
  <div class="product-card d_shaodw">
    <div
      class="product-card-image"
      :style="{ 'background-image': `url(${prewImage})` }"
    />
    <div class="product-hover-body">
      <div>
        <h5>Daha fazla bilgi almak için</h5>
      </div>
      <div>
        <d-button
          phone
          bgVariant="bg-blue"
          class="button"
          textVariant="text-white"
          >{{ buttontext }}</d-button
        >
      </div>
    </div>
    <div class="product-card-body">
      <div class="body-title">
        <h5 class="f_regular">{{ title }}</h5>
      </div>
      <div class="body-subtitle">
        <h5>{{ subtitle }}</h5>
      </div>
      <div class="body-description">
        <h5 class="desc-title">{{ bodytext }}</h5>
        <d-button
          phone
          class="body-button button"
          bgVariant="bg-blue"
          textVariant="text-white"
          >{{ buttontext }}</d-button
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      prewImage: null
    };
  },
  props: {
    img: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    subtitle: {
      type: String,
      default: null
    },
    bodytext: {
      type: String,
      default: null
    },
    buttontext: {
      type: String,
      default: null
    }
  },
  mounted() {
    this.getimg(this.img);
  },
  methods: {
    async getimg(img) {
      try {
          let ref = await this.$fireStorage.ref().child(img);
          const url = await ref.getDownloadURL();
          this.prewImage = url;
      } catch (error) {
        console.log(error)
      }
    }
  }
};
</script>
<style lang="less" scoped>
.product-card {
  margin: 1rem;
  display: grid;
  grid-template-rows: 0.6fr 1fr;
  grid-template-areas: "product-card-image" "product-card-body";
  width: 14.4rem;
  height: 16rem;
  background-color: @white;
  border-radius: 1em;
  position: relative;
  cursor: pointer;
  &:hover {
    grid-template-areas: "product-card-image" "product-card-image";
    .product-card-image {
      display: grid;
      animation-name: imageground;
      border-radius: 1em;
      animation-duration: 0.7s;
      -webkit-filter: blur(0.2px) brightness(0.4);
      -moz-filter: blur(0.2px) brightness(0.4);
      -ms-filter: blur(0.2px) brightness(0.4);
      -o-filter: blur(0.2px) brightness(0.4);
      filter: blur(0.2px) brightness(0.4);
    }
    .product-card-body {
      display: none;
    }
    .product-hover-body {
      display: grid;
      padding: 1rem;
      text-align: center;
      justify-self: center;
      align-self: center;
      .button {
        width: 100%;
        margin-top: 1rem;
      }
      h5 {
        color: @white;
      }
    }
  }
  &:not(:hover) {
    .product-card-image {
      animation-name: imageback;
      animation-duration: 0.7s;
    }
  }
}

@keyframes imageground {
  0% {
    height: 70%;
  }
  100% {
    height: 100%;
  }
}
@keyframes imageback {
  0% {
    height: 200%;
  }
  25% {
    -webkit-filter: blur(0.1px) brightness(0.3);
    -moz-filter: blur(0.1px) brightness(0.3);
    -ms-filter: blur(0.1px) brightness(0.3);
    -o-filter: blur(0.1px) brightness(0.3);
    filter: blur(0.1px) brightness(0.3);
  }
  50% {
    -webkit-filter: blur(0.1px) brightness(0.2);
    -moz-filter: blur(0.1px) brightness(0.2);
    -ms-filter: blur(0.1px) brightness(0.2);
    -o-filter: blur(0.1px) brightness(0.2);
    filter: blur(0.1px) brightness(0.2);
  }
  100% {
    height: 100%;
    -webkit-filter: none;
    -moz-filter: none;
    -ms-filter: none;
    -o-filter: none;
    filter: none;
  }
}
.product-card-image {
  grid-area: product-card-image;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
  img {
    width: 100%;
  }
}
.product-hover-body {
  display: none;
  position: absolute;
}
.product-card-body {
  display: grid;
  grid-area: product-card-body;
  width: 100%;
  height: 100%;
  grid-template-areas: "body-title" "body-subtitle" "body-description";
  justify-items: center;
}
.body-title {
  grid-area: body-title;
  margin-top: 1rem;
  h5 {
    color: @drop;
  }
}
.body-subtitle {
  grid-area: body-subtitle;
  h5 {
    color: @blue;
  }
}
.body-description {
  grid-area: body-description;
  display: grid;
  text-align: center;
  padding: 1rem;
  width: 100%;
  justify-items: center;
  h5 {
    width: 90%;
  }
}
.body-button {
  display: none;
}
@media @xs {
  .body-title {
    display: none;
  }
  .body-button {
    display: block;
    width: 80%;
    padding: 5px !important;
  }
  .product-card-body {
    grid-template-rows: none;
  }
  .body-description {
    h5 {
      color: @drop;
    }
  }
}
@media @sm {
  .body-title {
    display: none;
  }
  .body-button {
    display: block;
    width: 80%;
    padding: 5px !important;
  }
  .product-card-body {
    grid-template-rows: none;
  }
  .body-description {
    h5 {
      color: @drop;
    }
  }
}
@media @xsmobile {
  .product-card {
    width: 80%;
    height: 260px;
  }
}
</style>
