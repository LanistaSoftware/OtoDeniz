<template>
  <div class="content-card">
    <div class="content-container">
      <div class="card-title">
        <h1 class="f_bold">Bölgedeki en iyi yedek parçaları keşfedin</h1>
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
  padding: 1rem 0;
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
  h1{
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
@media @sm {
  .content-card {
  grid-template-columns:1fr;
  grid-template-areas: "image-container" "content-container ";
}

.content-container {
  text-align: center;
}
.card-title {
  display: flex;
  justify-content: center;
  align-items: center;  h2{
    width: 100%;
  }
}
.card-button {
  grid-area: card-button;
  display:grid;
  width: 100%;
  align-content: flex-end;
  button {
    width: 100%;
  }
}
}
@media @xs {
  .content-card {
  grid-template-columns:1fr;
  grid-template-areas: "image-container" "content-container ";
}

.content-container {
  text-align: center;
}
.card-title {
  display: flex;
  justify-content: center;
  align-items: center;  h2{
    width: 100%;
  }
}
.card-button {
  grid-area: card-button;
  display:grid;
  width: 100%;
  align-content: flex-end;
  button {
    width: 100%;
  }
}
}
@media @md {
  .content-card {
  grid-template-columns:1fr;
  grid-template-areas: "image-container" "content-container ";
}

.content-container {
  text-align: center;
}
.card-title {
  display: flex;
  justify-content: center;
  align-items: center;
  h1{
    width: 100%;
  }
}
.card-button {
  grid-area: card-button;
  display:grid;
  width: 100%;
  align-content: flex-end;
  button {
    width: 100%;
  }
}
}
</style>
