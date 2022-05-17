<!--    User Log in    -->

<template>
<main>
  <body class="body-U">
    <div class="">
      <form class="form-test-center">
        <h2>User Login</h2>
        <div class="">
          <lavbel class="">Email</lavbel>
          <input type="text" class="" v-model="email" placeholder="email" id="email">
        </div>
        <div class="">
          <lavbel class="">Password</lavbel>
          <input type="password" class="" v-model="password" placeholder="password" id="password">
        </div> 
      </form>
    </div>
    <center>
      <span type="button" class="btn-styleU" @click="onLogin()">Log In</span>
      <br/>
      <br/>
      <b>
        Doesn't have an account yet? Click <nuxt-link :to="`/loginU/signup`">Sign Up</nuxt-link> to create an admin account now!
      </b>
      <div class="">
                <b>
                    Back to Home Page? click
                    <nuxt-link to="/" class="">Here</nuxt-link>
                </b>
            </div> 
    </center>
  </body>
</main>
</template>

<script>
export default {
routes: 'auth',
auth: 'gust',
layout: 'none',

data() {
  return{
    email: "",
    password: ""
  };
}, //POST form for user login
methods: {
  async onLogin() {
    try{
      let data = {
        email: this.email,
        password: this.password,
      }
        let response = await this.$axios.$post('http://localhost:3000/api/auth/users', data);

        console.log(response)

        if(response.success){
          this.$auth.loginWith("local", {
            data: {
              email: this.email,
              password: this.password
            }
          });

          this.$router.push('/inventory/userpriv');
        }else {
          console.log(err)
        };
    }catch(err){
      console.log(err);
    }
  }
}
};

</script>


<style> 
.body-U{
  margin: 0;
  padding: 0;
  width: 100%;
  background: linear-gradient(120deg,#8e44ad,#ec1f7f);
  height: 100vh;
  overflow: hidden;
}
.center{
  display: center;
  margin: 50px auto;
  background: transparent;
  border: 12vh;
  padding: 50vh;
}
.form-login{
    height:75vh;
    background-color: rgba(46, 250, 189, 0.808)30%;
    border-radius: 12px;
    margin:25px auto;
    padding: 100px;
    display: center;
}
.form{
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: aquamarine, transparent !important;
  display: center;
}
.form-test-center{
    border-collapse: collapse;
    width: 25em;
    background-color: rgba(20, 18, 18, 0.219);
    border-radius: 5px;
    margin:25px auto;
    padding: 100px;
    color:rgb(250, 241, 241);
}
.btn-styleU{
  border: 25rem;
  width:50%;
  background:linear-gradient(12deg,rgb(253, 104, 104),rgb(236, 33, 243));
  padding:12px;
}
</style>
