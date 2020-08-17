<template>
  <div class="login-container">
    <div class="right-container">
      <d-button
        class="user-button"
        bg-variant="bg-black"
        text-variant="text-yellow"
      >
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
          <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg
      ></d-button>
    </div>
    <d-button
      class="login-right-button"
      bg-variant="bg-bgray"
      text-variant="text-yellow f_semibold"
      >Kullanıcı girişi</d-button
    >
  </div>
</template>
<style lang="less" scoped>
.login-container {
  width: 100%;
  display: inline-flex;
  padding: 1rem;
}
.right-container {
    width: 20%;
    display: inline-block;
    margin-right: -8px;
}
.user-button {
    border-radius: 0.5em;
}
.login-right-button {
  border-top-left-radius: 0em;
  border-bottom-left-radius: 0em;
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  width: 80%;
}
</style>
