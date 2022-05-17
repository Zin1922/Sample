<template>
<main>
    <body class="body-add">
                <form class="invoice-formadd">
                            <h1 class="text-white">Add Product</h1>
                            <!-- Your Name -->
                            <div class="">
                                <label for="ap_customer_name" class="text-white">Product Title</label>
                                <input type="text" class="" v-model="title">
                            </div>
                            <!-- Email -->
                            <div class="">
                                <label for="ap_product_quantity" class="text-white">Stock Quantity</label>
                                <input type="Number" class="" v-model="stockQuantity">
                            </div>
                            <!-- Password -->
                            <div class="">
                                <label for="ap_product_price" class="text-white">Price</label>
                                <input type="number" class="" v-model="price">
                            </div>
                                <div class="">
                                    <n/>
                                    <b>
                                      <span type="button" class="btn-outline-lightadd" @click="onAddProduct()"> Add Product </span>
                                    </b>
                                </div>
                                <div class="">
                                    <b>
                                      <nuxt-link type="button" style="width: 100%" to="/" class="btn-outline-lightadd"> Log Out </nuxt-link>
                                    </b>
                                </div>
                </form>
</body>
</main>
</template>


<script>
export default {
data() {
    return {
        title: "",
        stockQuantity: "",
        price: ""
    };
},
// new function try
/*methods: {
    async onAddProduct(){
        let data = new FormData();
        data.append('title', this.title);
        data.append('stockQuantity', this.stockQuantity);
        data.append('price', this.price);

        let result = await this.$axios.$post('http://localhost:3000/api/products');

        if(result){
            res.json({
                success: true,
                messasge: "Product Successfully added"
            });
        }else {
            res.status(500).json({
                success: false,
                message: err.message
            })
        }

        this.$router.push('/inventory')
    }
} */

//very first old method of adding data
 methods: {
     async onAddProduct() {
         try{
             let data = {
                 title: this.title,
                 stockQuantity: this.stockQuantity,
                 price: this.price
             }

             let response = await this.$axios.$post("http://localhost:3000/api/products", data);
             this.$router.push(`/inventory`);

             console.log(response)

         }catch (err) {
             console.log(err)
            };  
        },
    },
};
</script>


<style>
.body-add{
  margin: 0;
  padding: 0;
  width: 100%;
  background: linear-gradient(120deg,#2980b9,#8e44ad);
  height: 100vh;
  overflow: auto;
}
.btn-outline-lightadd {
    font-family: Impact, sans-serif;
  border: 12rem;
  padding: 12px;
  color: rgba(14, 19, 15, 0.959);
  background-color: transparent;
  margin: 25px auto;
}
.invoice-formadd{
    border-collapse: collapse;
    width: 25em;
    background-color: rgba(20, 18, 18, 0.219);
    border-radius: 5px;
    margin:25px auto;
    padding: 100px;
}
.container{
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

</style>