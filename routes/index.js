const express = require('express'),
      router  = express.Router(),
      googleSpeechToText = require('../service/voiceDataToText'),
      multer = require('multer');
      
const upload = multer();

//Home route
router.get("/",(req,res)=>{
    //  googleSpeechToText();
    res.render("home");
});
// router.post("/", upload.any(), async (req, res) => {
//     console.log("Getting text transcription..");
//     let transcription = await googleSpeechToText(req.files[0].buffer);
//     console.log("Text transcription: " + transcription);
//     // res.status(200).send(transcription).render("home");
// });

//Bad Request Route
router.get("*",function(req,res){
    res.render("error");
});

module.exports = router;