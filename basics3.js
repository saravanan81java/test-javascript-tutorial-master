//If else loop example
const flag = true
// we can reverse the condition of const, not reassign the const  
if(!flag){
    console.log("Have a great new year-1")
}else{
    console.log(flag)
    console.log("Have a great new year-2")
}

//while loop
let i =0
while(i<5){
console.log("******While loop example*******")
console.log("Value of i: "+i)
i++
}

//Switch Loop

switch(new Date().getDay()){

      case 0:
        day = "Sunday";
        console.log("Today day:"+ day)
        break;
      case 1:
        day = "Monday";
        console.log("Today day:"+ day)
        break;
      case 2:
        day = "Tuesday";
        console.log("Today day:"+ day)
        break;
      case 3:
        day = "Wednesday";
        console.log("Today day:"+ day)
        break;
      case 4:
        day = "Thursday";
        console.log("Today day:"+ day)
        break;
      case 5:
        day = "Friday";
        console.log("Today day:"+ day)
        break;
      case 6:
        day = "Saturday";
        console.log("Today day:"+ day)
        break;
}

var date = new Date().getDate()
console.log("Today date is "+date)
var month = new Date().getMonth()
console.log("Today month is "+month)
var year = new Date().getFullYear()
console.log("Today year is "+year)

//Switch example
let x=0
switch(x){
    case 0:
        console.log("Value equal to "+x)
        break;
    case 1:
        console.log("Value equal to "+x)
        break;
    default:
        console.log("Value equal to "+x)
}

//For Loop example

for(var k=0;k<5;k++){
    console.log("For Loop example: "+k)
}

// do while loop
var h=0
do{
console.log("do While loop: "+h)
h++
}while(h<5)

