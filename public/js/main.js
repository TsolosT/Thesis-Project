const microBtns = document.querySelectorAll(".btn-micro");
const inputs = document.querySelectorAll('input');


// const SpeechRecognition =
//   window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition();

// recognition.onstart = function () {
//   console.log("voice is activate,you can to microphone");
// };
// // recognition.onspeechend =function(){}
// recognition.onresult = function (event) {
//   const current = event.resultIndex;
//   const transcript = event.results[current][0].transcript;
// //   console.log(transcript);
//   inputs[0].value=transcript;
//   //send data via ajax
//   //get them and print them
// };

// // add listener
// microBtns[0].addEventListener("click", () => {
//   recognition.start();
// });



// microBtns[0].addEventListener("click", startRecording);

// function startRecording() {

//     let constraints = { audio: true, video:false }

//     microBtns[0].disabled = true;

//     navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
//         const audioContext = new window.AudioContext();
//         audioStream = stream;
//         const input = audioContext.createMediaStreamSource(stream);
//         rec = new Recorder(input, { numChannels:1 })
//         rec.record()
//         setTimeout(transcribeText(),10000);
//     }).catch(function(err) {
//       microBtns[0].disabled = false;
//     });
// }

// function transcribeText() {
//   microBtns[0].disabled = false;
//     rec.stop();
//     audioStream.getAudioTracks()[0].stop();
//     rec.exportWAV(uploadSoundData);
// }

// function uploadSoundData(blob) {
//     let filename = new Date().toISOString();
//     let xhr = new XMLHttpRequest();
//     xhr.onload = function(e) {
//         if(this.readyState === 4) {
//           inputs[0].value=e.target.responseText;
//         }
//     };
//     let formData = new FormData();
//     formData.append("audio_data", blob, filename);
//     xhr.open("POST", "/", true);
//     xhr.send(formData);
// }

// Form Stepper functions
$(document).ready(function () {

    var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this);

        if (!$item.hasClass('disabled')) {
            // navListItems.removeClass('btn-outline-info bg-dark ').addClass('btn-info text-light');
            // $item.addClass('btn-info');
            $item.removeClass('btn-outline-info bg-dark ').addClass('btn-info text-light');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function () {
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for (var i = 0; i < curInputs.length; i++) {
            if (!curInputs[i].validity.valid) {
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid) nextStepWizard.removeAttr('disabled').trigger('click');
    });

    $('div.setup-panel div a.btn-info').trigger('click');
});