<template>
  <section>
    <v-form class="contact-form" @submit.prevent="sendEmail">
      <v-container>
        <v-row style="margin: 0; padding: 0">
          <v-col cols="11" md="4">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="30"
              label="Name"
              required
              name="user_name"
            ></v-text-field>
          </v-col>
             <v-col cols="11" md="4">
                <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            name="user_email"
          ></v-text-field>
          </v-col>
          <v-col cols="11" md="6">
            <v-textarea
              name="message"
              label="Message"
              hint="Hint text"
            ></v-textarea>
          </v-col>
        </v-row>
           <v-btn
        class="mr-4"
        type="submit"
        :disabled="invalid"
        value="Send"
      >
        send
      </v-btn>
      </v-container>
    </v-form>
  </section>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
  data: () => ({
    valid: false,
    firstname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 30 || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
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
  }
}
</script>

<style scoped>
.contact-form {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
}

.mr-4 {
  display: block;
  margin: auto;
}
</style>
