$(".arrwo-up").fadeOut(10)
window.onscroll=function(){
  if(scrollY>=20)
  {
    $(".navbar").addClass("bac-nav")
    $(".arrwo-up").fadeIn(50)
  }
  else
  {
    $(".navbar").removeClass("bac-nav")
    $(".arrwo-up").fadeOut(10)
  }
}

$(".arrwo-up").click(function(){
  $("html,body").animate({scrollTop:"0"},1000)
})

$(document).ready(function(){
  $(".loderspaner").fadeOut(1000,function(){
    $("body").css({overflow:"auto"})
  })
})

$(".Show").click(function(){
 $(".item-sec-4").fadeIn(500)        
})
$(".Landscape").click(function(){
$(".item-sec-4").fadeOut(500)             
})
$(".Mountains").click(function(){
 $(".fade-0").fadeOut(500,function(){
 $(".fade-1").fadeIn(490)         
 })         
})

$(".Nature").click(function(){
 $(".fade-2").fadeOut(500,function(){
 $(".fade-2-2").fadeIn(490)         
 })         
})
$(".Photography").click(function(){
 $(".fade-3").fadeOut(500,function(){
 $(".fade-3-3").fadeIn(490)         
 })         
})

$(".Travel").click(function(){
 $(".fade-4").fadeOut(500,function(){
 $(".fade-4-4").fadeIn(490)         
 })         
})


$('.mainslider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});

$('.mainslider-1').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2
});

$('.mainslider-2').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
});


////////////////////////////////////////////
// let contcat = [];

// let http = new XMLHttpRequest();

// http.open("GET", "https://www.themealdb.com/api/json/v1/1/categories.php");
// http.send();

// http.addEventListener("readystatechange", function() {
//   if (http.readyState == 4 && http.status == 200) {
//     contcat = JSON.parse(http.responseText);
//     console.log(contcat);
//     displayproduct();
//   }
// });

// function displayproduct() {
//   let hasala= ``;
//   for (let i = 0; i < contcat.length; i++) {
//     hasala += `
//       <div class="col-lg-3 mb-3">
//         <div class="item">
//           <img src="${contcat[i].strCategoryThumb}" class="img-fluid"> 
//           <h3 class="mt-3">${contcat[i].strCategory}</h3>    
//         </div>       
//       </div>
//     `;
//   }
//   document.getElementById("row").innerHTML=hasala;
// }