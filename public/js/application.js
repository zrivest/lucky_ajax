$(document).ready(function () {
    //   1- intercept the form submission event using jQuery
  $("form").submit(function(event){
    //   2- prevent the default action for that event from happening
    event.preventDefault();
    var number = Math.floor((Math.random()*6)+1)
    var value = { value : number }
    $.post("/rolls", value, function(response){
      console.log(response);
      $("#die").html(response);
    })
  // PSEUDO-CODE:
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery
 })
});
