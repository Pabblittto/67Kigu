$(document).ready(function(){




})

function printlog()
{

 $(".inputelo").each(function() {
  console.log($(this).val());
});


$(".tekst").slideToggle(200, function() {
  //Stuff to do *after* the animation takes place
})

}
