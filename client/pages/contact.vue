<template>
  <section>
    <form class="contact-form" @submit.prevent="sendEmail">
      <label>Name</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email" required />
      <label>Message</label>
      <textarea name="message" rows="10" required></textarea>
      <input type="submit" value="Send" />
    </form>
  </section>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
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
label {
  font-size: 2rem;
  height: 5rem;
  display: block;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

input[type=text]{
  width: 80%;
  font-size: 2rem;
  height: 2rem;
  display: block;
  margin: auto;
  background-color: whitesmoke;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}

input[type=email]{
  width: 80%;
  font-size: 2rem;
  height: 2rem;
  display: block;
  margin: auto;
  background-color: whitesmoke;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}

textarea {
  width: 80%;
  display: block;
  margin: auto;
  font-size: 2rem;
  background-color: whitesmoke;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}

input[type=submit] {
  display: block;
  margin-bottom: 1rem;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  height: 3rem;
  width: 80%;
  border: none;
  font-size: 2rem;
  font-family: 'Texturina', serif;
  background-color: whitesmoke;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}

/* Extra small devices (phones, 599px and down) */
@media only screen and (max-width: 599px) {
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
}

/* Medium devices (landscape tablets, 900px and up) */
@media only screen and (min-width: 900px) {
  .contact-form {
    margin-top: 5rem;
  }
  label {
    display: block;
    padding-left: 25rem;
    font-size: 1.5rem;
    text-align: center;
  }

  input[type=text] {
    width: 25rem;
    margin-left: 50%;
  }
  input[type=email] {
    width: 25rem;
    margin-left: 50%;
  }
  textarea {
    width: 25rem;
    margin-left: 50%;
  }
  input[type=submit] {
    width: 25rem;
    margin-left: 50%;
  }
}

/* Large devices (laptops/desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .contact-form {
    margin-top: 5rem;
  }
  label {
    display: block;
    padding-left: 25rem;
    font-size: 1.5rem;
    text-align: center;
  }

  input[type=text] {
    width: 50rem;
    margin-left: 40%;
  }
  input[type=email] {
    width: 50rem;
    margin-left: 40%;
  }
  textarea {
    width: 50rem;
    margin-left: 40%;
  }
  input[type=submit] {
    width: 50rem;
    margin-left: 40%;
  }
}
</style>
