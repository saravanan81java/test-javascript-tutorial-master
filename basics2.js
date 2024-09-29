//reduce,filter and Map


let numberArray = [10,11,13,14,16,20]

let evenArray = numberArray.filter(number=>number%2==0)
console.log("-----Even Array: "+evenArray);

//Multiply each number in the array by 10 and add all the number

let totalNumber=evenArray.map(even=>even*10).reduce((sum,variable)=>sum+variable,0)
console.log("------ Total number:"+totalNumber)


