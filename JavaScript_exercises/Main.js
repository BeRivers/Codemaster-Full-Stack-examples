// var x = undefined; 

// 1) create function that accepts 2 numbers but returns the highest, using if/then (if/else)

// var highestNumberVersionA = function(number1, number2){
// if (number1 < number2){
//     return number2; 
// } else {
//     return number1;
// }
// }

// function highestNumberVersionB(number1, number2){
//     if (number1 < number2)
//     {
//         return number2; 
//     } 
//         return number1;
// }

// var x = highestNumberVersionB(4, 60); 

// var result = 'result = ' + x;

// console.log(result);

// 2) create function that accepts string and returns number of charaters

// var str = 'Javascritp is not easy. How many characters in this string:';
  
// console.log(str + ' ' + str.length);

// function getStringLength(string){
//     return string.length;
// }

// x = getStringLength("Beth");


// 3) 
// function lowestNumber(x, y, z){
//     if ((x<y) && (x < z)){
//         return x;
//     }
//     else if((y<x) && (y<z)){
//         return y;
//     }
//     else {
//         return z;
//     }
// }

// var num1 = 1; 
// var num2 = 2; 
// var num3 = 3; 

// var result1 = lowestNumber(num1, num2, num3);
// console.log('the result from the first lowestNumber call was ' + result1)

// var num4 = 6; 
// var num5 = 2; 
// var num6 = 77; 

// var result2 = lowestNumber(num4, num5, num6);
// console.log('the result from the second lowestNumber call was ' + result2)


// 4) create a loop that iterates 3 times and adds the number 5 to a running total variable on each iteration

// var runningTotal = 7; 

// for (var i = 0; i <= 10; i++) {
//     runningTotal = runningTotal + 5;
//   }

//   console.log(runningTotal);

// 5) extend the loop in #4 to add the number 5 only in the first iteration

// var runningTotal = 0; 

// // for (var i = 0; i <= 2; i++) {
// //     if (runningTotal < 5) {
// //         runningTotal = runningTotal + 5;}
// //     else (runningTotal = runningTotal + 0);
// //   }

// for (var i = 0; i <= 2; i++) {
//     if (i === 0) {
//         runningTotal += 5; 
//     }
// }

//   console.log(runningTotal);

// 6) create a loop that counts down from 15 and outputs the iternation numbmer each time to the console


// for (var x=16-1;x >= 0;x--) console.log("Countdown is " + x);

// var i = 20; 
// while(i > 0){
//     console.log("countdown " + i);
//     i--;
// }


// 7) iterate over each of the below array items and output the value to console each time

// var cars = ['mazda', 'merc', 'vw'];

// for (var i = 0; i < cars.length; i++){
//     console.log("Car is " + cars[i]);
// }


var drinks = ['wine', 'beer', 'cocktail hour'];

for (var i = 0; i < drinks.length; i++){
    console.log("It's time for " + drinks[i]);
}

// var result = 'result = ' + x;

// console.log(result);

// cd 
// node Main.js