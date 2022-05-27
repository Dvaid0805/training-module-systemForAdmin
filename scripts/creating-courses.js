$(function() {
   $(function() {
      $('#demo-multiple-select').mobiscroll().select({
         inputElement: document.getElementById('demo-multiple-select-input'),
         selectMultiple: true,
         responsive: {
            xsmall: {
               display: 'bottom',
               touchUi: true
            },
            small: {
               display: 'anchored',
               touchUi: true
            },
            custom: { // Custom breakpoint
               breakpoint: 800,
               display: 'anchored',
               touchUi: false
            }
         },
      });

   });
   mobiscroll.setOptions({
      locale: mobiscroll.localeEs,
      theme: 'ios',
      themeVariant: 'light'
   });

   $('#demo-multiple-select option').addClass("HELLO")


   function getRandomId(){
      return  Math.floor(Math.random() * 10001);
   }
   let sectionCounter = 0;
   $(".survey-box-main").on("click", "#addExtraBlock", function() {
      sectionCounter++
      $(".survey-box-main").append(`<div class="survey-questions-box" id=${"questionBlock"+ getRandomId()}>
              <button class="survey-btn remove-survey-btn" id="removeExtraBlock" type="button"><i class="fa-solid fa-minus"></i></i></button>
              <label class="form-upload-label" for="inputUploadFile">
                <i class="fa-solid fa-arrow-up-from-bracket"></i>
                Choose item
                <input class="form-upload-input" id="inputUploadFile" type='file' multiple  >
              </label>
              <textarea class="form-textarea form-item" placeholder="Survey text" onkeyup="textAreaAdjust(this)"></textarea>
              <div class="survey-answers-box">
                <button type="button" class="add-answer-btn">Add new answer</button>
              </div>
            </div>`);
         if ( sectionCounter >= 4 ) {
            $("#addExtraBlock").attr("disabled", true)
         }

   });
   $(document).on("click", "#removeExtraBlock", function() {
      sectionCounter--
      $(this).parents(".survey-questions-box").remove();
      if ( sectionCounter < 4 ) {
         $("#addExtraBlock").attr("disabled", false)
      }
   });
   $(document).on("click", ".add-answer-btn", function() {
      if($(this).siblings($(".answer-item")).length < 4){
         $(this).parent(".survey-answers-box").append(`<div class="answer-item" id=${"answer" + getRandomId()}>
                <input class="form-item form-answer" type="text" placeholder="Possible answer" required>
                <div class="answer-buttons-box">
                  <input class="answer-checkbox" id="checkbox1" type=checkbox>
                  <button type="button" class="answer-remover"><i class="fa-solid fa-xmark"></i></button>
                </div>
              </div>`);
      } else {
         alert("maximum: 4 ")
      }
   });
   $(document).on("click", ".answer-remover", function() {
      $(this).parents(".answer-item").remove();
   });
});
function textAreaAdjust(element) {
   element.style.height = "1px";
   element.style.height = (25+element.scrollHeight)+"px";
}

