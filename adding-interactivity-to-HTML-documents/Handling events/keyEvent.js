//Example 1
// window.addEventListener('keyup',processKeyUp);
// window.addEventListener('keydown',processKeyDown);

// // or we can use like this:
// // window.onkeyup=processKeyUp;
// // window.onkeydown=processKeyDown;

// function processKeyUp(evt){
//     var keys=document.querySelector('#keys');
//     keys.innerHTML+="Keyup: "+ evt.key  + " Code :"+ evt.keyCode +"<br>";
// }

// function processKeyDown(evt){
//     var keys=document.querySelector('#keys');
//     keys.innerHTML+="Keydown: "+ evt.key  + " Code: "+ evt.keyCode +"<br>";
// }

//Example 2
window.onkeydown=processKeyDown;
// or we can write like this:
// window.addEventListener('keypress',processKeyPress);

function processKeyDown(evt){
    var keys=document.querySelector('#keys');
    keys.innerHTML+="KeyPress: "+ evt.key + "Code: " + evt.keyCode + "Modifiers: ";

    var Modifiers=" ";
    if (evt.shiftKey)
    Modifiers+="SHIFT";
    if (evt.altKey)
    Modifiers+="ALT";
    if (evt.ctrlKey)
    Modifiers+="CTRL";
    if (Modifiers==="")
    Modifiers="NONE";

    keys.innerHTML+=Modifiers+"<br>";
}