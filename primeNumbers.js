// Printing prime numbers using anonymous function 

let num = [-1,-2,-3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let primeNumber = function (num) {
    let result = []
    for (let i = 0; i < num.length; i++) {
        if (isPrime(num[i])) {
            result.push(num[i]);
           
        }
    }
    return result ;
}

function isPrime(num) {
    if (num < 2) {
        return false
    }
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

console.log("prime numbers using anonymous function : ",primeNumber(num));

// output : prime numbers using anonymous function :  [ 2,  3,  5,  7, 11, 13, 17, 19 ]
  
  
// Printing prime numbers using IIFE function

let  num1 = [-1,-2,-3,1,7,3,4,5,6,7,81,9,11,12,13,14,87,16,17,18,19,20];
 (function (num) {
    let result = []
    for (let i = 0; i < num.length; i++) {
        if (isPrime(num[i])) {
            result.push(num[i]);
           
        }
    }
    console.log("prime numbers using IIFE function : ",result) ;
})
(num1);

function isPrime(num) {
    if (num < 2) {
        return false
    }
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

//output : prime numbers using IIFE function :  [
//    7,  3,  5,  7,
//    11, 13, 17, 19
//  ]
 

//PPrinting prime numbers using arrow function 

let num2 = [-1,-2,-3,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let primeNumber2 =  (num) => {
    let result = []
    for (let i = 0; i < num.length; i++) {
        if (isPrime1(num[i])) {
            result.push(num[i]);
           
        }
    }
    return result ;
}

let isPrime1 = (num) => {
    if (num < 2) {
        return false
    }
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

console.log("prime numbers using arrow function : ",primeNumber2(num2));

//output : prime numbers using arrow function :  [
//    2,  3,  5,  7,
//    11, 13, 17, 19
//  ]