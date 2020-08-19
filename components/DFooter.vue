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
                  </svg> </template
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
                    <polyline
                      points="3 7 9 4 15 7 21 4 21 17 15 20 9 17 3 20 3 7"
                    />
                    <line x1="9" y1="4" x2="9" y2="17" />
                    <line x1="15" y1="7" x2="15" y2="20" />
                  </svg> </template
              ></top>
            </div>
            <div>
              <top
                ><template v-slot:text>info@otodeniz.com.tr</template>
                <template v-slot:image
                  ><svg
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
                  </svg> </template
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
