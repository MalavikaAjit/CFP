var iife = function (){
    return 'Immediately Invoked Function Expressions(IIFEs)  ';
  }();
  console.log(iife); 

  (function(value){
    var greet = 'Hello';
    console.log(greet+ ' ' + value);
  })('IIFEs');
  

  /*example*/
  // Regular Function.
function Greet()
{
    console.log("Welcome !!");
};
// Execution of Regular Function.
Greet();
  
// IIFE creation and execution.
(function() { console.log("Welcome here"); })();
 










































/* function
function statement(item){
    console.log('Function statement example '+ item);
  }
*/ 
/* function expression
var expression = function (item){
    console.log('Function expression example '+ item);
  } 
  */
 