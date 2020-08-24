<template>
  <carousel-1d class="d-carousel" :perPage="1">
    <slide-1d v-for="(item,i) in cards" :key="i">
      <content-card
        :title="item.title"
        :buttontext="item.buttontext"
        :img="item.img"
        :bgVariant="item.bgVariant"
        :textVariant="item.textVariant"
        :requests="item.requests"
        :mapClick="item.mapClick"
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
      required:false
    }
  }
}
</script>
<style lang="less">
.d-carousel {
  padding: 1rem;
  width: 100%;
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
