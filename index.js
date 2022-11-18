function firseFuntion(value, callBack) {
  console.log("hello man");

  callBack(value);
}

function callMe(value){
    console.log("call me " + value)
}

firseFuntion("nayeem",callMe)