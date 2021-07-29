let theName = {
    firstName : "Malavika",
    lastName :"Ajit ",
    //fullName : function(){
      //  console.log(this.firstName + this.lastName)
}
let fullName = function(state , city){
    console.log(this.firstName + this.lastName + state + city)
}    
//theName.fullName();
//let printFullName = theName.fullName();
//printFullName();
fullName.call(theName,"Kerala","Kochi")

let theName2 = {
    firstName : "Meenakshi",
    lastName :"Ajit ",
}

//theName.fullName.call(theName2);
//using call
fullName.call(theName2,"T.N", "Chennai")
//using apply
fullName.apply(theName2 , ["T.N" , "Chennai"])
//using bind
let printIt = fullName.bind(theName,"Kerala","Kochi")
printIt();
console.log(printIt)

