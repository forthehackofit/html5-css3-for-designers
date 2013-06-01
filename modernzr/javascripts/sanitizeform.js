function sanitizeForm () {
  var data = {}, 
      submitted = $thisForm.serializeArray();
  $.each(submitted, function(i,v) {
    data[submitted[i].name] = submitted[i].value;    
  }); 
  console.group("form data before and after sanitization");
  console.log("raw form data:");   
  console.log(data);
  $pinputs.each(function(i,v) {
      var thisname = this.name,
          thisdef  = this.defaultValue;
      if(data[thisname] === thisdef) {
        // we can check if this was required and throw an error
        data[thisname] = "";
      }
  });
  console.log("sanitized form data:");
  console.log(data);
  console.groupEnd();
}