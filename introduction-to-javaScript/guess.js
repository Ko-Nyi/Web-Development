function guess(){
    let randomNumber=Math.round(Math.random()*10);
if (randomNumber>=6){
  console.log("too big");
}else if(randomNumber<=4){
  console.log("too small");
}else if(randomNumber==5){
  console.log("You are right");
}
}