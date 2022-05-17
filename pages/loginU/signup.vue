<template>
<main>
    <body class="body1">
        <div class="test-container1">
            <form class="">
                <h1>Create Account</h1>

                <!--  Name  -->
                <div class="row-a-spacing">
                    <lablel for="" class-="">Your Name</lablel>
                    <input type="text" class="" 
                    style="" v-model="name">
                </div>
                <!--  Email  -->
                <div class="row-a-spacing">
                    <lablel for="" class-="">Email</lablel>
                    <input type="text" class="" 
                    style="" v-model="email">
                </div>
                <!--  Password  -->
                <div class="row-a-spacing">
                    <lablel for="" class-="">Password</lablel>
                    <input type="password" class="" 
                    style="" v-model="password">
                </div>
            </form>

            <div class="">
                <span type="button" class="btn-style1" @click="onSignup">Create Account</span>
            </div>
            <div class="">
                <b>
                    Already have an account? Click
                    <nuxt-link to="/loginU" class="">Sign In</nuxt-link>
                </b>
            </div> 
            <div class="">
                <b>
                    Back to Home Page? click
                    <nuxt-link to="/" class="">Here</nuxt-link>
                </b>
            </div> 
        </div>
    </body>

</main>

</template>


<script>
export default {
    routes: "auth",
    auth: "gust",
    layout: "none",

data() {
    return {
        name: "",
        email: "",
        password: ""
    };
},

 methods: {
     async onSignup() {
         try{
             let data = {
                 name: this.name,
                 email: this.email,
                 password: this.password
             }
             let response = await this.$axios.$post(`http://localhost:3000/api/auth/signup`, data);
                

             console.log(response);

             if(response.success){
                 this.$auth.loginWith("local", {
                     data: {
                         name: this.name,
                         email: this.email,
                         password: this.password
                         
                     }
                 }, this.$router.push('/loginU') );
             }else {
                 console.log(err)
             }
         }catch (err) {
             console.log(err)
            }  
        }
    }
}
</script>

<style>
.body1{
  margin: 0;
  padding: 0;
  width: 100%;
  background: linear-gradient(120deg,#2980b9,#8e44ad);
  height: 100vh;
}
.test-container1{
    border-collapse: collapse;
    width: 25em;
    background-color: rgba(20, 18, 18, 0.219);
    border-radius: 5px;
    margin:25px auto;
    padding: 100px;
    color:rgb(250, 241, 241);
}
.btn-style1{
  border: 25rem;
  width:100;
  background:linear-gradient(12deg,rgb(253, 104, 104),rgb(236, 33, 243));
  padding:12px;
  margin-bottom: 0.75rem;
  margin-top: 0.23rem;
  color: blue;
}
</style>