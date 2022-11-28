// Printing ,median using anonymous function 

var array1 = [-1,20,71]
var array2 = [4,50,6]
var mergerdArray = [...array1, ...array2]
var sortedarray1 = mergerdArray.sort((a, b) => a - b);
var  sortArrayLength = sortedarray1.length
let rotatedarray = function(sortedarray1,sortArrayLength){
if (sortArrayLength % 2 === 0) {
     return (sortedarray1[(sortArrayLength / 2) - 1] + sortedarray1[(sortArrayLength) / 2]) / 2
} else {
   return  sortedarray1[Math.floor((sortArrayLength) / 2)]
}
}
 let result = rotatedarray(sortedarray1,sortArrayLength);
 console.log("median using anonymous function : ",result);

 //output : median using anonymous function :  13

 // Median using IIFE function 

 var array1 = [-1,40,71];
 var array2 = [4,50,6];
 var mergerdArray = [...array1, ...array2];
 var  sortedarray1 = mergerdArray.sort((a, b) => a - b);
 var  sortArrayLength = sortedarray1.length;
 (function(sortedarray1,sortArrayLength){
 if (sortArrayLength % 2 === 0) {
      console.log("median using IIFE function :",(sortedarray1[(sortArrayLength / 2) - 1] + sortedarray1[(sortArrayLength) / 2]) / 2);
 } else {
    console.log("median using IIFE function :",sortedarray1[Math.floor((sortArrayLength) / 2)]);
 }
 })
  (sortedarray1,sortArrayLength);

//output : median using IIFE function : 23