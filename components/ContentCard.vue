<template>
  <div class="grid-container">
    <div class="left-container">
      <div class="title">
        <h2>Bölgedeki en iyi yedek parçaları keşfedin</h2>
      </div>
      <div class="card-content">
        <p>
          Aradığınız bütün orijinal yedek parçaları en uygun fiyatlarla bölgenin
          en iyi yedek parça marketi Deniz Oto ve Yedek Parça'da haftanın her
          günü bulabilirsiniz.
        </p>
      </div>
      <div class="card-footer"><d-button bgVariant="bg-yellow" textVariant="text-dark">Hemen Arayın</d-button></div>
    </div>
    <div class="img-container"><img src="/1.png" alt="" /></div>
  </div>
</template>
<style lang="less">
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 1px 1px;
  grid-template-areas: "left-container img-container";
}

.left-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.4fr 2.4fr 0.2fr;
  gap: 1px 1px;
  grid-template-areas: "title" "card-content" "card-footer";
  grid-area: left-container;
}

.title {
  grid-area: title;
}

.card-content {
  grid-area: card-content;
}

.card-footer {
  grid-area: card-footer;
}

.img-container {
  grid-area: img-container;
  img{
      width: 20%;
  }
}
</style>
