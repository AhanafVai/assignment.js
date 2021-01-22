//1. function kilometerToMeter( distance ) {
//     var meter = distance * 1000;
//     return meter;
// }
// var result = kilometerToMeter("please Input Distance");
// console.log(result);

function budgetCalculator([],number){
   var word = ["laptop","watch","mobilephone"];
   for(i=0; i < word.length; i++){
   if(word.length === 5){
     cost = number * 50;
   }
   else if(word.length === 11){
       cost = number * 100;
   }
   else if(word.length === 6){
       cost = number * 500;
   }
 }
 return cost;
}
var result = budgetCalculator([laptop],5);
console.log(result);



// 3.function hotelCost(day){
//     var cost = 0;
//     if(day < 11){
//         cost = day*100;
//     }
//     else if(day < 21){
//         var first10days = 10*100;
//         var remaindays = day - 10;
//         var second10days = remaindays*80;
//         cost = first10days + second10days;
//     }
//     else{
//         var first10days = 10*100;
//         var second10days = 10*80;
//         var remaindays = day - 20;
//         var afterthat = remaindays*50;
//         cost = afterthat + first10days + second10days;
//     }
//     return cost;
// }
// var result = hotelCost(30);
// console.log(result);

// 4. function megaFriend(arr =["rafi","rafina","rokksana"]) {
//     let word = "";
//     for (let i = 0; i < arr.length; i++) {
//       if (word.length < arr[i].length) {
//         word = arr[i];
//       }
//     }
//     return word.length;
//   }
// var result = megaFriend();
// console.log(result);

