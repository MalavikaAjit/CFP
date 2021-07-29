/** example **/
let task1 = new Promise((resolve,reject)=>{
    let sum=2+3;
    if(sum==5){
        resolve("Resolved")
    }else{
        reject("Failed")
    }
})

task1.then((message)=>{
    console.log("resolved promise in then" + message)
}).catch((message)=>{
    console.log("failed or rejected promise in catch"+message)
})




/*callback hell
firstRequest(function(response) {  
    secondRequest(response, function(nextResponse) {    
        thirdRequest(nextResponse, function(finalResponse) {     
            console.log('Final response: ' + finalResponse);    
        }, failureCallback);  
    }, failureCallback);
}, failureCallback);
*/

/** example **/
function add_positivenos_async(n1, n2) {
    let p = new Promise(function (resolve, reject) {
       if (n1 >= 0 && n2 >= 0) {
        resolve(n1 + n2)
       }
       else
          reject('NOT_Postive_Number_Passed') 
       })
       return p;
 }

 add_positivenos_async(10, 20)
    .then(successHandler) // if promise resolved
    .catch(errorHandler);// if promise rejected

 add_positivenos_async(-10, -20)
    .then(successHandler) // if promise resolved
    .catch(errorHandler);// if promise rejected

 function errorHandler(err) {
    console.log('Handling error', err)
 }
 function successHandler(result) {
    console.log('Handling success', result)
 }


