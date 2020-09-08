<template>
  <div class="mobile-footer">
    <div class="mobile-top-footer bg-yellow">
      <div class="info-group">
        <div>
          <top
            ><template v-slot:text><h4>Adres</h4></template>
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
          <p>
            {{ Info.adress }}
          </p>
        </div>
        <div>
          <top
            ><template v-slot:text><h4>Telefon</h4></template>
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
          <a :href="'tel:' + ' ' + Info.phone">
            <p>
              {{ Info.phone }}
            </p>
          </a>
        </div>
        <div>
          <top
            ><template v-slot:text><h4>E-Mail</h4></template>
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
            <a :href="'mailto:' + ' ' + Info.email">
              <p>
                {{ Info.email }}
              </p>
            </a>
        </div>
      </div>
      <div class="mail-footer">
        <div class="footer-header">
          <h4>
            Bizden haber almak için mailinizi kaydedin.
          </h4>
        </div>
        <div>
          <d-mail></d-mail>
        </div>
      </div>
    </div>
    <div class="bottom-footer bg-dark">
      <p>Bu web sitesi Lanista Yazılım tarafından 2020 yılında yapılmıştır</p>
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
  }
};
</script>
<style lang="less">
.mobile-footer {
  display: grid;
  grid-template-rows: 1fr 0.1fr;
}
.mobile-top-footer {
  display: grid;
  padding: 1rem;
  grid-template-rows: 1fr 0.5fr;
}
.info-group {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  div {
    align-self: center;
  }
  p {
    display: flex;
    font-size: 1.4rem;
    width: 60%;
    margin-left: 1.5rem;
    padding-top: 0.1rem;
    color: @ftext;
  }
  .top-container {
    padding: 1rem 0rem;
  }
}
.mail-footer {
  padding: 1rem;
  align-self: center;
  text-align: center;
  display: grid;
  gap: 1rem;
  grid-template-rows: 1fr 1fr;
  button {
    width: 20%;
  }
}
.bottom-footer {
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    width: 70%;
    color: @white;
    text-align: center;
  }
}
</style>
