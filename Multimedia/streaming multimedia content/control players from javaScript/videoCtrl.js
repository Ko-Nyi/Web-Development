let vid = null;
let play = null;
let pause = null;
let rewind = null;

window.onload = init;

function init() {
 vid = document.getElementById("vid");
 play = document.getElementById("play");
 pause = document.getElementById("pause");
 rewind = document.getElementById("rewind");
}
function playVideo() {
 vid.play();
 play.style.color='black';
 pause.style.color='#999';
 rewind.style.color='#999';
}
function pauseVideo() {
 vid.pause();
 play.style.color='#999';
 pause.style.color='black';
 rewind.style.color='#999';
}
function rewindVideo() {
 vid.currentTime = 0;
 play.style.color='#999';
 pause.style.color='#999';
 rewind.style.color='black';
}