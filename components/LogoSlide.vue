<template>
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
      <span class="slide-text"><h6 class="f_semibold">{{ item.marka }}</h6></span>
    </slide-1d>
  </carousel-1d>
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
          marka: "Hyundai",
          img: "Hyundai.svg"
        },
        {
          marka: "Renault",
          img: "Renault.svg"
        },
        {
          marka: "Chevrolet",
          img: "Chevrolet.svg"
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
          marka: "Kia",
          img: "Kia.svg"
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
    display: grid;
    grid-template-rows: auto auto;
    justify-items: center;
    align-content: center;

  .slide-logo {
    display: flex;
    justify-items: center;
    width: 55px;
    height: 40px;
  }

  .slide-text {
    display: flex;
    padding-top: 8px;
    text-align: center;
    h6 {
      color: @htext;
      font-weight: 500;
    }
  }
}

</style>
