<template>
  <div>
    <d-header></d-header>
    <section class="bg-cream">
      <div class="container">
        <content-slide />
      </div>
    </section>
    <section class="bg-white service-section container">
      <div class="section-header">
        <h3>
          Hizmet Anlayışımız
        </h3>
      </div>
      <div class="service-section-content">
        <center-card
          v-for="(item, i) in centercards"
          :key="i"
          :img="item.img"
          :title="item.title"
        >
          {{ item.content }}</center-card
        >
      </div>
    </section>
    <section class="product-section bg-cream">
      <div class="container">
        <div class="section-header">
          <h3>
            Öne Çıkan Ürünler
          </h3>
        </div>
        <div class="product-search ">
          <d-search class="d_shaodw" />
        </div>
        <div class="service-section-product">
          <product-card
            v-for="(item, i) in prodcutcards"
            :key="i"
            :img="item.img"
            :title="item.title"
            :subtitle="item.subtitle"
            :bodytext="item.bodytext"
            :buttontext="item.buttontext"
            v-show="i <= 7 || all == true"
          >
            {{ item.content }}</product-card
          >
        </div>
      </div>
      <div class="icon-chevron text-blue" @click="all = !all">
        <span class="text-blue">
          Tümünü Göster
        </span>
        <img v-if="!all" src="/chevron-down.svg" alt="" srcset="" />
        <img v-else src="/chevron-up.svg" alt="" srcset="" />
      </div>
    </section>
    <section class="container">
      <content-card
        title="Deniz Oto ve Yedek Parça Kimdir ?"
        buttontext="Hemen Arayın"
        img="section3.png"
        >1985 Yılında Van Oto Sanayi'de kurulmuş olan Oto Deniz ve Yedek parça,
        kurulduğu günden bu güne müşterilerine daima dürüstlük ilkesiyle
        yaklaşmıştır. İlk günden itibaren hedefi bölgenin en büyük yedek parça
        sağlayıcısı olmak olan Deniz Oto ve Yedek Parça, bu hedefine emin
        adımlarla ilerlemektedir. Van ve çevre illerde en fazla bilinen yedek
        parça firması konumunda olan Deniz Oto ve Yedek Parça temsilciliğini
        yaptığı bütün markalarda en kaliteli ürünü müşterilerine sunmaktadır.
        Ülke çapında da geniş bir parça ağına sahip olan firma, ihtiyaç
        duyulması anında bölgede zor bulunan parçaları bile kolaylıkla tedarik
        edip müşterilerine sunabilmektedir. Hizmet verdiği kurumlar arasında
        devlete bağlı kamu kuruluşları da bulunan Deniz Oto ve Yedek Parça
        teknolojiyi de etkili şekilde kullanan kurumsallık adımlarını atmaya
        başlamış Van'ın önde gelen firmalarından birisidir.</content-card
      >
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      all: false,
      prodcutcards: [
        {
          title: "MOTOR PARÇALARI",
          subtitle: "Krank Mili",
          bodytext: "Chevrolet Cruze 2013 1.6 Benzinli",
          buttontext: "Hemen Arayın",
          img: "2.png"
        },
        {
          title: "MOTOR PARÇALARI",
          subtitle: "Krank Mili",
          bodytext: "Chevrolet Cruze 2013 1.6 Benzinli",
          buttontext: "Hemen Arayın",
          img: "2.png"
        },
        {
          title: "MOTOR PARÇALARI",
          subtitle: "Krank Mili",
          bodytext: "Chevrolet Cruze 2013 1.6 Benzinli",
          buttontext: "Hemen Arayın",
          img: "2.png"
        },
        {
          title: "MOTOR PARÇALARI",
          subtitle: "Krank Mili",
          bodytext: "Chevrolet Cruze 2013 1.6 Benzinli",
          buttontext: "Hemen Arayın",
          img: "2.png"
        },
        {
          title: "MOTOR PARÇALARI",
          subtitle: "Krank Mili",
          bodytext: "Chevrolet Cruze 2013 1.6 Benzinli",
          buttontext: "Hemen Arayın",
          img: "2.png"
        },
        {
          title: "MOTOR PARÇALARI",
          subtitle: "Krank Mili",
          bodytext: "Chevrolet Cruze 2013 1.6 Benzinli",
          buttontext: "Hemen Arayın",
          img: "2.png"
        },
        {
          title: "MOTOR PARÇALARI",
          subtitle: "Krank Mili",
          bodytext: "Chevrolet Cruze 2013 1.6 Benzinli",
          buttontext: "Hemen Arayın",
          img: "2.png"
        },
        {
          title: "MOTOR PARÇALARI",
          subtitle: "Krank Mili",
          bodytext: "Chevrolet Cruze 2013 1.6 Benzinli",
          buttontext: "Hemen Arayın",
          img: "2.png"
        },
        {
          title: "MOTOR PARÇALARI",
          subtitle: "Krank Mili",
          bodytext: "Chevrolet Cruze 2013 1.6 Benzinli",
          buttontext: "Hemen Arayın",
          img: "2.png"
        },
        {
          title: "MOTOR PARÇALARI",
          subtitle: "Krank Mili",
          bodytext: "Chevrolet Cruze 2013 1.6 Benzinli",
          buttontext: "Hemen Arayın",
          img: "2.png"
        }
      ],
      centercards: [
        {
          title: "Bölgenin en geniş yedek parça ağı",
          content:
            "Van ve çevre iller bazında mevcut en geniş yedek parça ağı ",
          img: "1.svg"
        },
        {
          title: "Bölgenin en geniş yedek parça ağı",
          content:
            "Van ve çevre iller bazında mevcut en geniş yedek parça ağı ",
          img: "1.svg"
        },
        {
          title: "Bölgenin en geniş yedek parça ağı",
          content:
            "Van ve çevre iller bazında mevcut en geniş yedek parça ağı ",
          img: "1.svg"
        },
        {
          title: "Bölgenin en geniş yedek parça ağı",
          content:
            "Van ve çevre iller bazında mevcut en geniş yedek parça ağı ",
          img: "1.svg"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.section-header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
}
.service-section-content {
  display: grid;
  padding: 5rem 0px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.service-section-product {
  display: grid;
  padding: 5rem 0px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.product-search {
  display: flex;
  justify-content: center;
  padding-top: 1rem;
}
.icon-chevron {
  display: flex;
  cursor: pointer;
  justify-content: center;
  color: @blue;

  svg {
    color: @blue;
  }
}
</style>
<style>
.container {
  margin: 0 auto;
  width: 80% !important;
}
</style>
