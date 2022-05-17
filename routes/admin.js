const router = require(`express`).Router();
const Admin = require(`../model/admin`);

//API condition
router.post(`/admins`, async (req, res) => {
    try{
        let admin = new Admin();
        admin.name = req.body.name;
        admin.email = req.body.email;
        admin.password = req.body.password;
        admin.accessKey = req.body.accessKey;


        await admin.save();
        
        res.json({
            success: true,
            message: "Admin access created Successfully"
        });
        
    }catch(err){
        console.log(err)
        res.status(500).json({
            success: false,
            message: "Admin access creation Failed"
        });
    }
});


//GET Api
router.get(`/admins`, async (req, res) =>{
  try{
    let admin = await Admin.find();
        admin.email = req.body.email,
        admin.password = req.body.password,
        admin.accessKey = req.body.accessKey
   
        res.json({
            success: true,
            admin: admin
        });
    
  
  }  catch(err){
      req.status(500).json({
          success: false,
          message: err.message
      });
  }
});


//post api to login
router.post(`/api/admins`, async (req, res) => {
    try {
        let foundAdmin = await Admin.findOne({ email: req.body.email });
        if (!foundAdmin) {
            res.status(403).json({
                success: false,
                message: "admin not found"
            });
        }else {
            if(foundAdmin.compareaccesskey(req.body.accessKey)) {
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
        res.status(500).json({
            success: false,
            message: err.message    
        });
    }
});


module.exports = router;