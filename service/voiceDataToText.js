const recorder = require("node-record-lpcm16"),
      fs = require("fs"),
      speech = require('@google-cloud/speech');

// async function googleSpeechToText(audioBlob)
async function googleSpeechToText()
{
   const client = new speech.SpeechClient();
  // const filename = "public/assets/audios/demo_rec1.wav";
 
  // const file = fs.readFileSync(filename);
  // const audioBytes = file.toString('base64');
//   const audioBytes = audioBlob.toString('base64');

//   const audio = {
//     content: audioBytes
//   };
  // const config = {
  //   encoding:'LINEAR16',
  //   sampleRateHertz:44100,
  //   // demo_rec -> 48000
  //   languageCode: 'el-GR'
  // }
//   const request = {
//     audio:audio,
//     config:config
//   };
//  // Detects speech in the audio file
//   const [response] = await client.recognize(request);
//   const transcription = response.results
//     .map(result => result.alternatives[0].transcript)
//     .join('\n');
  // return transcription;

const request = {
  config: {
    encoding: 'LINEAR16',
    sampleRateHertz: 16000,
    languageCode: 'el-GR',
  },
  interimResults: false,
};
// Create a recognize stream
const recognizeStream = client
  .streamingRecognize(request)
  .on('error', console.error) 
  .on('data', data =>
    process.stdout.write(
      data.results[0] && data.results[0].alternatives[0]
        ? `Transcription: ${data.results[0].alternatives[0].transcript}\n`
        : `\n\nReached transcription time limit, press Ctrl+C\n`
    )
  );
// Start recording and send the microphone input to the Speech API
recorder
  .record({
    sampleRateHertz: 16000,
    threshold: 0,
    verbose: false,
    recordProgram: 'sox', // Try also "arecord" or "sox"
    silence: '10.0',
  })
  .stream()
  .on('error', console.error)
  .pipe(recognizeStream);
console.log('Listening, press Ctrl+C to stop.');

}
module.exports = googleSpeechToText;