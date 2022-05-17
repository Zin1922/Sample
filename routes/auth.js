const router = require('express').Router();
const User = require('../model/user');
const Admin = require("../model/admin");
const verifyToken = require("../middlewares/verify-token");

const jwt = require("jsonwebtoken")

//POST API 
router.post('/signup', async (req, res) => {
    if (!req.body.email || !req.body.password ) {
        res.json({  success: false, message: "Please enter email, password and access key"  });
    }else {
        try{
            let newUser = new User();
            newUser.name = req.body.name;
            newUser.email = req.body.email;
            newUser.password = req.body.password;
            await newUser.save();
            let token = jwt.sign(newUser.toJSON(), process.env.SECRET, {
                expiresIn: 604800 //1week
            });

            res.json({
                success: true,
                token: token,
                message: 'New admin successfully created'
            })
        }catch(err){
            res.status(500).json({
                success: false,
                message: err.message
            });
        }
    }
});

//Post for admin login
router.post(`/auth/admins`, async (req, res) => {
    try {
        let foundAdmin = await Admin.findOne({ password: req.body.password });
        if (!foundAdmin) {
            res.status(403).json({
                success: false,
                message: "admin not found"
            });
        }else {
            if(foundAdmin.compareaccessKey(req.body.accessKey)) {
                let token = jwt.sign(foundAdmin.toJSON(), process.env.SECRET, {
                    expiresIn: 604800 //1 week
                });

                res.json({ success: true, token: token });
            } else {
                res.status(403).json({
                    success: false,
                    message: "access key is Wrong. Please try again"
                })
            }
        }
    }catch (err) {
        console.log(err)
        res.status(500).json({
            success: false,
            message: err.message    
        });
    }
});

//Post User login
router.post('/auth/users', async (req, res) => {
    try{
        let foundUser = await User.findOne({ email: req.body.email});

        if(!foundUser){
            console.log(err)
            res.status(403).json({
                success: false,
                message: "Email is incorrect"
            });
        } else{
            if(foundUser.comparePassword(req.body.password)){
                let token = jwt.sign(foundUser.toJSON(), process.env.SECRET, {
                    expiresIn: 604800 //1 week
                });
                res.json({
                    success: true,
                    token: token
                });
            }else {
                res.json({
                    success: false,
                    message: "Password is incorrect"
                });
            }
        }
    }catch(err){
        console.log(err)
        res.status(500).json({
            success: false,
            message: err.message    
        });
    }
})

//Post user
router.post(`/auth/signup`, async (req, res) => {
    try {
        let user = new User();
        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;
        

        await user.save();
        res.json({
            success: true,
            message: "User access created Successfully"
        });
        
    }catch(err){
        console.log(err)
        res.status(500).json({
            success: false,
            message: "User access creation Failed"
        });
    }
});

//Get api for user
router.get('/auth/user', async (req, res) => {
    try{
    let user = await User.find();
    res.json({
        success: true,
        user: user
    });
    }catch (err) {
        res.status(500).json({
            success: true,
            message: err.message
        });
    }
}); 
module.exports = router;