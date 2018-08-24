$(document).ready(function(){


    $("button").click(function(){
        $(".tekst").slideToggle("slow", function() {
          //Stuff to do *after* the animation takes place
        })


function printlog()
{

 $(".inputelo").each(function() {
  console.log($(this).val());
});

}
