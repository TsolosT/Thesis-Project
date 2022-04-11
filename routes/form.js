// const { default: regex } = require('uuid/dist/regex');

const express = require('express'),
      router  = express.Router(),
      //greek utils require isws
      { v4: uuidv4 } = require("uuid"), //For generating ID's
      { applicationData } = require('../model/fooFormData'),
       moment = require('moment');

//show form data route
router.get("/myforms",(req,res)=>{
    res.render('forms/myforms',{applicationData});
  });
//post a FORM route
router.post('/applicationData',(req,res)=>{
  
    const { lastName,firstName,idCardNumber,city } = req.body;
    applicationData.push({ lastName, firstName, idCardNumber, city, id: uuidv4() });
    //temp post data validation show
    console.log(applicationData[applicationData.length-1]);
  
    res.redirect('/');
  });

//test form
router.get('/form',(req,res)=>{
  res.render('forms/basicForm');
});
//exousiodotisi
router.get('/exousiodotisi',(req,res)=>{
  res.render('forms/exousiodotisi');
});
//Post affirmation form data
router.post('/exousiodotisi',(req,res)=>{
  let createdDate = `${moment().format("L")}`;
  let createdFileDate = `${moment().format("L")} ${moment().format("LT")}`;
  let newData = {
    app: "auth",
    id: uuidv4(),
    createdDate: createdDate,
    createdFileDate: createdFileDate,
    gentle:req.body.gender, 
    fullName: req.body.fullName,
    fathername: req.body.fathername,
    mothername: req.body.mothername,
    bdate: req.body.bdate,
    blocation: req.body.blocation,
    passportID: req.body.passportID,
    passportIDCreatedAt: req.body.passportIDCreatedAt,
    createdBy: req.body.createdBy,
    city: req.body.city,
    address: req.body.address,
    // to auth
    to_gentle:req.body.gender, 
    AuthfullName: req.body.AuthfullName,
    Authfathername: req.body.Authfathername,
    Authmothername: req.body.Authmothername,
    Autbdate: req.body.Autbdate,
    Authblocation: req.body.Authblocation,
    AuthpassportID: req.body.AuthpassportID,
    AuthpassportIDCreatedAt: req.body.AuthpassportIDCreatedAt,
    AuthcreatedBy: req.body.AuthcreatedBy,
    Authcity: req.body.Authcity,
    Authaddress: req.body.Authaddress,
    content: req.body.content,
  };
  newData.content = req.sanitize(req.body.content);
  try{
    applicationData.push(newData);
    // console.log(newData + " Form has been added");
    res.redirect('/myforms');
  }catch(error)
  {
    // debug
     console.log(error);
    res.render("error");
  }
});
//Create Affirmation application form
router.get('/ypedhl',(req,res)=>{
  res.render('forms/ypedhl');
});
//Post affirmation form data
router.post('/ypedhl',(req,res)=>{
  let createdDate =`${moment().format('L')}`;
  let createdFileDate =`${moment().format('L')} ${moment().format('LT')}`;
  let bdate = req.body.bdateDD+'/'+req.body.bdateMM+'/'+req.body.bdateYY ;
  let newData = {
    app: "aff",
    to: req.body.to,
    fname: req.body.fname,
    lname: req.body.lname,
    fatherFname: req.body.fatherFname,
    motherFname: req.body.motherFname,
    bdate: bdate,
    blocation: req.body.blocation,
    passportID: req.body.passportID,
    phone: req.body.phone,
    city: req.body.city,
    addressStreet:req.body.addressStreet,
    addressNO:req.body.addressNO,
    addressPC:req.body.addressPC,
    content: req.body.content,
    id: uuidv4(),
    createdDate: createdDate,
    createdFileDate: createdFileDate,
  };
  newData.content = req.sanitize(req.body.content);
  try{
    applicationData.push(newData);
    res.redirect('/myforms');
  }catch(error)
  {
    // debug
    console.log(error);
    res.render("error");
  }
});



module.exports = router;