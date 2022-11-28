// Printing sum of numbers using anonymous function

var  array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let add = function (arr) {
    let initialvalue = 0;
    let result = arr.reduce((previousvalue, currentvalue) =>  previousvalue + currentvalue , initialvalue);
     return result;
}
console.log("sum of numbers using anonymous function : ",add(array));

// output  : sum of numbers using anonymous function :  45


// Printing sum of numbers using IIFE function

var  array = [1, 2, 8, 4, 5, 15, 7, 62, 9];
(function (arr) {
    let initialvalue = 0;
    let result = arr.reduce((previousvalue, currentvalue) => previousvalue + currentvalue, initialvalue);
    console.log("sum of numbers using IIFE function : ",result);
})
(array);

// output  : sum of numbers using IIFE function :  113

// Printing sum of numbers using arrow funnction 

var  array = [1, 20, 3, 4, 5, 61, 7, 48, 9];
let add1 = (arr)  => {
    let initialvalue = 0;
    let result = arr.reduce((previousvalue, currentvalue) =>  previousvalue + currentvalue , initialvalue);
    return result;
}
console.log("sum of numbers using arrow function : ",add1(array));

//output : sum of numbers using arrow function :  158

