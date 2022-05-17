<template>
<main>
    <body class="body2">
        <div class="">
            <form class="test-container2">
                <h1>Create Admin Account</h1>
                <!--  Admin Name  -->
                <div class="">
                    <label>Full Name</label>
                    <input type="text" id="ap_custome_name" class="" 
                    style="" v-model="name">
                </div>
                <!--  Admin Name  -->
                <div class="">
                    <label>Email</label>
                    <input type="text" class="" 
                    style="" v-model="email">
                </div>
                <!--  Admin Name  -->
                <div class="">
                    <label>Password</label>
                    <input type="password" class="" 
                    style="" v-model="password">
                </div>
                <!--  Access KEy  -->
                <div class="">
                    <label>Access Key</label>
                    <input type="password" class="" 
                    style="" v-model="accessKey">
                </div>
            </form>
            <center>
            <div >
                <span type="button" class="btn-style2" @click="onSignup">Sign Up</span>
            </div>
            <div >
                <b>
                    Already have an account? click
               <nuxt-link to="/loginA">Sign In</nuxt-link>
               </b>
            </div>
            <div >
                <span type="button" class="btn-style2" :to="`/`">home page</span>
            </div>
            </center>
        </div>
    </body>
</main>
</template>

<script>
export default {
    routes: "admin",
    auth: "gust",
    layout: "none",

data() {
    return {
        name: "",
        email: "",
        password: "",
        accessKey: ""
    };
},

 methods: {
     async onSignup() {
         try{
             let data = {
                 name: this.name,
                 email: this.email,
                 password: this.password,
                 accessKey: this.accessKey
             }
               
             let response = await this.$axios.$post(`http://localhost:3000/api/admins`, data);
                

             console.log(response);

             if(response.success){
                 this.$auth.loginWith("local", {
                     data: {
                         name: this.name,
                         email: this.email,
                         password: this.password,
                         accessKey: this.accessKey
                         
                     }
                 },   this.$router.push('/loginA') );
                console.log(response)
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
.body2{
  margin: 0;
  padding: 0;
  width: 100%;
  background: linear-gradient(120deg,#66bbf3,#fc26d8);
  height: 100vh;
  overflow:auto;
}
.test-container2{
    border-collapse: collapse;
    width: 25em;
    background-color: rgba(20, 18, 18, 0.219);
    border-radius: 5px;
    margin:25px auto;
    padding: 100px;
    color:rgb(249, 255, 255);
}
.btn-style2{
  border: 25rem;
  width:100;
  background:linear-gradient(12deg,rgb(253, 104, 104),rgb(236, 33, 243));
  padding:12px;
  margin-bottom: 0.75rem;
  margin-top: 0.23rem;
  color: blue;
}
</style>