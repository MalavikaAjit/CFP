
/**example **/
function task1() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('its');
    }, 200);
  });
}

function task2() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('async-await');
    }, 300);
  });
}
async function msg() {
  const a = await task1();
  const b = await task2();
  console.log( a +" "+ b);
}
msg();
/* example*/
function slowlyResolvedPromiseFunc(string) { 
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(string);
    }, 2000);
  });
}

async function doIt() {
  const myPromise = await slowlyResolvedPromiseFunc("slow");
  console.log(myPromise); 
}
doIt();
 /* example*/
 const doSomethingAsync = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('I did something'), 3000)
  })
}

const doSomething = async () => {
  console.log(await doSomethingAsync())
}

console.log('Before')
doSomething()
console.log('After')