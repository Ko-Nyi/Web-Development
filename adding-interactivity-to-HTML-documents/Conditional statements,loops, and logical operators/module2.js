// var x = 2;
// var y = 5;

// if(y > 0) {
//     if ((x > 2) && (y < 10)) {
//         if(x === 2) console.log("YES");
//     } else {
//         if((x > 10) && (y === 5)) console.log("NO");
//     }
// } else {
//     console.log("MAYBE");
// }
// console.log(" THE END");

/*CONDITIONAL STATEMENTS*/
/*if statement*/

var num = 10;
if (num == 10) {
    num = 20;
}

//console.log('if statement,\n num>> ' + num);

/*if-else statement*/

var num = 10;
if (num > 10) {
    num = 20;
} else {
    num = 0;
}

//console.log('if-else statement,\n num>> ' +num);

/*
Question 1 
how to replace this code by an expression including one operator?
*/
var max; 
var min;
// Try to uncomment that and // see the difference!
// var min=1;
if (min){
    max = min + 10;
} else {
    max = 10;
}
//console.log('question1, \n max>> ' + max);
//Answer is at the end of the document


/*switch statement*/


//switch statement behaviour when break keyword is missing
//comment and uncomment cloudColor variable to see the different results

var gear = '';
var cloudColor;
//var cloudColor = 'green';
var cloudColor = 'black';
switch(cloudColor) {
    case 'green': gear += 'spacesuit';
        break;
    case 'black': gear += 'boots, ';
    case 'grey': gear += 'umbrella, ';
    case 'white': gear += 'jacket, ';
    default: gear += 'watch';
}

//console.log('switch2,\n gear >> ' + gear);

//The above example with break; 

var gear = '';
//var cloudColor;
var cloudColor = 'green';
//var cloudColor = 'black';
switch(cloudColor) {
    case 'green': 
      gear += 'spacesuit';
      break;
    case 'black': 
      gear += 'boots, ';
      break;
    case 'grey': 
      gear += 'umbrella, ';
      break;
    case 'white': 
      gear += 'jacket, ';
      break;
    default: 
      gear += 'watch';
}

//console.log('swtich3,\n gear >> ' + gear);




// Question 1 
// how to replace this code by an expression including one operator?
var max;
var min;
max=(min<10)?min+10:min;
// if (min){
//     max = min + 10;
// } else {
//     max = 10;
// }


//Answer
var max;
var min;
max = (min)? min+10 : 10;
//console.log('question 1,\n max >> ' + max);

/*CONDITIONAL STATEMENTS*/
/*3 examples which are equivalent*/

//try to change foo value 
var foo=1;
//var foo=2; 
//var foo=1000;
//var foo=0;
//var foo='1';

var bar1,bar2,bar3;

//example 1 
if(foo===1){
  bar1='one';
}
else if(foo===2){
  bar1='two';
}
else{
  bar1='something';
}

//example 2
bar2 = (foo===1)?'one':(foo===2)?'two':'something';

//example 3
switch(foo){
  case 1 :
    bar3='one';
    break;
  case 2 : 
    bar3 ='two';
    break;
  default:
    bar3 ='something';
}

//now we print results :

// console.log('example1,\n bar1 >> ' + bar1);
// console.log('example2,\n bar2 >> ' + bar2);
// console.log('example3,\n bar3 >> ' + bar3);
// for (var i = 1, j = 1; i <= 10; i++, j+=2) {
//   console.log('i = ' + i + ' j = ' + j);
// }

// var michel={
//   familyName:"buffa",
//   guivenName:"Michel",
//   age:43
// }
// for (var property in michel){
//   console.log(property);
//   console.log(michel[property]);
// }

for (var i=1,k=0; i<5; i++){
  if (i===3){
    continue;
  }
  k+=2*i;
  //console.log('K += '+(2*i));
}
// console.log('Final k value: '+k)
// WHILE LOOP
// [initialization]
// while([condition]) {
//    .....
// }
// condition no more satisfied
/*
var n = 1, m = 1; 
 
while (n < 4) {
    console.log("n = " + n)
    n += 1; 
    m += n;
}
console.log("While loop, at the end n=" + n + " and m=" + m); 
*/

// Do... while loop
// do {
//     ...
// } while([condition]);
/*
var i = 0;
 
do {
    console.log('i = ' + i);
    i++;
} while(i < 20);
 
console.log('Value of i after the do-while statement: ' + i);
*/

// FOR LOOPS
// for ([initialization]; [condition]; [final-expression]) {} 

// count 1 by 1 from an initial value to a final value
/*for(var i=0; i < 5; i+=2) {
  console.log(i);
}*/
// count 2 by 2

// iterate on an array
var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for(var i=0; i < daysOfWeek.length; i++) {
  //console.log(daysOfWeek[i]);
}

// two for loops: iterate on a two dimensional array,
// in this case a 2x3 matrix
var a = [
 [1,2], // line 1
 [3,4], // line 2
 [5,6]  // line 3
];


for (var i=0; i < a.length; i++) {
 // a[i] = line i The next loop iterates on the elements
 // of the array a[i]: on the elements of the ith line
 for (var j=0; j < a[i].length; j++) {
   //console.log(a[i][j]);
 }
}

var tab = ['michel', 'john', 'donald', 'paul']; // johh at index = 1
 
function isNameInTheArray(name, theArray) {
    console.log("Number of elements in the array : " + theArray.length);
    for(var i=0; i < theArray.length; i++) {
        console.log('comparing with element in the array at pos ' + i);
 
        if(theArray[i] === name) {
           console.log('the name ' + name +
                       ' is in the array at pos: ' + i);
           break;
        } else {
           console.log(name + ' is not at pos ' + i);
        }
    }
}
 
// Execute the function
//console.log(isNameInTheArray('john', tab));

let randomNumber=Math.round(Math.random()*10);
if (randomNumber>=6){
  console.log("too big");
}else if(randomNumber<=4){
  console.log("too small");
}else if(randomNumber==5){
  console.log("You are right");
}