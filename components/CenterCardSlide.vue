<template>
<no-ssr>
  <carousel-3d class="center-card-carousel" :border="0" :perspective="0" :height="300" :width="300" :space="280" :display="3">
    <slide class="center-card-slide" v-for="(item, index) in cards" :key="index" :index="index">
        <center-card :img="item.img" :title="item.title">{{item.content}}</center-card>
    </slide>
  </carousel-3d>
</no-ssr>
</template>
<script>

import { Carousel3d, Slide } from 'vue-carousel-3d';
 export default {
    components: {
    Carousel3d,
    Slide
  },
  data() {
    return {
      cards: [
        {
          title: "Bölgenin en geniş yedek parça ağı",
          content:
            " Van ve çevre iller bazında mevcut en geniş yedek parça ağı",
          img: "1.svg"
        },
        {
          title: "Bölgenin en geniş yedek parça ağı",
          content:
            " Van ve çevre iller bazında mevcut en geniş yedek parça ağı",
          img: "1.svg"
        },
        {
          title: "Bölgenin en geniş yedek parça ağı",
          content:
            " Van ve çevre iller bazında mevcut en geniş yedek parça ağı",
          img: "1.svg"
        },
        {
          title: "Bölgenin en geniş yedek parça ağı",
          content:
            " Van ve çevre iller bazında mevcut en geniş yedek parça ağı",
          img: "1.svg"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.center-card-carousel {
  padding: 1rem;
}
.center-card-slide {
  background: none !important;
}
</style>
