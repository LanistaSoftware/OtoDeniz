<template>
  <div
    class="content-card"
    :class="{ 'reverse-right': !reverse, 'reverse-left': reverse }"
  >
    <div class="content-container">
      <div v-if="!map" class="card-title">
        <h2 v-if="png === 'section3.png'" class="f_bold">
          Oto Deniz ve Yedek Parça
          <br />
          Kimdir ?
        </h2>
        <h2 v-else class="f_bold">
          {{
            title.split(" ", Math.ceil(title.split(" ").length / 2)).join(" ")
          }}
          <br />
          {{
            title
              .split(" ", Math.ceil(title.split(" ").length))
              .slice(
                Math.ceil(title.split(" ").length / 2),
                Math.ceil(title.split(" ").length)
              )
              .join(" ")
          }}
        </h2>
      </div>
      <div v-else class="card-title">
        <h2 class="f_bold">
          {{ title }}
        </h2>
      </div>
      <div class="card-content">
        <p
          :style="png === 'section3.png' ? 'font-size:1rem;' : null"
          class="f_regular"
        >
          <slot />
        </p>
      </div>
      <div class="card-button mt-5">
        <d-button
          class="button"
          :bgVariant="bgVariant"
          :textVariant="textVariant"
          @click="handleSubmit()"
          >{{ buttontext }}</d-button
        >
      </div>
    </div>

    <div v-if="!map" class="image-container">
      <client-only>
        <picture class="picture">
          <source :srcset="webp" type="image/webp" />
          <source :srcset="png" type="image/png" />
          <img alt="oto deniz" />
        </picture>
      </client-only>
    </div>
    <div v-else class="image-container">
      <div class="d-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12484.649252857658!2d43.35023624135329!3d38.53002646006359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4012706835201201%3A0xec7048425299a374!2sOto%20Deniz!5e0!3m2!1str!2str!4v1599655847158!5m2!1str!2str"
           frameborder="0"
          allowfullscreen
          aria-hidden="true"
          height="100%"
          width="100%"
          tabindex="0"
          title="oto deniz adresi"
        ></iframe>
        <!-- <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.3566675762777!2d28.78506281495511!3d41.08305312276978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa5f570baaaab%3A0xac43b09ef54311fd!2sGochem!5e0!3m2!1str!2str!4v1585750999091!5m2!1str!2str"
          frameborder="0"
          allowfullscreen
          aria-hidden="true"
          height="100%"
          width="100%"
          tabindex="0"
          title="oto deniz adresi"
        /> -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      Info: "Info"
    })
  },
  methods: {
    handleSubmit() {
      if (this.mapClick) {
        this.$router.push("#map");
      } else if (this.requests) {
        this.$router.push("#iletişim");
      } 
      else if (this.map){
        window.location.href = "https://goo.gl/maps/SMtNeZbat3pR1nRd9"
      }
      else {
        window.open(`tel:${this.Info.phone}`);
      }
    }
  },
  props: {
    title: {
      type: String,
      default: null
    },
    mapClick: {
      type: Boolean,
      default: false
    },
    map: {
      type: Boolean,
      default: false
    },
    requests: {
      type: Boolean,
      default: false
    },
    img: {
      type: String,
      default: null
    },
    webp: {
      type: String,
      default: null
    },
    png: {
      type: String,
      default: null
    },
    bgVariant: {
      type: String,
      default: "bg-yellow"
    },
    textVariant: {
      type: String,
      default: "text-dark"
    },
    top: {
      type: Boolean,
      default: false
    },
    buttontext: {
      type: String,
      default: null
    },
    reverse: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="less" scoped>
.content-card {
  width: 100%;
  display: grid;
  grid-template-columns: 7fr 5fr;
  justify-content: center;
  align-content: center;
}
.reverse-left {
  grid-template-areas: "content-container image-container";
}
.reverse-right {
  grid-template-areas: "image-container content-container";
  grid-template-columns: 5fr 7fr;
}
.content-container {
  grid-area: content-container;
  padding: 1rem 0;
  width: 100%;
  display: grid;
  grid-template-areas:
    "card-title"
    "card-content"
    "card-button";
}

.card-title {
  grid-area: card-title;
  display: grid;
  width: 100%;
  justify-content: start;
  align-content: center;
}

.card-content {
  grid-area: card-content;
  color: @drop;
  display: grid;
  width: 100%;
  justify-content: center;
  align-content: center;
}

.card-button {
  grid-area: card-button;
  display: grid;
  width: 100%;
  padding-left: 3px;

  align-self: end;
  button {
    width: 50%;
  }
}
.title-container {
  display: none;
}
.image-container {
  grid-area: image-container;
  display: grid;
  width: 100%;
  .d-map {
    width: 100%;
    height: 100%;
    padding: 1rem;
  }
  .picture {
    display: grid;
    justify-content: center;
  }
  img {
    width: 100%;
    height: auto;
    justify-self: center;
  }
}
@media @mobile {
  .content-card {
    grid-template-columns: 1fr;
    grid-template-areas: "image-container" "content-container ";
  }
  .card-content {
    margin-top: 15px;
  }
  .img-center {
    grid-template-columns: 1fr !important;
    grid-template-rows: none !important;
    grid-template-areas: "title-container" "image-container" "content-container " !important;
    .d-map {
      margin-top: 1rem;
    }
    .content-container {
      grid-template-rows: none !important;
      margin: 20px 0rem;
      button {
        margin-top: 1rem;
      }
    }
  }
  .image-container {
    img {
      height: auto;
    }
  }
  .title-container {
    display: block;
  }
  .img-center {
    .card-title {
      display: none !important;
    }
    h2 {
      text-align: center;
    }
  }
  .content-container {
    text-align: center;
  }
  .card-title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 22px;

    h2 {
      width: 100%;
    }
  }
  .card-button {
    grid-area: card-button;
    display: grid;
    width: 100%;
    align-content: flex-end;
    button {
      width: 100%;
      margin: 20px 0px;
    }
  }
}
</style>
