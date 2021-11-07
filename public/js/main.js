const microBtns = document.querySelectorAll(".btn-micro");
const inputs = document.querySelectorAll('input');


const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log("voice is activate,you can to microphonee");
};
// recognition.onspeechend =function(){}
recognition.onresult = function (event) {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
//   console.log(transcript);
  inputs[0].value=transcript;
  //send data via ajax
  //get them and print them
};

// add listener
microBtns[0].addEventListener("click", () => {
  recognition.start();
});

