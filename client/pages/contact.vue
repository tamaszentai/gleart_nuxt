<template>
<div class="container">
  <v-card class="mx-auto mt-16" style="max-width: 80rem; height: 75vh; border-radius: 0" color="rgba(0, 0, 0, 0)" flat>
    <v-form class="contact-form" @submit.prevent="sendEmail">
      <v-text-field
        v-model="name"
        :rules="nameRules"
        style="min-height: 96px"
        label="Name"
        required
        filled
        color="green"
        name="user_name"
        background-color="rgba(255, 255, 255, .7)"
        rounded
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        style="min-height: 96px"
        filled
        color="green"
        label="Email address"
        type="email"
        name="user_email"
        background-color="rgba(255, 255, 255, .7)"
        rounded
      ></v-text-field>
      <v-textarea
        v-model="textarea"
        auto-grow
        filled
        color="green"
        label="Message"
        rows="4"
        name="message"
        background-color="rgba(255, 255, 255, .7)"
        rounded
      ></v-textarea>
            <v-btn
        :disabled="validator"
        class="mx-auto black--text"
        color="whitesmoke"
        type="submit"
        rounded
        depressed
        block
        value="Send"
      >
        SEND
      </v-btn>
    </v-form>
  </v-card>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'
export default {
  data: () => ({
    valid: false,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 30 || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    textarea: '',
    invalid: true
  }),
  methods: {
    sendEmail: (e) => {
      console.log(process.env.VUE_APP_EMAILJS_SERVICE_ID)
      emailjs
        .sendForm(
          process.env.VUE_APP_EMAILJS_SERVICE_ID,
          process.env.VUE_APP_EMAILJS_TEMPLATE_ID,
          e.target,
          process.env.VUE_APP_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            console.log('SUCCESS!', result.status, result.text)
            alert('The message has been sent to Lea!')
            e.target.reset()
          },
          (error) => {
            console.log('FAILED...', error)
            alert('Something went wrong')
          }
        )
    }
  },
  computed: {
    validator () {
      return (!this.name || !this.email || !this.textarea)
    }
  }
}
</script>
