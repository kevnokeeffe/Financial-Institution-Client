<template>
  <div class="container-dashboard">
    <h1 id="h1">This is the Dash Board</h1>
    <div>
      <b-card class="account-card">
        <h2>Current Account</h2>
        <b-form class="custom-form" @submit.prevent="onSubmitCurrent">
          <b-form-group
            id="input-balance"
            label="Details:"
            label-for="cbalance"
          >
          <b-form-input
              id="fiInput"
              v-model.trim="$v.form.fiName.$model"
              placeholder="Enter FI Name"
            ></b-form-input>
            <b-form-input
              id="fiInput"
              v-model.trim="$v.form.cbalance.$model"
              placeholder="Enter balance"
            ></b-form-input>
            <b-form-input
              id="fiInput"
              v-model.trim="$v.form.accountName.$model"
              placeholder="Enter account name"
            ></b-form-input>
            <b-form-input
              id="fiInput"
              v-model.trim="$v.form.accountId.$model"
              placeholder="Enter account ID"
            ></b-form-input>
            <b-form-input
              id="fiInput"
              v-model.trim="$v.form.accountType.$model"
              placeholder="Enter account type"
            ></b-form-input>
            <b-form-input
              id="fiInput"
              v-model.trim="$v.form.overDraft.$model"
              placeholder="Enter overdraft"
            ></b-form-input>
            <b-form-input
              id="fiInput"
              v-model.trim="$v.form.currency.$model"
              placeholder="Enter currency"
            ></b-form-input>
            <b-form-input
              id="fiInput"
              v-model.trim="$v.form.iban.$model"
              placeholder="Enter iban"
            ></b-form-input>
          </b-form-group>
          <b-button type="button" class="btn btn-secondary" @click="onReset2()" >reset</b-button>
          <b-button type="submit" class="btn btn-secondary">Submit</b-button>
        </b-form>
      </b-card>
    </div>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
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
              id="fiInput"
              v-model.trim="$v.form.fiName.$model"
              placeholder="Enter FI Name"
            ></b-form-input>
            <b-form-input
              id="fiInput"
              v-model.trim="$v.form.sbalance.$model"
              placeholder="Enter balance"
            ></b-form-input>
            <b-form-input
              id="fiInput"
              v-model.trim="$v.form.accountName.$model"
              placeholder="Enter account name"
            ></b-form-input>
            <b-form-input
              id="fiInput"
              v-model.trim="$v.form.accountId.$model"
              placeholder="Enter account ID"
            ></b-form-input>
            <b-form-input
              id="fiInput"
              v-model.trim="$v.form.accountType.$model"
              placeholder="Enter account type"
            ></b-form-input>
            <b-form-input
              id="fiInput"
              v-model.trim="$v.form.overDraft.$model"
              placeholder="Enter overdraft"
            ></b-form-input>
            <b-form-input
              id="fiInput"
              v-model.trim="$v.form.currency.$model"
              placeholder="Enter currency"
            ></b-form-input>
            <b-form-input
              id="fiInput"
              v-model.trim="$v.form.iban.$model"
              placeholder="Enter iban"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" class="btn btn-secondary">Submit</b-button>
          <b-button type="button" class="btn btn-secondary" @click="onResetS()" >reset</b-button>
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
          <b-button type="button" @click="onResetFI()" class="btn btn-secondary">Reset</b-button>
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
        userId: this.$store.state.userId,
        bankId: this.$store.state.bankId,
        sbalance: '',
        fiName: '',
        fiNumber: '',
        fiEircode: '',
        fiStreet: '',
        fiCity: '',
        fiCountry: '',
        fiType: '',
        accountName: '',
        accountType: '',
        overDraft: '',
        accountId:'',
        accountNumber:'',
        currency: '',
        iban: '',
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
      fiNameA: {
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
      fiType: {
        required
      },
      accountName: {
        required
      },
        accountId:{
        required
      },
        accountType: {
        required
      },
        overDraft: {
        required
      },
        currency: {
        required
      },
        iban: {
        required
      },
    }
  },

  methods: {
    onSubmitCurrent: async function() {
      const cAccount = {
        fiName: this.form.fiName,
        accountName: this.form.accountName,
        accountNumber: this.form.accountNumber,
        accountId:this.form.accountId,
        balance: this.form.cbalance,
        userId: this.form.userId,
        accountType: this.form.accountType,
        overDraft: this.form.overDraft,
        currency: this.form.currency,
        iban: this.form.iban,
        bankId:this.$store.state.bankId
      }
      const accountPromise = await accountService.createCurrentAccount(cAccount)
      await Promise.all([accountPromise])
      await this.$router.push({ path: '/' })
    },

    onSubmitSavings: async function() {
      const sAccount = {
        balance: this.form.sbalance,
        fiName: this.form.fiName,
        userId: this.form.userId,
        accountId: this.form.accountId,
        accountName: this.form.accountName,
        accountType: this.form.accountType,
        accountNumber: this.form.accountNumber,
        currency: this.form.currency,
        iban: this.form.iban,
        bankId:this.$store.state.bankId

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
    },
    onReset2() {
      // Reset our form values
      this.form.cbalance = '8000'
      this.form.fiName = 'Bank of WIT'
      this.form.userId = this.$store.state.userId
      this.form.accountType = 'Current'
      this.form.overDraft = '500'
      this.form.currency = 'Euro'
      this.form.iban = "BOWIT9871088"
      this.form.accountName = "Kev's Spender"
      this.form.accountNumber= "9871088"
      this.form.accountId="9871088"
      this.$store.state.bankId,
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    onResetS() {
      // Reset our form values
      this.form.sbalance = '19000'
      this.form.fiNameA = 'Bank of WIT'
      this.form.userId = this.$store.state.userId
      this.form.accountType = 'Savings'
      this.form.overDraft = 'None'
      this.form.currency = 'Euro'
      this.form.iban = "BOWIT9871089"
      this.form.accountName = "My super saver"
      this.form.accountNumber= "9871089"
      this.form.accountId= "9871089"
      this.form.bankId= this.$store.state.bankId,
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    onResetFI() {
      // Reset our form values
      this.form.fiName="Bank"
      this.form.fiNumber="12"
      this.form.fiEircode="X9 19U8G"
      this.form.fiStreet="Patrick's Street"
      this.form.fiCity="Cork"
      this.form.fiCountry="Ireland"
      this.form.fiType="Bank"
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
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

#fiInput {
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
