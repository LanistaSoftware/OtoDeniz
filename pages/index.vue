<template>
  <div>
    <no-ssr>
      <d-header id="desktop-header" />
      <mobile-header id="mobile-header" />
    </no-ssr>

    <section class="bg-cream" id="anasayfa">
      <div class="d-container">
        <no-ssr>
          <content-slide :cards="contentslidecards" />
        </no-ssr>
      </div>
    </section>
    <section class="bg-white service-section d-container" id="hakkımızda">
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
          {{ item.content }}</center-card
        >
      </div>
      <div class="service-section-content" id="service-mobile">
        <no-ssr>
          <center-card-slide :cardsslide="centercards" />
        </no-ssr>
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
          <no-ssr>
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
          </no-ssr>
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
    <section class="d-container section-about" id="section-about">
      <content-card
        title="Deniz Oto ve Yedek Parça Kimdir ?"
        buttontext="Hemen Arayın"
        img="section3.png"
        top
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
          Deniz Oto ve Yedek Parça, Seyrantepe, 10/32 Sk. No:3 Van Oto Sanayi'de
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
          img: "1.png",
          content:
            "Aradığınız bütün orijinal yedek parçaları en uygun fiyatlarla bölgenin en iyi yedek parça marketi Deniz Oto ve Yedek Parça da haftanın her günü bulabilirsiniz."
        },
        {
          title: "Kredi kartı ve mail order ile uygun ödeme seçenekleri ",
          buttontext: "Bizi ziyaret edin",
          bgVariant: "bg-green",
          textVariant: "text-white",
          mapClick: true,
          img: "1.png",
          content:
            "En uygun fiyatlara sahip orijinal yedek parçaları isterseniz kredi kartınızla,isterseniz mail order hizmetini kullanarak ödeyebilirsiniz. Farklı ödeme seçenekleri için şubemizi ziyaret edebiliriniz."
        },
        {
          title: "Bulamadığınız parçaları sizin için biz bulalım",
          buttontext: "Parça talep edin",
          bgVariant: "bg-blue",
          textVariant: "text-white",
          requests: true,
          img: "slide3.png",
          content:
            "Arayıp bulamadığınız bir yedek parça varsa talep oluşturmanız halinde Deniz Oto ve Yedek Parça uzman kadrosuyla size kısa sürede ihtiyacınız olan parçayı bulabilir."
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
    this.getAllProduct().then(() => {
      this.pageproduct = this.products;
    });
  }
};
</script>
<style lang="less" scoped>
.section-form {
  padding: 5rem 0rem;
}
.section-about {
  padding: 1rem 0rem;
}
.section-header {
  text-align: center;
  padding-top: 5rem;
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
  padding: 5rem 0rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.service-section-product {
  display: grid;
  padding: 3rem 1rem;
  width: 100%;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.product-section {
  padding: 5rem 0rem;
  display: grid;
  width: 100%;
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
  align-items: center;
  color: @blue;

  svg {
    color: @blue;
    margin-left: 0.2rem;
  }
}
.map-section {
  padding: 5rem 0rem;
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
@media @smalpc {
  .service-section-product {
    display: grid;
    padding: 3rem 1rem;
    width: 100%;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media @mobile {
  .service-section-product {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    padding: 2rem;
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
  width: 80% !important;
}
@media @mobile {
  .d-container {
    width: 90% !important;
  }
}
</style>
