<template>
  <div class="container-register">
    <b-card class="b-card-register">
      <div class="h1-register-div">
      <h1 class="h1-register">Sign-Up</h1>
      <b-form class="custom-form" @submit.prevent="onSubmit">
        <b-form-group
          id="input-group-fName"
          label="First Name:"
          label-for="input-fName"
        >
          <b-form-input
            id="input-fName"
            v-model="form.fName"
            v-model.trim="$v.form.fName.$model"
            :class="{
              'is-invalid': $v.form.fName.$error,
              'is-valid': !$v.form.fName.$invalid
            }"
            placeholder="Enter first name"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-lName"
          label="Last Name:"
          label-for="input-lName"
        >
          <b-form-input
            id="input-lName"
            v-model="form.lName"
            v-model.trim="$v.form.lName.$model"
            :class="{
              'is-invalid': $v.form.lName.$error,
              'is-valid': !$v.form.lName.$invalid
            }"
            placeholder="Enter last name"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-email"
          label="Email address:"
          label-for="input-email"
          description="We'll never share your email with anyone else."
        >
          <b-form-input
            id="input-email"
            v-model="form.email"
            type="email"
            v-model.trim="$v.form.email.$model"
            :class="{
              'is-invalid': $v.form.email.$error,
              'is-valid': !$v.form.email.$invalid
            }"
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-password"
          label="Password:"
          label-for="password"
          description="Password must be at least 6 characters long!"
        >
          <b-form-input
            id="password"
            type="password"
            v-model="form.password"
            v-model.trim="$v.form.password.$model"
            :class="{
              'is-invalid': $v.form.password.$error,
              'is-valid': !$v.form.password.$invalid
            }"
            placeholder="Enter password"
          ></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-button type="submit" class="btn btn-success">Submit</b-button>
        </b-form-group>
      </b-form>
      </div>
    </b-card>
  </div>
</template>

<script>
import * as auth from '../../services/AuthService'
// import axios from 'axios'
import {
  minLength,
  required,
  maxLength,
  email
} from 'vuelidate/lib/validators'
export default {
  name: 'register',
  data() {
    return {
      form: {
        fName: '',
        lName: '',
        email: '',
        password: '',
        submitStatus: null
      },
      show: true
    }
  },
  validations: {
    message: {
      minLength: minLength(0)
    },
    form:{
    fName: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(20)
    },
    lName: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(20)
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(20)
    },
    email: {
      required,
      email
    }
    }
  },
  methods: {
    onSubmit: async function() {
      const user = {
        email: this.form.email,
        password: this.form.password,
        fName: this.form.fName,
        lName: this.form.lName
      }
      const registerPromise = auth.registerUser(user)
      await Promise.all([registerPromise])
      const loginPromise = auth.login(user)
      await Promise.all([loginPromise])
      await this.$router.push({ path: '/dashboard' })
    },
  }
}
</script>

<style>
.h1-register {
  text-align: center;
  color: #17252a;
  font-family: 'Roboto', sans-serif;
  font-family: 'Open Sans', sans-serif;
  font-size: 2em;
}

.b-card-register {
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 90%;
  margin-top: 20px;
  max-width: 500px !important;
  margin-bottom: 20px;
}

.container-register {
  width: 100%;
  height: 100%;
}

.container-register {
  background: rgb(249,190,2);
  background: linear-gradient(90deg, rgba(249,190,2,1) 0%, rgba(249,190,2,1) 22%, rgba(255,255,240,1) 22%);
  padding-top: 4px;
  padding-bottom:30%;
  height:100%;
left:0;
right:0;
}
.b-card-register-uploads {
  margin-top: 20px;
  margin-bottom: 20px;
}
.h1-register {
  text-align: center;
  color: ivory;
  font-family: 'Roboto', sans-serif;
  font-family: 'Open Sans', sans-serif;
  font-size: 2em;
  margin-bottom: 50px;
}

.h1-register-div {
  width:100%;
  height:100%;
  padding: 15px;
  margin-bottom:15px;
}
.b-card-register {
    display: block;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    width: 90%;
    margin-top: 60px;
    max-width: 500px !important;
    background: rgb(108,100,139);
background: linear-gradient(180deg, rgba(108,100,139,1) 13%, rgba(255,255,240,1) 13%, rgba(255,255,240,1) 98%, rgba(108,100,139,1) 98%);
  }
</style>
