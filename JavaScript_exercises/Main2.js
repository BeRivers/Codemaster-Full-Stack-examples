// 1) Reverse a number
// function reverseNumber(n)
// {
// 	n = n + "";
// 	return n.split("").reverse().join("");
// }
// console.log(reverseNumber(32243));

// 2) String of letters returned in alphabetical order

// var letters = ['w', 'e', 'b', 'm', 'a', 's', 't', 'e', 'r'];
// console.log(letters.sort());

// function reverseLetters(n)
// {
// 	return n.split("").sort().join("");
// }
// console.log(reverseLetters('webmaster'));


//  3) calculate the factorial of a number

// function factorialize(num) {
//     if (num < 0) 
//           return -1;
//     else if (num == 0) 
//         return 1;
//     else {
//         return (num * factorialize(num - 1));
//     }
//   }
// console.log(factorialize(10));

// function factorial(x){
//     if (x===0)
//     {
//         return 1; 
//     }
//     return x * factorial((x-1));
// }
// console.log(factorial(5));

// 4) integrers in range (x, y)

// var range = function(start_num, end_num) 
// {
//   if (end_num - start_num === 2) 
//   {
//     return [start_num + 1];
//   } 
//   else 
//   {
//     var list = range(start_num, end_num - 1);
//     list.push(end_num - 1);
//     return list;
//   }
// };

// console.log(range(2,9));

// function fruitloop(numx, numy){
// let range = new Array();
// for (numx + 1; numx < numy; numx += 1) 
// {
//     range.push(numx)}
//     return range; 
// }

// console.log(fruitloop(2, 9));


// 5) sum of an array of integers

// const sum = [1, 2, 3, 4, 5, 6].reduce(add);

//        function add(accumulator, a) {
//             return accumulator + a;
//        }

//        console.log(sum);


// 6) check if number is even or not

// function isEven(value){
//     if (value%2 == 0)
//         return true;
//     else
//         return false;
// };

// console.log(isEven(7));

// 7) average marks of the following students

var marks = new Array(['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]);


