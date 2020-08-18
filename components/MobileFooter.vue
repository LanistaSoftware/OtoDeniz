<template>
  <div class="mobile-footer">
    <div class="mobile-top-footer bg-yellow">
      <div class="info-group">
        <div>
          <top
            ><template v-slot:text>Adres</template>
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
          <p>
            Seyrantepe, 10/32. Sk. No:3 65040 Van Merkez/Van
          </p>
        </div>
        <div>
          <top
            ><template v-slot:text>Telefon</template>
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
          <p>
            (0432) 223 05 79
          </p>
        </div>
        <div>
          <top
            ><template v-slot:text>E-Mail</template>
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
          <p>
            info@otodeniz.com.tr
          </p>
        </div>
      </div>
      <div class="mail-footer">
        <div class="footer-header">
          <h4>
            Parça isteği için malinizi kaydedin
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
<style lang="less">
.mobile-footer {
  display: grid;
  grid-template-rows: 1fr 0.1fr;
  .top-text{
      font-size: 2rem;
  } 
}
.mobile-top-footer {
  display: grid;
  padding: 1rem;
  grid-template-rows: 1fr 0.5fr;
}
.info-group {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  p {
    display: flex;
    font-size: 1.5rem;
    width: 60%;
    margin-left: 2.5rem;
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
  text-align: center ;
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
