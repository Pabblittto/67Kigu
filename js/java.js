$(document).ready(function(){

$(document).on("click", function(e) {

  if(e.target.id!= "menuArea" && !$(e.target).hasClass("menuArea") && !$(e.target).parents().hasClass("menuArea") ){
    $(".more:visible").slideUp(200, function() {});
    console.log("poszło");

  }
})
});


function elo($variable)
{
if ($(".more:visible").prop("id")!=$variable) {
$(".more:visible").slideUp(100, function() {})

}
  $('#'+$variable).slideToggle(200, function() {})

}

// moving link to right
function LinkAnim(object){
$(object).animate({
paddingLeft: "+=20px",

}, 100)
}

// returning link on its first position
function LinkAnimRetu(object) {
  $(object).animate({
  paddingLeft: "-=20px",
}, 100)
}
