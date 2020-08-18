<template>
  <div class="footer-container">
    <div class="top-contianer bg-yellow">
      <div class="footer-top container">
        <div class="footer-info">
          <div class="info-group">
            <h6>
              İLETİŞİM
            </h6>
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
          <div class="map-group">
            <h6>
              SİTE HARİTASI
            </h6>
            <ul>
              <li><a href="">Ana Sayfa</a></li>
              <li><a href="">Ana Sayfa</a></li>
              <li><a href="">Ana Sayfa</a></li>
              <li><a href="">Ana Sayfa</a></li>
              <li><a href="">Ana Sayfa</a></li>
            </ul>
          </div>
          <div class="right-group">
            <ul>
              <li>
                <h6>
                  Parça isteği için malinizi kaydedin
                </h6>
              </li>
              <li>
                <p class="f_regular">
                  İsteklerinizi bize iletmek ve bizden haberdar olmak için
                  mailinizi kaydedin
                </p>
              </li>
              <li><d-mail /></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-slide">
        <logo-slide />
      </div>
    </div>

    <div class="footer-bottom bg-black">
      <div class="bottom-left">
        <img src="/oto_deniz_logo.svg" alt="" />
        <p class="text-white">
          Oto Yedek Parça
        </p>
      </div>
      <div class="bottom-center">
        <p class="text-white">
          Copyright 2020
        </p>
      </div>
      <div class="bottom-right">
        <img src="/oto_deniz_logo.svg" alt="" />
        <p class="text-white">
          Think, create, develop!
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.footer-container {
  display: grid;
  grid-template-rows: 1fr 0.2fr;
  li {
    color: @dark;
    font-size: 0.8rem;
    padding: 0.2rem;
  }
  ul {
    padding: 0;
  }
  p {
    font-size: 0.8rem;
  }
}
.top-contianer {
  display: grid;
  grid-template-rows: 1fr 0.6fr;
  padding: 4rem;
  p {
    color: @drop;
  }
}
.footer-slide {
  display: grid;
  align-self: end;
  padding: 0rem 5rem;
}
.footer-info {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-self: center;
  align-content: center;
  h6 {
    padding-bottom: 1.8rem;
    display: flex;
  }
  div {
    width: 80%;
  }
}
.info-group {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;

  div {
    justify-self: start;
  }
}
.footer-bottom {
  display: grid;
  padding: 1rem 4rem;
  grid-template-columns: 1fr 1fr 1fr;
  p,
  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.bottom-left {
  display: grid;
  justify-self: start;
  img {
    display: grid;
    justify-self: center;
    align-self: center;
    width: 50%;
  }
}
.bottom-right {
  display: grid;
  justify-self: center;
  img {
    display: grid;
    justify-self: center;
    align-self: center;
    width: 50%;
  }
}
.bottom-center {
  display: grid;
  justify-self: center;
  align-self: center;
}
</style>
