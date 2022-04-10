// const { default: regex } = require('uuid/dist/regex');

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

router.get('/pdf/:id/donwload',(req, respond) => {
  let reqPDF = req.params.id;
  let pdfData = applicationData.find((form) => {
    return form.id === reqPDF;
  });

  let html =
    pdfData.app === "aff"
      ? fs.readFileSync("./views/print/affirmation.html", "utf8")
      : fs.readFileSync("./views/print/authtemplate.html", "utf8");

  let document = {
    html: html,
    data: {
       data: pdfData,
    },
    path: `./storage/${req.params.id}.pdf`,
    type: "",
  };
  pdf
    .create(document, options)
    .then((res) => {
    //console.log(res.filename);
      respond.download(res.filename); 
    })
    .catch((error) => {
      console.error(error);
    });
});       


module.exports = router;