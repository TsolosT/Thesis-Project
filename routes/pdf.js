const { default: regex } = require('uuid/dist/regex');

const express = require('express'),
      router  = express.Router(),
      { applicationData } = require('../model/fooFormData'),
       moment = require('moment'),
       pdf = require("pdf-creator-node"),
       fs = require('fs');


 //pdf config
let options = {
    format: "A4",
    orientation: "portrait",
};

router.get('/pdf/:id/donwload',(req,res)=>{
    let html = fs.readFileSync('./views/print/affirmation.html', 'utf8');
    let document = {
        html: html,
        data: {
        //   form: users,
        },
        path: `./storage/${req.params.id}.pdf`,
        type: "",
      };
    pdf.create(document, options)
    .then((res) => {
        console.log(res);
      })
    .catch((error) => {
     console.error(error);
     });
    //send
    res.send('GG');
  });       


  //template Request Route not working
router.get("/pdf",(req,res)=>{
    res.sendFile(path.join(__dirname+'/affirmation.html'));
});

module.exports = router;