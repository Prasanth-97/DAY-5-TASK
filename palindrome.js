// printing palindrome using anonymous function 

let array = ["prasanth","madam","radar","refer","chennai"];
let palindrome1 = function(arr){
    let result = [];
    for( var i = 0 ; i < arr.length ; i++){
        if(ispalindrome1(arr[i])){
          result.push(arr[i]);
        }
    }
     console.log("palindrome using anonymous function : ",result);
}
let ispalindrome1 = function(arr){
     let a = arr ;
     arr = arr.split("").reverse().join("");
     return a == arr ;
     
}
palindrome1(array);

//output : palindrome using anonymous function :  [ 'madam', 'radar', 'refer' ] 

// Printing palindrome using IIFE function 

let array1 = ["prasanth", "madam", "radar", "refer", "chennai"];
(function (arr) {
    let result = [];
    for (var i = 0; i < arr.length; i++) {
        if (ispalindrome(arr[i])) {
            result.push(arr[i]);
        }
    }
    console.log("palindrome using IIFE function : ",result);
})
    (array1);

function ispalindrome(arr) {
    let a = arr;
    arr = arr.split("").reverse().join("");
    return a == arr;

}

//output : palindrome using IIFE function :  [ 'madam', 'radar', 'refer' ]

// Printing palindrome using arrow function 

let array2 = ["prasanth","madam","radar","refer","chennai"];
let palindrome2 = (arr) => {
    let result = [];
    for( var i = 0 ; i < arr.length ; i++){
        if(ispalindrome2(arr[i])){
          result.push(arr[i]);
        }
    }
     console.log("palindrome using arrow function : ",result);
}
let ispalindrome2 = (arr) => {
     let a = arr ;
     arr = arr.split("").reverse().join("");
     return a == arr ;
     
}
palindrome2(array2);

//output : palindrome using arrow function :  [ 'madam', 'radar', 'refer' ]