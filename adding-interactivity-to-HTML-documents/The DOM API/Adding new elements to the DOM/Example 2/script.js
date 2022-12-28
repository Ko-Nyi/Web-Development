function add(){
    //get the current value of the input field
    var val=document.querySelector('#name').value;
    if((val!==undefined)&&(val!==" ")){
        var ol=document.querySelector('#people');
        var newPeople=document.createElement('ol');
        newPeople.textContent=val;
        ol.append(newPeople);
    }
}
function reset(){
    var ol=document.querySelector('#people');
    ol.innerHTML=" ";
}