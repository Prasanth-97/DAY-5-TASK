//printing array rotation using anonymous function 

let array = [2, 5, 7, 9, 1, 8];
let k = 2; // k represents no of rotations
let len = array.length;
let arrayRotation = function (arr, k, n) {
    k = k % n;
    let result1 = [];
    let result2 = [];
    for (i = 0; i < n; i++) {
        if (i < k) {
            result1.push(arr[n + i - k]);
        }
        else {
            result2.push(arr[i - k])
        }
    }
    const result = result1.concat(result2);
    console.log("array rotation using anonymous function for k is 2  : ",result);
}
arrayRotation(array, k, len);

//output : array rotation using anonymous function  for k = 2 :  [ 1, 8, 2, 5, 7, 9 ]

//Priting array rotation using IIFE function 

let array1 = [2, 5, 7, 9, 1, 8];
let k1 = 4; // k represents no of rotations
let len1 = array.length;
 (function (arr, k, n) {
    k = k % n;
    let result1 = [];
    let result2 = [];
    for (i = 0; i < n; i++) {
        if (i < k) {
            result1.push(arr[n + i - k]);
        }
        else {
            result2.push(arr[i - k])
        }
    }
    const result = result1.concat(result2);
    console.log("array rotation using arrow function for k is 4 : ",result);
})
(array1, k1, len1);

//output : array rotation using arrow function for k is 4 :  [ 7, 9, 1, 8, 2, 5 ]