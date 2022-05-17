<!-- main Interface for viewing can be considered as dashboard -->

<template>
    <main>
  <body class="body-in">
        <center>
          <h2 class="h2">Inventory</h2>
          </center>
      <form class="table-form">
        <div class=""  >
          <div v-for="(product, index) in products" :key="product._id">
            <ul>
              <li>
                    <div class=""  >
                        <span class=""></span>
                        <a href="iventory/index"></a>
                  <table class="table">
                    <tr class="nuxt-text">
                      <th>Name</th>
                      <th >Stock Quantity</th>
                      <th >Price</th>
                    </tr>
              
                    <tr class="nuxt-text" width="123px">
                      <td width="123px">
                        {{ product.title }}
                      </td>
                      <td>
                        {{  product.stockQuantity }}
                      </td>
                      <td>$
                        {{ product.price }}
                      </td>
                      <td ><nuxt-link type="button" :to="`/products/${product._id}`" class="nuxt-text" >Update</nuxt-link>  </td>
                      <td> <span type="button" class="" @click="onDelete(product._id, index)"> Delete </span> </td>
                    </tr>
                 <!--   <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr> -->
                  </table>
              </div>
              </li>
            </ul>

             </div>

        </div>
      </form>
      <footer>
      <center>
        <nuxt-link type="button" :to="`/products`"  class="btn-style3" style="width: calc(100%-50%)">Add product</nuxt-link>


        <nuxt-link type="button" to="/" class="btn-style3" style="width: calc(100%-50%)">Log Out</nuxt-link>
      </center>
      </footer>
  </body>
    </main>
</template>

<script>

export default {
  async asyncData({ $axios }){
    try{
      let response = await $axios.$get(`http://localhost:3000/api/products`); //Get all Products
      return {
        products : response.products
      };
    }catch(err) {
      console.log(err)
    }
  },
  methods: {
    async onDelete(id, index) {
      try{
       let response = await this.$axios.$delete(`http://localhost:3000/api/products/${id}`); //delete data from database
       
       if (response) {
         console.log(product)
        let product = this.products.splice(index, 1);
        console.log(product)
        }else {
          console.log(response)
        }
      }catch(err){
        console.log(err)
      }
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  border: 0;
}
.table-form {
display: center;
border: 1;
padding: 12;
margin: 25px auto;
width: 1019px;
background-color: rgb(178, 250, 250)50%;
}  
.nav-text{
  border-collapse:collapse;
  display: center;
  margin: 25px auto;
  background-color: rgba(128, 128, 128, 0.925)60%;
}
.body-in{
  margin: 0;
  padding: 0;
  width: 100%;
  background: linear-gradient(120deg,#2980b9,#8e44ad);
  height: 100vh;
  overflow:auto;
}
.nuxt-text{
  font-family: Bold;
  color: #fff;
}
.btn-style3{
  border: 25rem;
  width:100;
  background:linear-gradient(12deg,rgb(253, 104, 104),rgb(236, 33, 243));
  padding:12px;
}

</style>
