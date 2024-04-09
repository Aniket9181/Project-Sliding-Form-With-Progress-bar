$(document).ready(function () {
  var totalQuestions = $(".question").length;
  console.log("total length" + totalQuestions);

  $('input[type="number"], input[type="radio"],input[type="text"], select').on(
    "change",
    function () {
      updateProgressBar();
    }
  );

  var form1 = document.getElementById("questionnaire");
  var form2 = document.getElementById("questionnaire2");
  var backbtn = document.getElementById("back_btn");
  var submitbtn = document.getElementById("submit_btn");

  $('.radio-container input[type="radio"]').on("click", function () {
    // Your click event handler code here
    form1.style.left = "600px";
    form2.style.left = "5px";
    // This function will be executed when either of the radio buttons is clicked
    console.log("Radio button clicked");
  });

  backbtn.onclick = function () {
    form1.style.left = "5px";
    form2.style.left = "600px";
  };

  submitbtn.onclick = function () {
    alert("Form submited Successfully");
  };

  function updateProgressBar() {
    var filledInputs = $('.question input[type="number"]').filter(function () {
      return $(this).val() !== "";
    }).length;

    var inputname = $(".name_container").length;
    if (inputname > 0) {
      inputname = 1;
    } else {
      inputname = 0;
    }

    var inputplace = $(".Place_container").length;
    if (inputplace > 0) {
      inputplace = 1;
    } else {
      inputplace = 0;
    }

    var filledRadios = $('.question input[type="radio"]:checked').length;

    var filledSelects = $(".question select").filter(function () {
      return $(this).val() !== "";
    }).length;

    var totalFilled =
      filledInputs + filledRadios + filledSelects + inputname + inputplace;
    var progressWidth = (totalFilled / totalQuestions) * 100;

    $("#progress_bar").css("width", progressWidth + "%");
  }
});
