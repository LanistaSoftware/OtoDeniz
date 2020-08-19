<template>
  <div
    class="content-card"
    :class="{ 'reverse-right': !reverse, 'reverse-left': reverse }"
  >
    <div class="content-container">
      <div class="card-title">
        <h1 class="f_bold">{{ title }}</h1>
      </div>
      <div class="card-content">
        <p class="f_regular">
          <slot />
        </p>
      </div>
      <div class="card-button">
        <d-button
          class="button"
          bgVariant="bg-yellow"
          textVariant="text-dark"
          >{{ buttontext }}</d-button
        >
      </div>
    </div>
    <div v-if="!map" class="image-container">
      <img :src="img" alt="card_img" />
    </div>
    <div v-else class="image-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.3566675762777!2d28.78506281495511!3d41.08305312276978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa5f570baaaab%3A0xac43b09ef54311fd!2sGochem!5e0!3m2!1str!2str!4v1585750999091!5m2!1str!2str"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
          title="oto deniz adresi"
          class="d-map"
        />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    map: {
      type: Boolean,
      default: false
    },
    img: {
      type: String,
      default: null
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
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-content: center;
}
.reverse-left {
  grid-template-areas: "content-container image-container";
}
.reverse-right {
  grid-template-areas: "image-container content-container";
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
    "card-button";
}

.card-title {
  grid-area: card-title;
  display: grid;
  width: 100%;
  justify-content: start;
  align-content: center;
  h1 {
    width: 90%;
  }
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
  align-content: flex-start;
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
  .d-map {
    width: 100%;

  }
  img {
    width: 80%;
    height: auto;
  }
}
@media @sm {
  .content-card {
    grid-template-columns: 1fr;
    grid-template-areas: "image-container" "content-container ";
  }

  .content-container {
    text-align: center;
  }
  .card-title {
    display: flex;
    justify-content: center;
    align-items: center;
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
    }
  }
}
@media @xs {
  .content-card {
    grid-template-columns: 1fr;
    grid-template-areas: "image-container" "content-container ";
  }

  .content-container {
    text-align: center;
  }
  .card-title {
    display: flex;
    justify-content: center;
    align-items: center;
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
    }
  }
}
@media @md {
  .content-card {
    grid-template-columns: 1fr;
    grid-template-areas: "image-container" "content-container ";
  }

  .content-container {
    text-align: center;
  }
  .card-title {
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
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
    }
  }
}
</style>
