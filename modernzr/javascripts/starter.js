var $pinputs = $('input:text'),
    $thisForm = $("#phform");
    
$pinputs.each(function () {
  $(this)
  .attr('placeholder', $(this).attr('value'))
  .attr('value', "");
});
$thisForm.on("submit", function(evt) {
  evt.preventDefault();
  sanitizeForm();
});