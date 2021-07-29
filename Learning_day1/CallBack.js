function doHomeWork(subject,callback){
    console.info("study: "+subject);
    callback();
}
alertMsg = function(){
    console.info("pending");
}
doHomeWork('math',alertMsg);

/*
function task1(){
    console.log("function a");
}
function task2(){
    console.log("function b");
}
setTimeout(task1,2000);
task2();
*/

// callback example
function task1(callback){
    setTimeout(()=>{
    console.log("function a");
    callback();
    },2000)
}
function task2(){
    console.log("function b");
}
task1(task2);
