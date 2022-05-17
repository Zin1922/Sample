const router = require('express').Router();
const Product = require('../model/product');

//PRoduct API condition

//Post Api creat a new product
router.post('/products', async (req, res) => {
    try{
        let product = new Product();
        product.title = req.body.title;
        product.stockQuantity = req.body.stockQuantity;
        product.price = req.body.price;

        await product.save();

        res.json({
            status: true,
            message: "Successfully saved"
        });
    }catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

//Get API get all products
router.get('/products', async (req, res) => {
    try{
        let products = await Product.find();
            res.json({
            success: true,
            products: products
        });
    }catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

//Delete product delete a single product
router.delete('/products/:id', async(req, res) => {
    try{
        let deletedProduct = await Product.findOneAndDelete({ _id: req.params.id })
          if (deletedProduct) {
              res.json({
                  succes: true,
                deletedProduct: deletedProduct.products
              });
         } else {
             
              res.json({
                 success: false,
                  message: "Already deleted"  
             });
         };
    }catch(err) {
        console.log(err)
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

//Get request - get a single product
router.get('/products/:id', async(req, res) => {
    try{
        let product = await Product.findOne({ _id: req.params.id });
            res.json({
                success: true,
                product: product
            })
    }catch(err) {
        res.status(500).json({
            status: false,
            message: err.message
        });
    }
});

//Put update single product
router.put('/products/:id', async (req, res) => {
    try{
        console.log(req.body)
        let product = await Product.findOneAndUpdate({ _id: req.params.id  }, {
            $set: {
                title: req.body.title,
                stockQuantity: req.body.stockQuantity,
                price: req.body.price
            }
        },
            { upsert: true } 
        );

            res.json({
                success: true,
                updatedProduct: product
            })
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

module.exports = router;