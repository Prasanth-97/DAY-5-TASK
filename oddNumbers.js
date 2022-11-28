// Printing odd numbers using anonymous function

var array = [1, 2, 3, 11, 4 ,7 , 9 ,23, 34]
let arr1 = function (value) {
  var result = [];
  for (i = 0; i < value.length; i++) {
    if (value[i] % 2 !== 0) {
      result.push(value[i]);
    }
  }
  return result;
}
console.log("Odd numbers using anonymous function :",arr1(array));

// output  :   odd numbers using anonymous  function: [ 1, 3, 11, 7, 9, 23 ]


// Printing odd numbers using IIFE function

var array = [0, 2, 3, 11, 4 ,7 , 9 ,98, 34];
(function(value) {
  var result = [];
  for (i = 0; i < value.length; i++) {
    if (value[i] % 2 !== 0) {
      result.push(value[i]);
    }
  }
   console.log("Odd numbers using IIFE function : ",result);
})
(array);

//output : Odd numbers using IIFE function [ 3, 11, 7, 9 ]

// Printing odd numbers using arrow function

var array = [1, 6, 0, 18, 4 ,7 , 67 ,23, 34]
let arr2 =  (value) => {
  var result = [];
  for (i = 0; i < value.length; i++) {
    if (value[i] % 2 !== 0) {
      result.push(value[i]);
    }
  }
  return result;
}
console.log("Odd numbers using arrow function : ",arr2(array));

// output : Odd numbers using arrow function :  [ 1, 7, 67, 23 ]