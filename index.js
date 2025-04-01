function Monday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
  }
  
  function Tuesday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }
  
  function Wednesday() {
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
  }
  
  function Thursday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
  }
  
  function Friday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }

  //returns a function -> here functions are used as arguments to other functions
 function receivesAFunction(callback) {
   return callback();
 }
 
 // returns a named function-> here functions return functions from functions
 function returnsANamedFunction() {
   return function namedFunction() {
     return 2 + 2;
   };
 }
 
 //returns an anonymous function -> function does not have a name
 function returnsAnAnonymousFunction() {
   return function () {
     return `I hope I got this`;
   };
 }