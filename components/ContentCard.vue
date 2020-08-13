<template>
  <div class="content-card" :class="{ 'reverse-right': !reverse, 'reverse-left': reverse }">
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
        <d-button class="button" bgVariant="bg-yellow" textVariant="text-dark"
          >{{buttontext}}</d-button
        >
      </div>
    </div>
    <div class="image-container"><img :src="img" alt="card_img" /></div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: null
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
    width: 80%;
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

  img {
    width: 100%;
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
