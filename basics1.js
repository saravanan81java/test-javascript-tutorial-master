//Array
/*
var a=[15,76,90,101]

console.log(a)

console.log(a.length)

console.log(a.push(90))
console.log(a)

console.log(a.unshift(45))
console.log(a)
*/

// Reduce: Purpose: Updating the array with some conditions like product of the array, sum of the array

var marks=[12,13,14,15,16,18]
let productOfArray=marks.reduce((product,productOfMarks)=>product*productOfMarks,1)
console.log("Product of all the elements in the array: "+productOfArray)

//Product of array using for loop
var p=1
for(let i=0;i<marks.length;i++){
p*=marks[i]
}
console.log("Product of the array value using for loop: "+p)

// Filter : Filter the array with some condition and save it into new array
//Using for loop
let newArray=[]
for(let i=0;i<marks.length;i++){
    
if(marks[i]%2==0){
    newArray.push(marks[i])
}
}
console.log("Even number using For loop: "+newArray)

//Using Filter
let evenNumber=marks.filter(mark=>mark%2==0)

console.log("Even Number using Filter: "+evenNumber)

//Using map

let mappedArray = marks.map(mark=>mark*5)
console.log("Mapped Array "+mappedArray)

