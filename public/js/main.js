try {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    const microBtns = document.querySelectorAll(".btn-micro");
    const inputs = document.querySelectorAll('input');

    recognition.onstart = function () {
        console.log("voice is activate,you can to microphone");
      };
      
      recognition.onresult = function (event) {
        const current = event.resultIndex;
        const transcript = event.results[current][0].transcript;
        let mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);
        if (!mobileRepeatBug) {
                //do something transcript;
        }
      };
    //   prepei na vrw pws na pernw k na dinw ta data sto ka8e input
      // add listener
      for(let btn of microBtns)
      {
          btn.addEventListener('click',(e)=>{
              let input = e.target.parentElement.previousElementSibling;
              recognition.start();
          });
      }
} catch (e) {
    console.error(e);
    $('.no-browser-support').show();
    $('.form').hide();
}


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