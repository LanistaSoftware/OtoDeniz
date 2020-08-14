<template>
<no-ssr>
  <carousel
    class="d-logo-carousel"
    :perPageCustom="[
      [768, 9],
      [1024, 11],
      [0, 6]
    ]"
    :paginationEnabled="false"
  >
    <slide class="d-logo-slide" v-for="(item,index) in logos" :key="index">
      <d-logo :img="item.img" />
      <h6 class="f_semibold">{{item.marka}}</h6>
    </slide>
  </carousel>
  </no-ssr>

</template>
<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
   components: {
    Carousel,
    Slide
  },
  data() {
    return {
      logos: [
        {
          marka: "Skoda",
          img: "Skoda.svg"
        },
        {
          marka: "Volkswagen",
          img: "Volkswagen.svg"
        },

        {
          marka: "Renault",
          img: "Renault.svg"
        },
        {
          marka: "Seat",
          img: "Seat.svg"
        },

        {
          marka: "Peugeot",
          img: "Peugeot.svg"
        },

        {
          marka: "Hyundai",
          img: "Hyundai.svg"
        },
        {
          marka: "Chevrolet",
          img: "Chevrolet.svg"
        },
        {
          marka: "Kia",
          img: "Kia.svg"
        },
        {
          marka: "Ford",
          img: "Ford.svg"
        },
        {
          marka: "Fiat",
          img: "Fiat.svg"
        },
        {
          marka: "Dacia",
          img: "Dacia.svg"
        },
        {
          marka: "Bmw",
          img: "Bmw.svg"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.d-logo-carousel {
  padding: 1rem;
}
.d-logo-slide {
  text-align: center;
  h6 {
      color: @htext;
  }
}
</style>
