$(document).ready(function(){
AddAllInformations();
changeInfo("#dot0");// set information which is visible on beggining

  window.setInterval(newsAnimation,4000);

  $(".dot").click(function(){
    changeInfo(this);
  });


});


let VisibleInfo=0;

function changeInfo(dot){

let number= $(dot).attr("class").split(" ")[1];
VisibleInfo=number;
for (var i = 0; i < InformationList.length; i++) {

  $(`#info${i}`).css("visibility","hidden");
  $(`#dot${i}`).css("background-color","rgb(12, 97, 6)")
}
$(`#info${number}`).css("visibility","visible");
$(`#dot${number}`).css("background-color","rgb(94, 140, 90)")

}


function newsAnimation()
{
  if(VisibleInfo!=InformationList.length-1)
  {  VisibleInfo++;}
  else { VisibleInfo=0;}
  for (var i = 0; i < InformationList.length; i++) {
    $(`#info${i}`).css("visibility","hidden");
    $(`#dot${i}`).css("background-color","rgb(12, 97, 6)")
  }

  $(`#info${VisibleInfo}`).css("visibility","visible");
  $(`#dot${VisibleInfo}`).css("background-color","rgb(94, 140, 90)")

}

function InformationCnstr(imagefile,pathToSite)
{
this.image=imagefile;
this.gotoSite=pathToSite;
}

var InformationList= [];
InformationList.push(new InformationCnstr("./src/info.jpg","#"));
InformationList.push(new InformationCnstr("./src/image1.jpg","#"));
InformationList.push(new InformationCnstr("./src/image2.jpg","#"));
InformationList.push(new InformationCnstr("./src/image3.jpg","#"));



function AddAllInformations()
{
    for (var i = 0; i < InformationList.length; i++) {
      var CurrentObject=InformationList[i];

      $("#window").append(`
        <a href="${CurrentObject.gotoSite}"><div class="CertainInfo" id="info${i}">
       <img src="${CurrentObject.image }" alt="#" class="infoImage">

        </div> </a>`)
    }

    for (var i = 0; i < InformationList.length; i++) {
      $("#dotsContainer").append(`<a href="#"> <div class="dot ${i}" id="dot${i}"> </div></a> `);
    }

}
