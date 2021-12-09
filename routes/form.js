const { default: regex } = require('uuid/dist/regex');

const express = require('express'),
      router  = express.Router(),
      //greek utils require isws
      { v4: uuid } = require("uuid"), //For generating ID's
      { applicationData } = require('../model/fooFormData'),
       googleSpeechToText  = require('../service/voiceDataToText.js');

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

//test form
router.get('/form',(req,res)=>{
  // googleSpeechToText();
  res.render('forms/basicForm');
});
//exousiodotisi
router.get('/exousiodotisi',(req,res)=>{
  res.render('forms/exousiodotisi');
});
//Post affirmation form data
router.post('/exousiodotisi',(req,res)=>{
  let newData = { 
    id: uuid(),
    // gentle:req.body.gentle, select fix
    fullName:req.body.fullName,
    fathername:req.body.fathername,
    mothername:req.body.mothername,
    bdate:req.body.bdate,
    blocation:req.body.blocation,
    passportID:req.body.passportID,
    passportIDCreatedAt:req.body.passportIDCreatedAt,
    createdBy:req.body.createdBy,
    city:req.body.city,
    address:req.body.address,
    // to auth
    // gentle:req.body.gentle, select fix
    AuthfullName:req.body.AuthfullName,
    Authfathername:req.body.Authfathername,
    Authmothername:req.body.Authmothername,
    Autbdate:req.body.Autbdate,
    Authblocation:req.body.Authblocation,
    AuthpassportID:req.body.AuthpassportID,
    AuthpassportIDCreatedAt:req.body.AuthpassportIDCreatedAt,
    AuthcreatedBy:req.body.AuthcreatedBy,
    Authcity:req.body.Authcity,
    Authaddress:req.body.Authaddress,
    content:req.body.content,
   
  };
  newData.content = req.sanitize(req.body.content);
  try{
    applicationData.push(newData);
    // console.log(newData + " Form has been added");
    res.redirect('/forms/myforms');
  }catch(error)
  {
    // debug
    // console.log(error);
    res.render("error");
  }
});
//Create Affirmation application form
router.get('/ypedhl',(req,res)=>{
  res.render('forms/ypedhl');
});
//Post affirmation form data
router.post('/ypedhl',(req,res)=>{
  let newData = {
    to:req.body.to,
    fname:req.body.fname,
    lname:req.body.lname,
    fatherFname:req.body.fatherFname,
    motherFname:req.body.motherFname,
    bdate:req.body.bdate,
    blocation:req.body.blocation,
    passportID:req.body.passportID,
    phone:req.body.phone,
    city:req.body.city,
    address:req.body.address,
    content:req.body.content,
    id: uuid()
  };
  newData.content = req.sanitize(req.body.content);
  try{
    applicationData.push(newData);
    // console.log(newData + " Form has been added");
    res.redirect('/forms/myforms');
  }catch(error)
  {
    // debug
    // console.log(error);
    res.render("error");
  }
});

module.exports = router;