<template>
  <div class="header-container bg-yellow">
    <div class="header-top d-container">
      <div>
        <top>
          <template v-slot:text
            ><a :href="'tel:' + ' ' + Info.phone"
              ><span class="f_regular text-xdark">{{ Info.phone }}</span></a
            ></template
          >
          <template v-slot:image>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-phone-call"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path
                d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
              />
              <path d="M15 7a2 2 0 0 1 2 2" />
              <path d="M15 3a6 6 0 0 1 6 6" />
            </svg>
          </template>
        </top>
      </div>
      <div>
        <top>
          <template v-slot:text
            ><a href="#map"
              ><span class="f_regular text-xdark">{{ Info.adress }}</span></a
            ></template
          >
          <template v-slot:image>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-map"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="3 7 9 4 15 7 21 4 21 17 15 20 9 17 3 20 3 7" />
              <line x1="9" y1="4" x2="9" y2="17" />
              <line x1="15" y1="7" x2="15" y2="20" />
            </svg>
          </template>
        </top>
      </div>
      <div>
        <top>
          <template v-slot:text
            ><a :href="'mailto:' + ' ' + Info.email"
              ><span class="f_regular text-xdark">{{ Info.email }}</span></a
            ></template
          >
          <template v-slot:image>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-mail"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <polyline points="3 7 12 13 21 7" />
            </svg>
          </template>
        </top>
      </div>
    </div>
    <div class="header-center-container">
      <div class="d-container header-center">
        <div class="center-logo">
          <img :src="prewImage" alt="oto deniz" />
        </div>
        <div class="center-menu">
          <header-menu inline="#" :content="menu" />
        </div>
        <div class="center-login">
          <LoginButton />
        </div>
      </div>
    </div>
    <div class="header-bottom d-container">
      <logo-slide />
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "DHeader",
  data() {
    return {
      prewImage: "/",
      menu: [
        {
          text: "Ana sayfa",
          link: "/",
          diez: true
        },
        {
          text: "Hakkımızda",
          link: "hakkımızda"
        },
        {
          text: "Ürünler",
          link: "ürünler"
        },
        {
          text: "İstek Listesi",
          link: "iletişim"
        },
        {
          text: "İletişim",
          link: "desktop-footer"
        }
      ]
    };
  },
  methods: {
    ...mapActions({
      getInfo: "getInfo"
    }),
    async getimg() {
      try {
        let ref = await this.$fireStorage.ref().child(this.Info.logo);
        const url = await ref.getDownloadURL();
        this.prewImage = url;
      } catch (error) {
      }
    }
  },
  computed: {
    ...mapState({
      Info: "Info"
    })
  },
  async created() {
    await this.getInfo().then(async () => {
        await this.getimg();
    });
  },
  mounted() {
  }
};
</script>
<style lang="less" scoped>
.header-container {
  display: grid;
  width: 100%;
  height: 100%;
  gap: 10px;
  grid-template-rows: 0.3fr 1fr 1fr;
  grid-template-areas: "top" "center" "bottom";
}
.header-center {
  display: grid;
  grid-area: center;
  grid-template-columns: 0.3fr 1fr 0.3fr;
  align-content: center;
  grid-template-areas: "logo menu login";
  img {
    max-width: 210px;
    height: auto;
  }
}
.header-center-container {
  border-top: 0.3px solid rgba(216, 178, 54, 0.4);
  border-bottom: 0.3px solid rgba(216, 178, 54, 0.4);
  display: flex;
  align-items: center;
}
.center-menu {
  grid-area: menu;
  display: grid;
  justify-self: center;
  align-content: center;
}
.center-logo {
  grid-area: logo;
  display: grid;
  img {
    width: 100%;
  }
}
.center-login {
  grid-area: login;
  display: grid;
  justify-self: end;
  align-self: center;
}
.header-top {
  display: grid;
  padding-top: 0.5rem;
  grid-area: top;
  grid-template-columns: 0.3fr 1fr 0.3fr;
  div:nth-child(3) {
    justify-self: right;
  }
  div:nth-child(2) {
    justify-self: center;
  }
  div:nth-child(1) {
    justify-self: left;
  }
}
.header-bottom {
  display: grid;
  padding: 10px 0px;
  grid-template-columns: 1fr;
}
</style>
