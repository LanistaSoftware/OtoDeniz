<template>
<client-only>

  <carousel-1d
    class="d-logo-carousel"
    :autoplay="true"
    :autoplayTimeout="1000"
    :loop="false"
    :perPageCustom="[
      [768, 9],
      [1024, 11],
      [0, 6]
    ]"
    :paginationEnabled="false"
  >
    <slide-1d class="d-logo-slide" v-for="(item, index) in logos" :key="index">
      <div class="slide-logo">
        <d-logo :img="item.img" />
      </div>
      <h6 class="f_semibold">{{ item.marka }}</h6>
    </slide-1d>
  </carousel-1d>
  </client-only>

</template>
<script>
export default {
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
.d-logo-slide {
  text-align: center;
  h6 {
    color: @htext;
  }
}
.slide-logo {
  width: auto;
  height: 3rem;
  padding: 5px;
}
</style>
