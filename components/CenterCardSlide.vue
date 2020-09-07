<template>
<client-only>
  <carousel-3d class="center-card-carousel" :border="0" :perspective="0" :height="300" :width="300" :space="280" :display="3">
    <slide-3d class="center-card-slide" v-for="(item, index) in cardsslide" :key="index" :index="index">
        <center-card :img="item.img" :title="item.title">{{item.content}}</center-card>
    </slide-3d>
  </carousel-3d>
</client-only>
</template>
<script>

 export default {
   props: {
     cardsslide: {
      type:Array,
      required:false  
     }
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
