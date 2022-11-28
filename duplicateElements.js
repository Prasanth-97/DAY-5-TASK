//removing duplicates using anonymous function 

let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
let removingduplicates = function (arr) {
    let result = [];
    for (i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1)
        {
            result.push(arr[i]);
        }

    }
    return result;
}
let output = removingduplicates(arr);
console.log("Final array using anonymous function : ",output);

//output : Final array :  [ 'apple', 'mango', 'orange' ]

//Removing duplicates using IIFE function 

let arr1 = ["apple", "mango", "apple", "orange", "mango", "mango"];
 (function (arr) {
    let result = [];
    for (i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1)
        {
            result.push(arr[i]);
        }

    }
    console.log("Final array using IIFE function : ",result);
})
(arr1);

//output : Final array using IIFE function :  [ 'apple', 'mango', 'orange' ]
