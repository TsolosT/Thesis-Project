const express = require('express'),
      router  = express.Router(),
      //greek utils require isws
      { v4: uuid } = require("uuid"), //For generating ID's
      { applicationData } = require('../model/fooFormData');

//show form data route
router.get("/myforms",(req,res)=>{
    res.render('forms/myforms',{applicationData});
  });
//post a FORM route
router.post('/applicationData',(req,res)=>{
  
    const { lastName,firstName,idCardNumber,city } = req.body; //greekUtils.sanitizeDiacritics(req.body);
    applicationData.push({ lastName, firstName, idCardNumber, city, id: uuid() });
    //temp post data validation show
    console.log(applicationData[applicationData.length-1]);
  
    res.redirect('/');
  });
//exousiodotisi
router.get('/exousiodotisi',(req,res)=>{
  res.render('forms/exousiodotisi',{applicationData});
});

//ypedhl
router.get('/ypedhl',(req,res)=>{
  res.render('forms/ypedhl',{applicationData});
});
module.exports = router;