$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

//Function to the css rule
function checkSize(){
  if ($("#tocfloat").css("float") == "left" ){
    $('#toc').appendTo('#md-toc');
  } else {
    $('#toc').appendTo('#all-toc');
  }
}

$('#md-toc').stick_in_parent();
