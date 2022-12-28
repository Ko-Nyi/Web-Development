// window.onclick=processClick;
// function processClick(evt){
//     var clicks=document.querySelector("#clicks");
//     var target=evt.target.id;
//     if (target===""){
//         clicks.innerHTML+="You clicked on the window, not on a particular element!<br>";
//     }else{
//         clicks.innerHTML+="Element clicked id: "+ target+ "<br>";
//     }
//     evt.stopPropagation();
// }

// window.onmousemove = processMouseMouve;

// function processMouseMouve(evt) {
//   var mousePositions = document.querySelector('#mousePositions');
//   mousePositions.innerHTML = "clientX: " + evt.clientX +
//                               " clientY: " + evt.clientY + "<br>" +
//                              " pageX : " + evt.pageX +
//                               "  pageY : " + evt.pageY +
//                               "<br>";

//   var mouseScreenPositions = document.querySelector('#mouseScreenPositions');
//   mouseScreenPositions.innerHTML = "screenX: " + evt.screenX +
//                              " screenY: " + evt.screenY + 
//                              "<br>";
//  }

window.onload=init;
function init(){
  canvas=document.querySelector("#myCanvas");
  canvas.addEventListener("mousemove",processMouseMouve)
}
function processMouseMouve(evt){
  var mousePositions=document.querySelector("#mousePositions");
  var rect=evt.target.getBoundingClientRect()
  var mouseX=evt.clientX-rect.left;
  var mouseY=evt.clientY-rect.top;
  mousePositions.innerHTML="mouse posX: "+mouseX+ "mouse posY: "+ mouseY+ "<br>"
}