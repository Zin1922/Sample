<template>
<body class="body-H">
    <div class="form-test-center1">
        <div>
            <center>
         <h2 class="a-text">Welcome to home page please click the buttons below if you would like to continue as Admin or a User</h2>
         </center>
        </div>
        <center>
        <div>
            <nuxt-link class="btn-style" to="/loginA">Admin logIn</nuxt-link>
        </div>
        <n/>
        <n/>
        <br/>
        <br/>
        <div>
            <nuxt-link style="margin-top= 12px" class="btn-style" to="/loginU">User logIn</nuxt-link>
        </div>
        </center>
    </div>


</body>

</template>


<style>
.body-H{
  margin: 0;
  padding: 0;
  width: 100%;
  background: linear-gradient(120deg,#8e44ad,#ec1f7f);
  height: 100vh;
  overflow: hidden;
}
.btn-style{
  border: 25rem;
  width:25%;
  padding: 23vh;
  background:linear-gradient(12deg,rgb(253, 104, 104),rgb(236, 33, 243));
  padding:12px;
}
.form-test-center1{
    border-collapse: collapse;
    height: 25;
    width: 55;
    padding:23vh;
    background-color: rgba(20, 18, 18, 0.219);
    border-radius: 5px;
    margin:25px auto;
    padding: 100px;
    color:rgb(250, 241, 241);

}
.a-text{
    margin-bottom: 3rem;
    font-family: 'Times New Roman', Times, serif;
}
</style>