<template>
  <div class="content-card">
    <div class="content-container">
      <div class="card-title">
        <h3 class="f_bold">Bölgedeki en iyi yedek parçaları keşfedin</h3>
      </div>
      <div class="card-content">
        <p class="f_regular">
          Aradığınız bütün orijinal yedek parçaları en uygun fiyatlarla bölgenin
          en iyi yedek parça marketi Deniz Oto ve Yedek Parça'da haftanın her
          günü bulabilirsiniz.
        </p>
      </div>
      <div class="card-button">
        <d-button class="button" bgVariant="bg-yellow" textVariant="text-dark">Hemen Arayın</d-button>
      </div>
    </div>
    <div class="image-container"><img src="/1.png" alt="card_img" /></div>
  </div>
</template>
<style lang="less">
.content-card {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "content-container image-container";
  justify-content: center;
  align-content: center;
}

.content-container {
  grid-area: content-container;
  padding: 34px 0;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 0.5fr;
  grid-template-areas:
  "card-title"
  "card-content"
  "card-button"
  ;
}

.card-title {
  grid-area: card-title;
  display: grid;
  width: 100%;
  justify-content: start;
  align-content: center;
  h3{
    width: 80%;
  }
}

.card-content {
  grid-area: card-content;
  color:@drop;
  display: grid;
  width: 100%;
  justify-content: center;
  align-content: center;
}

.card-button {
  grid-area: card-button;
  display:grid;
  width: 100%;
  align-content: flex-end;
  button {
    width: 50%;
  }
}

.image-container {
  grid-area: image-container;
  display: grid;
  width: 100%;
  justify-content: center;
  align-content: center;

  img {
    width: 100%;
    height: auto;
  }
}

  // .content-card {
  //   display: grid;
  //   padding: 1rem;
  //   grid-template-columns: 1fr 1fr;
  //   grid-template-areas: "content-container img-container";
  // }

  // .content-container {
  //   display: grid;
  //   grid-template-rows: 1fr 1fr 0.5fr;
  //   grid-template-areas: "title""card-content""card-button";
  //   grid-area: left-container;
  // }
  // .card-button {
  //   display: grid;
  //   grid-area: card-button;
  // }
  // .button {
  //   width: 50%;
  //   margin-top: 0.5rem;
  // }

  // .title {
  //   grid-area: title;
  //   word-spacing: 2px;
  //   text-align: left;
  //   padding: 0.5rem;
  //   width: 100%;
  //   line-break: strict;

  // }

  // .card-content {
  //   grid-area: card-content;
  //   text-align: left;
  //   word-spacing: 2px;
  //   padding: 0.5rem;
  //   font-weight: lighter;

  // }

  // .img-container {
  //   grid-area: img-container;

  //   img {
  //     width: 80%;
  //     height: auto;
  //   }
  // }

</style>
