<template>
  <div id="card-details">
    <div class="columns is-centered">
      <div class="column is-two-thirds">
        <div v-show-slide="featuresOpen">
          <div class="label has-text-grey-light is-size-7">NAME ON CARD</div>
          <div class="field">
            <p class="control">
              <input v-model="name" class="input" type="string" placeholder />
            </p>
          </div>
          <div class="label has-text-grey-light is-size-7">CARD NUMBER</div>
          <div class="field">
            <p class="control">
              <input class="input" type="string" placeholder v-model="number" />
            </p>
          </div>
          <div class="field">
            <div class="label has-text-grey-light is-size-7">VALID UNTIL</div>
            <p class="control">
              <input class="input" type="name" placeholder v-model="validDate" />
            </p>
          </div>
          <div class="field">
            <div class="label has-text-grey-light is-size-7">CVC CODE</div>
            <p class="control has-icons-right">
              <input v-model="cvc" class="input" type="name" placeholder />
            </p>
          </div>
        </div>
        <div v-show-slide="!featuresOpen">
          <ul>
            <li class="has-text-weight-semibold">{{ name }}</li>
            <li class="has-text-weight-semibold">{{ privateCard }}</li>
          </ul>
        </div>
        <br />
        <button @click="confirm" class="button is-info is-pulled-right">
          <span class="has-text-weight-semibold">{{ featuresOpen ? "Confirm" : "Edit details" }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import GreenPay from "../services/greenPay";
export default {
  name: "PaymentDetails",
  data: function() {
    return {
      name: "T H Hawkins",
      number: "4242424242424242",
      validDate: "12/20",
      cvc: "314",
      featuresOpen: true
    };
  },
  computed: {
    exp_month: function() {
      return this.validDate.split("/")[0];
    },
    exp_year: function() {
      return this.validDate.split("/")[1];
    },
    privateCard: function() {
      return (
        "************" +
        this.number.substring(this.number.length - 4, this.number.length)
      );
    }
  },
  methods: {
    confirm() {
      if (this.featuresOpen) {
        this.featuresOpen = false;
        GreenPay.setPaymentDetails({
          number: this.number,
          exp_month: this.exp_month,
          exp_year: this.exp_year
        });
      } else {
        this.featuresOpen = true;
      }
    }
  }
};
</script>

<style scoped>
#card-details {
  height: 360px;
}
</style>
