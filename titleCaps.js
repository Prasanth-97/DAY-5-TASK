// Printing title caps using anonymous function

var array = ["hi", "i", "am", "prasanth"];
let arr1 = function (value) {
    let  result = [];
    for (i = 0; i < value.length; i++) {
        let titlecaps = value[i].charAt(0).toUpperCase() + value[i].slice(1);
         result.push(titlecaps);
    }
    return result;
}
console.log("Title caps using anonymous function",arr1(array));

// output : Title caps using anonymous function [ 'Hi', 'I', 'Am', 'Prasanth' ]

//Printing title caps using IIFE function

var array = ["hi", "i", "am", "prasanth"];
 (function (value) {
    let result = [];
    for (i = 0; i < value.length; i++) {
        let titlecaps =  value[i].charAt(0).toUpperCase() + value[i].slice(1);
        result.push(titlecaps);
    }
    console.log("Title caps using IIFE function",result);
})
(array);

//output : Title caps using IIFE function [ 'Hi', 'I', 'Am', 'Prasanth' ]

//Printing titlecaps using arrow function

var array = ["hi", "i", "am", "prasanth"];
let arr2 =  (value) => {
    var result = [];
    for (i = 0; i < value.length; i++) {
       let titlecaps =  value[i].charAt(0).toUpperCase() + value[i].slice(1);
       result.push(titlecaps);
    }
    return result;
}
console.log("Title caps using arrow fnction",arr2(array));

//output : Title caps using arrow fnction [ 'Hi', 'I', 'Am', 'Prasanth' ]