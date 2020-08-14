<template>
  <carousel class="d-carousel" :perPage="1">
    <slide v-for="item in 3" :key="item">
      <content-card
        title="Bölgedeki en iyi yedek parçaları keşfedin"
        buttontext="Hemen arayın"
        img="1.png"
        >Aradığınız bütün orijinal yedek parçaları en uygun fiyatlarla bölgenin
        en iyi yedek parça marketi Deniz Oto ve Yedek Parça da haftanın her günü
        bulabilirsiniz.</content-card
      >
    </slide>
  </carousel>
</template>
<style lang="less">
.d-carousel{
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
