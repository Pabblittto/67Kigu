$(document).ready(function(){

$(".content").click( function(){
  $(".more:visible").slideUp(100, function() {});
  console.log("poszło");
})

});


function elo($variable)
{
if ($(".more:visible").prop("id")!=$variable) {
$(".more:visible").slideUp(100, function() {})

}


  $('#'+$variable).slideToggle(300, function() {})

}
