$(".highlight").hover(function(){
        $(this).css("background-color", "yellow");
        }, function(){
        $(this).css("background-color", "white");
    });
$(".greyhighlight").hover(function(){
    $(this).css("background-color", "yellow");
    }, function(){
    $(this).css("background-color", "grey");
});
        for (var i=0;i<document.forms.length;i++) {
         var form = document.forms[i];
         form.addEventListener('submit', function(e){
           e.preventDefault();
           var results = '';
          // loop through all checkboxes to see if checked
          var checkboxes = form.querySelectorAll("input[type='checkbox']");
          for(var k = 0; k < checkboxes.length; k++) {
            results += checkboxes[k].id + '=' + checkboxes[k].checked + '\n';
          }
          // loop through all radio butotns to display value
          var radiobuttons = form.querySelectorAll("input[type='radio']:checked");
          for(var m = 0; m < radiobuttons.length; m++) {
            results += radiobuttons[m].name + '=' + radiobuttons[m].value + '\n';
          }
          // alert results
          console.log(results);
        });
      }
