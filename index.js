// function firseFuntion(value, callBack) {
//   console.log("hello man");

//   callBack(value);
// }

// function callMe(value){
//     console.log("call me " + value)
// }

// firseFuntion("nayeem",callMe)

// 2nd example

function firseFuntion(value, callBack) {
    console.log("hello man");
  
    callBack(value);
  }
  
 
  
  firseFuntion("nayeem", value=>{
    console.log("call me " + value)
})