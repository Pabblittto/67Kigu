$(document).ready(function(){


    $("button").click(function(){
        $("p").fadeOut();
    });
});


function print()
{

 $(".inputelo").each(function() {
  console.log($(this).val()); 
});

}
