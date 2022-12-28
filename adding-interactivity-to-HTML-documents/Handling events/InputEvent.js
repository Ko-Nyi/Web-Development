function validateName(field){
    var name=field.value;
    var output=document.querySelector("#nameTyped");
    output.innerHTML="Valid name: "+name;

    if(name.length<5){
        output.innerHTML="This name is too short ( at least 5 chars)";
    }
}