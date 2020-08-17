<template>
  <div class="header-container bg-yellow">
    <div class="header-top container">
      <div>
        <top
          ><template v-slot:text>(0432) 223 05 79</template>
          <template v-slot:image
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-users"
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
              <circle cx="9" cy="7" r="4" />
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg></template
        ></top>
      </div>
      <div>
        <top
          ><template v-slot:text
            >Seyrantepe, 10/32. Sk. No:3, 65040 Van Merkez/Van</template
          >
          <template v-slot:image
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-users"
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
              <circle cx="9" cy="7" r="4" />
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg></template
        ></top>
      </div>
      <div>
        <top
          ><template v-slot:text>info@otodeniz.com.tr</template>
          <template v-slot:image
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-users"
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
              <circle cx="9" cy="7" r="4" />
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg></template
        ></top>
      </div>
    </div>
    <div class="header-center-container">
      <div class="container header-center">
        <div class="center-logo ">
          <img src="/oto_deniz_logo.svg" alt="" />
        </div>
        <div class="center-menu">
          <header-menu />
        </div>
        <div class="center-login">
          <LoginButton />
        </div>
      </div>
    </div>
    <div class="header-bottom container">
      <logo-slide />
    </div>
  </div>
</template>
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
    max-width: 160px;
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
