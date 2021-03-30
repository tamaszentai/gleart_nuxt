<template>
<div class="container">
  <v-card class="mx-auto mt-16" style="max-width: 80rem; height: 75vh; border-radius: 0" color="rgba(0, 0, 0, 0)" flat>
    <v-form class="contact-form" @submit.prevent="sendEmail" v-model="form">
      <v-text-field
        v-model="name"
        :rules="[rules.required]"
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
        :rules="[rules.email, rules.required]"
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
        :rules="[rules.required]"
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
        :disabled="!form"
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
    form: false,
    name: undefined,
    email: undefined,
    textarea: undefined,
    rules: {
      email: v => !!(v || '').match(/@/) || 'Please enter a valid email',
      length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
      required: v => !!v || 'This field is required'
    }
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
