/* eslint-disable */
import axios from "axios"
import events from "events"

class GreenPayService {
  shippingDetails
  paymentDetails
  stripe
  hasData = { stripe: null }
  eventEmitter

  constructor() {
    this.eventEmitter = new events.EventEmitter()
  }

  setStripe(stripe) {
    this.stripe = stripe
    this.hasData.stripe = true
  }

  setShippingDetails(shippingDetails) {
    if (shippingDetails.postCode) {
      this.shippingDetails = shippingDetails
      this.hasData.shippingDetails = true
    }
    this.checkData()
  }

  setPaymentDetails(paymentDetails) {
    this.paymentDetails = paymentDetails
    this.hasData.paymentDetails = true
    this.checkData()
  }

  setItems(items) {
    this.items = items
    this.hasData.items = true
    this.checkData()
  }

  checkData() {
    if (
      this.hasData.stripe &&
      this.hasData.shippingDetails &&
      this.hasData.paymentDetails &&
      this.hasData.items
    ) {
      this.eventEmitter.emit("DataComplete")
    }
  }

  async getFootprint() {
    const response = await axios.post("http://localhost:3001/footprint", {
      items: this.items,
      shipping: this.shippingDetails
    })
    return response.data.footprint
  }

  async makePayment(amount, card) {
    try {
      const paymentIntent = await axios.post(
        `http://localhost:3001/payment/intent/price/${(amount * 100).toFixed(
          0
        )}`
      )
      const paymentMethod = await axios.post(
        `http://localhost:3001/payment/method/${card.number}/${card.exp_month}/${card.exp_year}`
      )
      if (paymentIntent.data.client_secret && paymentMethod.data.id) {
        const result = await this.stripe.confirmCardPayment(
          paymentIntent.data.client_secret,
          {
            payment_method: paymentMethod.data.id
          }
        )
        return result
      }
    } catch (err) {
      return err
    }
  }
}

export default new GreenPayService()
