// function reverse(words){
//     let text = words;
//     const myArray = text.split("");
//     length=myArray.length
//     let str=[];
//     for (let i=1;i<=length;i++){
//         const word = myArray[length-i];
//         console.log(word.toString())
//     }
// }
// reverse("Hello")
// const reverseString = function(words) {
//     var splitString=words.split("");
//     var reverseArray=splitString.reverse();
//     var joinArray=reverseArray.join("");
//     return joinArray;
// };
// console.log(reverseString("Hello"))

function removeFromArray(a,b){
    const normalArray=[a,b];
    console.log(normalArray.shift());
}
removeFromArray(['Thar','Tim','John'],'Nyi','Ko')

