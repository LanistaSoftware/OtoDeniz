<template>
  <div>
    <client-only>
      <d-header id="desktop-header" />
      <mobile-header id="mobile-header" />
    </client-only>

    <section class="bg-cream" id="anasayfa">
      <div class="d-container">
        <content-slide class="home-slide" :cards="contentslidecards" />
      </div>
    </section>
    <section class="bg-white service-section d-container" id="section-about">
      <div class="section-header">
        <h3>
          Hizmet Anlayışımız
        </h3>
      </div>
      <div class="service-section-content" id="service-desktop">
        <center-card
          v-for="(item, i) in centercards"
          :key="i"
          :img="item.img"
          :title="item.title"
        >
          <p class="f_regular">
            {{
              item.content
                .split(" ", Math.ceil(item.content.split(" ").length / 2))
                .join(" ")
            }}
            {{
              item.content
                .split(" ", Math.ceil(item.content.split(" ").length))
                .slice(
                  Math.ceil(item.content.split(" ").length / 2),
                  Math.ceil(item.content.split(" ").length)
                )
                .join(" ")
            }}
          </p>
        </center-card>
      </div>
      <div class="service-section-content" id="service-mobile">
        <client-only>
          <center-card-slide :cardsslide="centercards" />
        </client-only>
      </div>
    </section>
    <section class="product-section bg-cream">
      <div class="d-container">
        <div class="section-header">
          <h3>
            Öne Çıkan Ürünler
          </h3>
        </div>
        <div class="product-search ">
          <d-search class="d_shaodw" @pr="searchValue($event)" />
        </div>
        <div class="service-section-product" id="ürünler">
          <product-card
            v-for="(product, i) in pageproduct"
            :key="product.key"
            :img="product.item.file"
            :title="product.item.categories"
            :subtitle="product.item.name"
            :bodytext="product.item.desc"
            buttontext="Hemen Arayın"
            v-show="i <= 7 || all == true"
          />
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
    <section id="hakkımızda" class="d-container section-about">
      <content-card
        title="Oto Deniz ve Yedek Parça Kimdir ?"
        buttontext="Hemen Arayın"
        png="section3.png"
        top
        >1985 Yılında Van Oto Sanayi'de kurulmuş olan Oto Deniz ve Yedek parça,
        kurulduğu günden bu güne müşterilerine daima dürüstlük ilkesiyle
        yaklaşmıştır. İlk günden itibaren hedefi bölgenin en büyük yedek parça
        sağlayıcısı olmak olan Oto Deniz ve Yedek Parça, bu hedefine emin
        adımlarla ilerlemektedir. Van ve çevre illerde en fazla bilinen yedek
        parça firması konumunda olan Oto Deniz ve Yedek Parça temsilciliğini
        yaptığı bütün markalarda en kaliteli ürünü müşterilerine sunmaktadır.
        Ülke çapında da geniş bir parça ağına sahip olan firma, ihtiyaç
        duyulması anında bölgede zor bulunan parçaları bile kolaylıkla tedarik
        edip müşterilerine sunabilmektedir. Hizmet verdiği kurumlar arasında
        devlete bağlı kamu kuruluşları da bulunan Oto Deniz ve Yedek Parça
        teknolojiyi de etkili şekilde kullanan kurumsallık adımlarını atmaya
        başlamış Van'ın önde gelen firmalarından birisidir.</content-card
      >
    </section>
    <section class="bg-cream section-form" id="iletişim">
      <div class="d-container">
        <div class="section-header">
          <div>
            <h3>
              Parça İstek
            </h3>
            <p>
              Aradığınız ve bulamadığınız bir parça mı var ? Bize parçayı
              söyleyin, biz sizin yerinize araştırıp bulalım ve en iyi teklifi
              verelim.
            </p>
          </div>
        </div>
        <div>
          <d-form />
        </div>
      </div>
    </section>
    <section class="d-container" id="map">
      <div class="map-section">
        <content-card
          title="Bizi yerimizde ziyaret edin"
          buttontext="Haritalar ile açın"
          map
          reverse
          top
          >Haritaları kullanarak şubemize uğrayabilir ve bütün yedek parça
          ihtiyaçlarınız için uzman kadromuzdan ayrıntılı bilgi alabilirsiniz.
          Oto Deniz ve Yedek Parça, Seyrantepe, 10/32 Sk. No:3 Van Oto Sanayi'de
          tanışmak ve bir çay ikram etmek için sizleri bekliyor.
        </content-card>
      </div>
    </section>
    <d-footer id="desktop-footer" />
    <mobile-footer id="mobile-footer" />
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      all: false,
      pageproduct: [],
      centercards: [
        {
          title: "Bölgenin en geniş yedek parça ağı",
          content:
            "Van ve çevre iller bazında mevcut en geniş yedek parça ağı ",
          img: "1.svg"
        },
        {
          title: "Uzman kadro ile hızlı ve kalıcı çözüm",
          content:
            "Otuz yılı aşkın tecrübe ile anında hızlı ve en etkili çözüm ",
          img: "2.svg"
        },
        {
          title: "Orijinal parçalarla güvenli alışveriş",
          content: "Orjinal ve güvenilir parçalarla garantili hizmet anlayışı ",
          img: "3.svg"
        },
        {
          title: "Kredi Kartı ile Ödeme kolaylığı",
          content: "Kredi kartı ve mail order ile kolay ödeme seçenekleri ",
          img: "4.svg"
        }
      ],
      contentslidecards: [
        {
          title: "Bölgedeki en iyi yedek parçaları keşfedin",
          buttontext: "Hemen arayın",
          webp: "s1.webp",
          png: "Slider1.png",
          content:
            "Aradığınız bütün orijinal yedek parçaları en uygun fiyatlarla bölgenin en iyi yedek parça marketi Oto Deniz ve Yedek Parça da haftanın her günü bulabilirsiniz."
        },
        {
          title: "Aracınız güvenilir ellere emanet",
          buttontext: "Randevu İçin arayın",
          webp: "slider4.webp",
          png: "slider4.svg",
          content:
            "Fransa’da 1500, dünyada 29 ülkede 5000’in üzerinde hizmet noktası bulunan Eurorepar Car Service, markası Oto Deniz profesyonel ekipleriyle artık Van 'da."
        },
        {
          title: "Kredi kartı ve mail order ile uygun ödeme seçenekleri ",
          buttontext: "Bizi ziyaret edin",
          bgVariant: "bg-green",
          textVariant: "text-white",
          mapClick: true,
          webp: "s2.webp",
          png: "Slider2.png",
          content:
            "En uygun fiyatlara sahip orijinal yedek parçaları isterseniz kredi kartınızla,isterseniz mail order hizmetini kullanarak ödeyebilirsiniz. Farklı ödeme seçenekleri için şubemizi ziyaret edebiliriniz."
        },
        {
          title: "Bulamadığınız parçaları sizin için biz bulalım",
          buttontext: "Parça talep edin",
          bgVariant: "bg-blue",
          textVariant: "text-white",
          requests: true,
          webp: "s3.webp",
          png: "Slider3.png",
          content:
            "Arayıp bulamadığınız bir yedek parça varsa talep oluşturmanız halinde Oto Deniz ve Yedek Parça uzman kadrosuyla size kısa sürede ihtiyacınız olan parçayı bulabilir."
        }
      ]
    };
  },
  methods: {
    ...mapActions({
      getAllProduct: "getAllProduct"
    }),
    searchValue(e) {
      this.pageproduct = e;
    }
  },
  computed: {
    ...mapState({
      products: "products"
    })
  },
  created() {
    this.pageproduct = this.products;
  }
};
</script>
<style lang="less" scoped>
#anasayfa {
  .home-slide {
    padding-top: 2rem !important;
  }
}
.section-form {
  padding: 100px 0px;
}
.section-about {
  padding: 100px 0px;
}
.service-section {
  padding: 100px 0rem;
}
.section-header {
  text-align: center;
  p {
    width: 100%;
    display: flex;
    margin-top: 1rem;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
}
.service-section-content {
  display: grid;
  padding-top: 50px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.service-section-product {
  display: flex;
  flex-wrap: wrap;
  padding: 3rem 0;
  justify-content: space-around;
}
.product-section {
  padding: 100px 0px 50px 0px;
  display: grid;
  width: 100%;
}
.product-search {
  display: flex;
  justify-content: center;
  padding: 40px 0px 80px 0px;
}
.icon-chevron {
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  color: @blue;

  svg {
    color: @blue;
    margin-left: 0.2rem;
  }
}
.map-section {
  padding: 100px 0px;
}
#mobile-header {
  display: none;
}
#mobile-footer {
  display: none;
}
#service-mobile {
  display: none;
}
@media @lg {
  #mobile-header {
    display: grid;
  }
  #mobile-footer {
    display: grid;
  }
  #desktop-header {
    display: none;
  }
  #desktop-footer {
    display: none;
  }
  #service-desktop {
    display: none;
  }
  #service-mobile {
    display: block;
  }
}
@media @mobile {
  #mobile-header {
    display: grid;
  }
  #mobile-footer {
    display: grid;
  }
  #desktop-header {
    display: none;
  }
  #desktop-footer {
    display: none;
  }
  #service-desktop {
    display: none;
  }
  #service-mobile {
    display: block;
  }
}
@media @xsmobile {
  .service-section-product {
  display: grid;
  grid-auto-columns: auto;
  padding: 3rem 0;
  justify-content: center;
}
  #mobile-header {
    display: grid;
  }
  #mobile-footer {
    display: grid;
  }
  #desktop-header {
    display: none;
  }
  #desktop-footer {
    display: none;
  }
  #service-desktop {
    display: none;
  }
  #service-mobile {
    display: block;
  }
}
</style>
<style lang="less">
.d-container {
  margin: 0 auto;
  width: 70%;
}

@media @xs {
  .d-container {
    margin: 0 auto;
    width: 90%;
  }
}
@media @sm {
  .d-container {
    margin: 0 auto;
    width: 85%;
  }
}
@media @md {
  .d-container {
    margin: 0 auto;
    width: 80%;
  }
}
@media @lg {
  .d-container {
    margin: 0 auto;
    width: 80%;
  }
}
@media @xl {
  .d-container {
    margin: 0 auto;
    width: 80%;
  }
}
@media @xxl {
  .d-container {
    margin: 0 auto;
    width: 70%;
  }
}
</style>
