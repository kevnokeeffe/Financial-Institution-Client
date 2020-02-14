<template>
  <div class="container-login">
    <b-card class="b-card-login">
      <div class="h1-login-div">
      <h1 class="h1-login">Login</h1>
      </div>
      <b-form class="custom-form" @submit.prevent="onSubmit">
        <b-form-group
          id="input-group-email"
          label="Email address:"
          label-for="input-email"
        >
          <b-form-input
            id="input-email"
            
            v-model.trim="$v.form.email.$model"
            type="email"
            class="form-control"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-password"
          label="Password:"
          label-for="password"
        >
          <b-form-input
            id="password"
            type="password"
            
            v-model.trim="$v.form.password.$model"
            required
            placeholder="Enter password"
          ></b-form-input>
        </b-form-group>

        <div class="form-group">
          <b-button
            type="submit"
            class="btn btn-secondary"
            >Submit</b-button
          >
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
import * as auth from '../../services/AuthService'
import {
  required,
  email
  
} from 'vuelidate/lib/validators'
export default {
  name: 'login',
  data() {
    return {
      form: {
        email: '',
        password: '',
        submitStatus: null
      },
      show: true
    }
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },
  methods: {
    onSubmit: async function() {
        const user = {
          email: this.form.email,
          password: this.form.password
        }
      const loginPromise = await auth.login(user)
      await Promise.all([loginPromise])
      await this.$router.push({ path: '/dashboard' })
      }
    },
    buttonDisabled: function() {
      return !this.form.email || !this.form.password
    }
  }

</script>

<style>
.h1-login {
  text-align: center;
  color: ivory;
  font-family: 'Roboto', sans-serif;
  font-family: 'Open Sans', sans-serif;
  font-size: 2em;
}

.h1-login-div {
  width:100%;
  height:100%;
  padding: 15px;
  margin-bottom:15px;
}
#input-group-email{
  padding-top:20px;
}
.container-login {
  background: rgb(249,190,2);
  background: linear-gradient(90deg, rgba(249,190,2,1) 0%, rgba(249,190,2,1) 22%, rgba(255,255,240,1) 22%);
  padding-top: 4px;
  padding-bottom:30%;
  height:100%;
  position:fixed;
left:0;
right:0;
}

</style>
