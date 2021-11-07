require('dotenv').config();
//config local server port
const port=process.env.PORT || 3000;
//requires
const express = require("express"),
  app = express(),
  path = require("path"),
  methodOverride = require("method-override"),
  // greekUtils     = require('greek-utils'),
  { v4: uuid } = require("uuid"), //For generating ID's
  recorder = require("node-record-lpcm16"),
  fs = require("fs"),
  speech = require('@google-cloud/speech');

//require routes

//foo DB temp
let applicationData = [
  {
    id: uuid(),
    lastName: "ΤΣΟΛ",
    firstName: "ΝΙΚΟΣ",
    idCardNumber: "AM 4812",
    city: "ΑΘΗΝΑ"
  }
];

//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }));
// To parse incoming JSON in POST request body:
app.use(express.json())
// To 'fake' put/patch/delete requests:
app.use(methodOverride('_method'));
// Views,Public folder and EJS setup:
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');
app.set('views', path.join(__dirname, '/views'));

async function main()
{
  const client = new speech.SpeechClient();
  const filename = "public/assets/audios/demo_rec.wav";
 

  const file = fs.readFileSync(filename);
  const audioBytes = file.toString('base64');

  const audio = {
    content: audioBytes
  };
  const config = {
    encoding:'LINEAR16',
    sampleRateHertz:48000,
    languageCode: 'el-GR'
   
  }
  const request = {
    audio:audio,
    config:config
  };
 // Detects speech in the audio file
  const [response] = await client.recognize(request);
  const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');
  console.log(`Transcription: ${transcription}`);
}



//Basic routes
//Home route
app.get("/",(req,res)=>{
    // main();
    res.render("home");
});
// TEMP ROUTE PATH
//show data
app.get("/myforms",(req,res)=>{
  res.render('forms/myforms',{applicationData});
})
//post FORM
app.post('/applicationData',(req,res)=>{

  const { lastName,firstName,idCardNumber,city } = req.body; //greekUtils.sanitizeDiacritics(req.body);
  applicationData.push({ lastName, firstName, idCardNumber, city, id: uuid() });
  //temp post data validation show
  console.log(applicationData[applicationData.length-1]);

  res.redirect('/');
});
//Bad Request Route
app.get("*",function(req,res){
    res.render("error");
});



//Server Start Point
app.listen(port, process.env.IP, function() {
  console.log(
    "Server has started on 3000 port local....press ctrl+C to stop !"
  );
});