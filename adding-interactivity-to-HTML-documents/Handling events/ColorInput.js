function changePageBackgroundColor(color){
    document.body.style.backgroundColor=color;
    var output=document.querySelector('#choosedColor');
    output.innerHTML="Color selected :"+ color;
}