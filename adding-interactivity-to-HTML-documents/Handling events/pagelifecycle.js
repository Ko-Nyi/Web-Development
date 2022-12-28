//Example 1
// function init(){
//   var status=document.querySelector('#pageStatus');
//   status.innerHTML='LOADED!';
// }

//Example 2
// window.onload=resize;
// window.onresize=resize;

// function resize(evt){
//   console.log("resize");
//   var pageSizeSpan=document.querySelector("#pageSize");
//   pageSizeSpan.innerHTML="Width: "+ window.innerWidth+
//                           "Height: "+ window.innerHeight;

//   var ScreenSizeSpan=document.querySelector("#screenSize");
//   ScreenSizeSpan.innerHTML="Width: "+ screen.width+
//                             "Height: "+ screen.height;
// }

//Example 3
window.onload = init;

var progressBar;

function init() {
  progressBar = document.querySelector(".progress div");

  window.addEventListener("scroll", function() {
      var max = document.body.scrollHeight - window.innerHeight;
      var percent = (window.pageYOffset / max) * 100;
      progressBar.style.width = percent + "%";
  });
}
