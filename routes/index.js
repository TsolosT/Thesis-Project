const express = require('express'),
      router  = express.Router();
      
//Home route
router.get("/",(req,res)=>{ res.render("home");});
//Bad Request Route
router.get("*",(req,res)=>{res.render("error");});

module.exports = router;