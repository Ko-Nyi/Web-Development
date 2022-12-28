function resetName(){
    var inputField=document.querySelector('#name');
    inputField.value=" ";
}
function setToGreen(){
    var colorChooser=document.querySelector('#color');
    colorChooser.value="#00ff00";
}
function changeStep(){
    var number=document.querySelector("#number");
    number.value=10;
    number.step="0.1";
    number.max=11;
}
function changeAndResize(img){
    img.src="https://mainline.i3s.unice.fr/mooc/Ntvj5rq.png";
    img.width=250;
    img.style.border="4px solid red";
}