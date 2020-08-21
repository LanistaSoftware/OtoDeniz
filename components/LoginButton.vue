<template>
  <d-button bg-variant="bg-bgray" text-variant="text-yellow">
    <span class="btn-icon bg-black f_regular">
      <svg
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
        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
      </svg>
    </span>
    <span class="btn-text f_regular">
      <a href="https://islem-takip.otodeniz.com.tr/" target="_blank" class="text-yellow">
      Kullanıcı Girişi
      </a>
    </span>
  </d-button>
</template>
<style lang="less" scoped>
button {
  text-align: left;
  font-size: 0.5rem;
  padding: 0px 10px 0px 0px;
  display: flex;
  align-items: center;
  width: 167px;
  border-radius: 5px;
}

.btn-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  border-radius: 5px;
  padding: 10px 10px;
  height: 100%;
  text-align: center;
}

.btn-text {
  width: 100%;
  height: 100%;
  font-size: 0.8rem;
  display: inline-flex;
  justify-content: center;
}
</style>
