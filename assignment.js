//  function kilometerToMeter( distance ) {
//     var meter = distance * 1000;
//     return meter;
// }
// var result = kilometerToMeter(34);
// console.log(result);


function woodCalculator(clock, phone, laptop){
    const clockCost = clock * 50;
    const phoneCost = phone * 100;
    const laptopCost = laptop * 500;
    
    let totalcost = clockCost+phoneCost+laptopCost;
    return totalcost; 
}
 let result= woodCalculator(2,2,2)
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

