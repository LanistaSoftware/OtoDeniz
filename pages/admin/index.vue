<template>
       <div class="login-body bg-cream text-center">
         <b-form @submit.prevent="Login(form)" class="form-signin">
           <img class="mb-4" src="oto_deniz_logo.svg" alt="" width="%100"
             height="72">
      <b-form-group class="text-left" id="input-group-2" label="Kullanıcı Adı:" label-for="userName">
        <b-form-input
          id="userName"
          v-model="form.userName"
          required
          placeholder="Kullanıcı Adı"
        ></b-form-input>
      </b-form-group>
      <b-form-group class="text-left" id="input-group-2" label="Şifre:" label-for="password">
        <b-form-input
          id="password"
          v-model="form.password"
          type="password"
          required
          placeholder="Şifre"
        ></b-form-input>
      </b-form-group>
           <b-button variant="warning" size="md" block type="submit">Giriş Yap</b-button>
           <p class="mt-5 mb-3 text-muted">&copy; 2020 </p>
         </b-form>
       </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
name: 'Panel',
data() {
	return {
		form: {
			userName: null,
			password: null,
			checked: false
		}
	}
},
methods: {
  ...mapActions({
    Login: 'Login'
  })
}
}
</script>

<style lang="less" scoped>
.login-body {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  height: 100vh !important;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

.form-signin .form-control:focus {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>