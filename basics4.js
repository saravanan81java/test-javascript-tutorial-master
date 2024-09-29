//Resolving the promises

const promise = new Promise(function (resolve, reject) {
    const string1 = "geeksforgeeks";
    const string2 = "geeksforgeeks";
    if (string1 === string2) {
      resolve();
    } else {
      reject();
    }
  });
 
  promise
    .then(function () {
      console.log("Promise resolved successfully");
    })
    .catch(function () {
      console.log("Promise is rejected");
    })
    .finally(()=>{
      console.log("Finally block is executed");
    })


    //Try catch block

    try{
    x=0
    if(x<5) throw "too low"
    }catch(err){
     console.log("catch block executed-1")
    }
