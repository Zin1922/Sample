<template>
<main>
    <body class="body-up">
<div class="">
                <form class="invoice-formup">
                    <div class="">
                        <div class="">
                            <h2 class="" >UPDATE {{  product.title }}</h2>
                            <div class="">
                                <label for="ap_customer_name" class="text-whiteup">Product Title</label>
                                <input type="text" id="ap_customer_name" class="" v-model="title" :placeholder="product.title">
                            </div>
                            <!-- Email -->
                            <div class="">
                                <label for="ap_customer_name" class="text-whiteup">Stock Quantity</label>
                                <input type="Number" id="ap_customer_name" class="" v-model="stockQuantity" :placeholder="product.stockQuantity">
                            </div>
                            <!-- Password -->
                            <div class="">
                                <label for="ap_customer_name" class="text-whiteup">Price</label>
                                <input type="number" id="ap_customer_name" class="" v-model="price" :placeholder="product.price">
                            </div>
                        </div>
                    </div>
                </form>
            </div>

                <center>
                <div class="">
                <button :to="`/inventory`" class="btn-outline-lightup" @click="onUpdateProduct"> Update Product </button>
               <nuxt-link type="button" class="btn-outline-lightup" :to="`/inventory`"> Cancel</nuxt-link>
              </div>
              </center>
</body>
</main>
</template>
    
<script>
export default {
    async asyncData({ $axios, params }) {
        try {
            let product = $axios.$get(`http://localhost:3000/api/products/${params.id}`);

            const [productResponse] = await Promise.all([product]);
            return {
                product: productResponse.product
            };
        }catch(err){
            console.log(err);
        }
    },
    data() {
        return {
            title: "",
            stockQuantity: "",
            price: ""
        };
    },
    methods: {
     async onUpdateProduct() {
         try{
             let data = {
                 title: this.title,
                 stockQuantity: this.stockQuantity,
                 price: this.price
             }
             this.$router.push('/inventory')
               
             let response = await this.$axios.$put(`http://localhost:3000/api/products/${this.$route.params.id}`, data);
                

             console.log(response)

         }catch (err) {
             console.log(err)
            }  
        }
    }
}
</script>

<style>
.btn-outline-lightup {
  border: 25rem;
  width:25%;
  padding: 23vh;
  background:linear-gradient(12deg,rgb(253, 104, 104),rgb(236, 33, 243));
  padding:12px;
}
.body-up{
  margin: 0;
  padding: 0;
  width: 100%;
  background: linear-gradient(120deg,#2980b9,#8e44ad);
  height: 100vh;
  overflow: auto;
}
.invoice-formup{
    border-collapse: collapse;
    width: 25em;
    background-color: rgba(20, 18, 18, 0.219);
    border-radius: 5px;
    margin:25px auto;
    padding: 100px;
}
.containerup{
    background-color: rgb(255, 218, 185)50%;
    border-radius: 12px;
    padding: 12;
    border: 12px;
    width: 200px;
    height: 70px;
    margin: auto;
    text-transform: uppercase;
    font-family: sans-serif;
}
.nav-textup{
    background-color: linear-gradient(23deg, rgb(142, 7, 231),rgb(255, 35, 244));
}
.text-whiteup{
    color:aliceblue;
}

</style>