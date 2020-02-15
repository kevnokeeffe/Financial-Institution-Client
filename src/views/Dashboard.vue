<template>
  <div class="container-dashboard">
    <h1 id="h1">This is the Dash Board</h1>
    <div>
      <b-card class="account-card">
        <h2>Current Account</h2>
        <b-form class="custom-form" @submit.prevent="onSubmitCurrent">
          <b-form-group
            id="input-balance"
            label="Balance:"
            label-for="cbalance"
          >
            <b-form-input
              id="cbalance"
              v-model.trim="$v.form.cbalance.$model"
              placeholder="Enter balance"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" class="btn btn-secondary">Submit</b-button>
        </b-form>
      </b-card>
    </div>
    <div>
      <b-card class="account-card">
        <h2>Savings Account</h2>
        <b-form class="custom-form" @submit.prevent="onSubmitSavings">
          <b-form-group
            id="input-balance"
            label="Balance:"
            label-for="sbalance"
          >
            <b-form-input
              id="sbalance"
              v-model.trim="$v.form.sbalance.$model"
              placeholder="Enter balance"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" class="btn btn-secondary">Submit</b-button>
        </b-form>
      </b-card>
    </div>
    <div>
      <b-card class="account-card">
        <h2>Financial Institution Details</h2>
        <b-form class="custom-form" @submit.prevent="onSubmitFIDetails">
          <b-form-group
            id="input-fiName"
            label="Enter Details:"
            label-for="fiName"
          >
            <b-form-input
              id="fiInput"
              v-model.trim="$v.form.fiName.$model"
              placeholder="Enter name"
            ></b-form-input>
            <!-- <b-form-input
            id="fiAddress"
            v-model.trim="$v.form.fiAddress.$model"
            placeholder="Enter address"
          ></b-form-input> -->
         
            <b-form-input
              id="fiInput"
              v-model.trim="$v.form.fiNumber.$model"
              placeholder="Enter number"
            ></b-form-input>
     
            <b-form-input
              id="fiInput"
              v-model.trim="$v.form.fiEircode.$model"
              placeholder="Enter eircode"
            ></b-form-input>
     
            <b-form-input
              id="fiInput"
              v-model.trim="$v.form.fiStreet.$model"
              placeholder="Enter street"
            ></b-form-input>
            <b-form-input
              id="fiInput"
              v-model.trim="$v.form.fiCity.$model"
              placeholder="Enter city"
            ></b-form-input>
            <b-form-input
              id="fiInput"
              v-model.trim="$v.form.fiCountry.$model"
              placeholder="Enter country"
            ></b-form-input>

            <b-form-input
              id="fiInput"
              v-model.trim="$v.form.fiType.$model"
              placeholder="Enter fi type"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" class="btn btn-secondary">Submit</b-button>
        </b-form>
      </b-card>
    </div>
  </div>
</template>

<script>
//import * as auth from '../services/AuthService'
import * as accountService from '../services/AccountService'
import * as fiService from '../services/FISservice'
import { required } from 'vuelidate/lib/validators'
export default {
  name: 'dashboard',
  data() {
    return {
      form: {
        cbalance: '',
        sbalance: '',
        fiName: '',
        fiNumber: '',
        fiEircode: '',
        fiStreet: '',
        fiCity: '',
        fiCountry: '',
        fiType:'',
        submitStatus: null
      },
      show: true
    }
  },
  validations: {
    form: {
      cbalance: {
        required
      },
      sbalance: {
        required
      },
      fiName: {
        required
      },
        fiNumber: {
        required
      },
        fiEircode: {
        required
      },
        fiStreet: {
        required
      },
        fiCity: {
        required
      },
        fiCountry: {
        required
      },
      fiType:{
        required
      }
    }
  },

  methods: {
    onSubmitCurrent: async function() {
      const cAccount = {
        balance: this.form.cbalance
      }
      const accountPromise = await accountService.createCurrentAccount(cAccount)
      await Promise.all([accountPromise])
      await this.$router.push({ path: '/' })
    },

    onSubmitSavings: async function() {
      const sAccount = {
        balance: this.form.sbalance
      }
      const accountPromise = await accountService.createSavingsAccount(sAccount)
      await Promise.all([accountPromise])
      await this.$router.push({ path: '/' })
    },
    onSubmitFIDetails: async function() {
      const fi = {
        fiName: this.form.fiName,
        fiNumber: this.form.fiNumber,
        fiEircode: this.form.fiEircode,
        fiStreet: this.form.fiStreet,
        fiCity: this.form.fiCity,
        fiCountry: this.form.fiCountry,
        fiType: this.form.fiType
      }
      const accountPromise = await fiService.createFi(fi)
      await Promise.all([accountPromise])
      await this.$router.push({ path: '/' })
    }
  }
}
</script>

<style>
#h1 {
  text-align: center;
  color: ivory;
  font-family: 'Roboto', sans-serif;
  font-family: 'Open Sans', sans-serif;
  font-size: 2em;
}

.container-dashboard {
  background: rgb(249, 190, 2);
  background: linear-gradient(
    90deg,
    rgba(249, 190, 2, 1) 0%,
    rgba(249, 190, 2, 1) 22%,
    rgba(255, 255, 240, 1) 22%
  );
  padding-top: 4px;
  padding-bottom: 30%;
  height: 100%;
  position: fixed;
  left: 0;
  right: 0;
  overflow: auto;
}

#fiInput{
  margin: 5px;
}
.account-card {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
  position: relative;
  width: 90%;
  margin-top: 60px;
  max-width: 500px !important;
  background: rgb(252, 74, 26);
  background: linear-gradient(
    180deg,
    rgba(252, 74, 26, 1) 25%,
    rgba(254, 254, 254, 1) 25%,
    rgba(254, 254, 254, 1) 98%,
    rgba(252, 74, 26, 1) 98%
  );
}
</style>
