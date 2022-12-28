//useful to have them as global variables
var canvas,ctx,w,h;
var xMonster=10;
var yMonster=10;
var monsterSpeed=1;

window.onload=function init(){
    canvas=document.querySelector('#myCanvas');
    w=canvas.width;
    h=canvas.height;
    ctx=canvas.getContext('2d');
    mainLoop();
};
function mainLoop(){
    //1-clear the canvas
    ctx.clearRect(0,0,w,h);
    //2-draw the monster
    drawMyMonster(xMonster,yMonster);
    //3-move the monster
    // xMonster+=monsterSpeed;
    yMonster+=monsterSpeed;

    //4-test collisions with vertical boundaries
    if(((yMonster+100)>w)|| (yMonster<0)){
        //collision with left or right wall
        //change the direction of movement
        monsterSpeed=-monsterSpeed;
    }
    //5-request a new frame of animation in 1/60s
    requestAnimationFrame(mainLoop);
}
function drawMyMonster(x,y){
    //head
    ctx.save();
    ctx.translate(x,y);
    ctx.strokeRect(0,0,100,100);

    //eyes
    ctx.fillRect(20,20,10,10);
    ctx.fillRect(65,20,10,10);

    //nose
    ctx.strokeRect(45,40,10,40);

    //teeth
    ctx.fillRect(38,84,10,10);
    ctx.fillRect(52,84,10,10);

    ctx.restore();
}