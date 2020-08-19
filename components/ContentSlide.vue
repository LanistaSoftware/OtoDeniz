<template>
  <carousel-1d class="d-carousel" :perPage="1">
    <slide-1d v-for="item in cards" :key="item">
      <content-card
        :title="item.title"
        :buttontext="item.buttontext"
        :img="item.img"
        reverse
        >{{item.content}}</content-card
      >
    </slide-1d>
  </carousel-1d>
</template>
<script>
export default {

  props:{
    cards: {
      type:Array,
      default: [
        {
          title: 'Bölgedeki en iyi yedek parçaları keşfedin',
          buttontext: "Hemen arayın",
          img: '1.png',
          content :'Aradığınız bütün orijinal yedek parçaları en uygun fiyatlarla bölgenin en iyi yedek parça marketi Deniz Oto ve Yedek Parça da haftanın her günü bulabilirsiniz.'
        },
        {
          title: 'Bölgedeki en iyi yedek parçaları keşfedin',
          buttontext: "Hemen arayın",
          img: '1.png',
          content :'Aradığınız bütün orijinal yedek parçaları en uygun fiyatlarla bölgenin en iyi yedek parça marketi Deniz Oto ve Yedek Parça da haftanın her günü bulabilirsiniz.'
        },
        {
          title: 'Bölgedeki en iyi yedek parçaları keşfedin',
          buttontext: "Hemen arayın",
          img: '1.png',
          content :'Aradığınız bütün orijinal yedek parçaları en uygun fiyatlarla bölgenin en iyi yedek parça marketi Deniz Oto ve Yedek Parça da haftanın her günü bulabilirsiniz.'
        }
      ]
    }
  }
}
</script>
<style lang="less">
.d-carousel {
  padding: 1rem;
}
.VueCarousel-dot {
  width: 20px !important;
  height: 8px !important;
  color: @gray !important;
  background-color: @gray !important;
  border-radius: 1.5em !important;
}
&[aria-selected="true"] {
  width: 40px !important;
  height: 8px !important;
  color: @drop !important;
  background-color: @drop !important;
  border-radius: 1.5em !important;
}
</style>
