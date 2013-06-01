 function placeholder() {
  var $pinputs = $('input:text'),
      $thisForm = $("#phform");
  // add the placeholder class to the inputs
  $pinputs.addClass("placeholder");
  // attach event handlers to the form elements    
  $thisForm
  .on('focusin focusout', 'input:text', function(evt) {
    var defValue = this.defaultValue;  
    switch (evt.type) {

      case 'focusin':
        this.className="";
        if(this.value == defValue) {
            this.value = '';
        }
        else {
            this.select();
            this.className="";
        }
      break;
      
      case 'focusout':
        if ($.trim(this.value) == '') { 
            this.value = defValue ? defValue : ''; 
            this.className="placeholder"; 
        }
      break;
    }
  })
  .on('click', 'input:submit', function(evt) {
    evt.preventDefault();
    sanitizeForm();
  });
}
placeholder();