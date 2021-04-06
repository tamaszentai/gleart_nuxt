<template>
  <div class="form">
    <h2>Send me a message</h2>
    <form class="contact-form" @submit.prevent="sendEmail">
      <input type="text" name="user_name" placeholder="Full Name" required/>
      <input type="email" name="user_email" placeholder="Email" required/>
      <textarea
        placeholder="Message"
        name="message"
        required
      ></textarea>
      <input type="submit" value="Send Message" />
    </form>
  </div>
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
.form{
  width: 90vw;
  padding: 30px;
  background: rgba(255,255,255,0.5);
  margin: auto;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
  -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
  margin-top: 8rem;
  height: auto;
}
.form h2 {
  background: #343a40;
  text-transform: uppercase;
  color: whitesmoke;
  font-size: 18px;
  font-weight: 100;
  padding: 20px;
  margin: -30px -30px 30px -30px;
}
.form input[type="text"],
.form input[type="email"],
.form textarea {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  outline: none;
  display: block;
  width: 100%;
  padding: 0.7rem;
  border: none;
  border-bottom: 1px solid black;
  margin-bottom: 3rem;
  height: auto;
}
.form textarea {
  resize: none;
  overflow: hidden;
}
.form input[type="button"],
.form input[type="submit"] {
  -moz-box-shadow: inset 0px 1px 0px 0px black;
  -webkit-box-shadow: inset 0px 1px 0px 0px black;
  box-shadow: inset 0px 1px 0px 0px black;
  background-color: #343a40;
  border: 1px solid black;
  display: block;
  cursor: pointer;
  color: #ffffff;
  font-size: 14px;
  padding: 8px 18px;
  text-decoration: none;
  text-transform: uppercase;
  margin: auto;
}
.form input[type="button"]:hover,
.form input[type="submit"]:hover {
  background: black;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: rgb(73, 71, 71);
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: rgb(73, 71, 71);
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: rgb(73, 71, 71);
}

/* Extra small devices (phones, 576px and down) */
@media only screen and (max-width: 576px) {}

/* Small devices (portrait tablets and large phones, 676px and up) */
@media only screen and (min-width: 576px) {}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
   .form {
    width: 90vw;
  }

  .form input[type="text"],
  .form input[type="email"],
  .form textarea {
    margin-bottom: 8rem;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .form {
    width: 60rem;
  }

  .form input[type="text"],
  .form input[type="email"],
  .form textarea {
    margin-bottom: 15rem;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .form {
    width: 60rem;
  }

  .form input[type="text"],
  .form input[type="email"],
  .form textarea {
    margin-bottom: 8rem;
  }
}
</style>
