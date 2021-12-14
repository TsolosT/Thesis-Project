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
            let focusedEl=document.activeElement;
            focusedEl.value = transcript;
            focusedEl.blur();
        }
      };
    //   prepei na vrw pws na pernw k na dinw ta data sto ka8e input
      // add listener by btns
    //   for(let btn of microBtns)
    //   { 
    //       //set event by click
    //       btn.addEventListener('click',(e)=>{
    //           let input = e.target.parentElement.previousElementSibling;
    //           recognition.start();
    //       });
    //       //set event by keypress enter
    //       btn.addEventListener('keyup',(e)=>{
    //         if (e.defaultPrevented) {
    //             return; // Do nothing if the event was already processed
    //           }
    //         if(e.key ==="Enter")
    //         {
    //              event.preventDefault();
    //         }
    //         // Cancel the default action to avoid it being handled twice
    //          e.preventDefault();
    //     },true);
    //   }
    // By input && keypress event
    for(let input of inputs)
    {
        input.addEventListener('keydown',(e)=>{
             if (e.defaultPrevented){return;}
            if(e.key==="Enter"){recognition.start();}
             e.preventDefault();
        },true);
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