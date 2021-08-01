const first = () => {
    const greet ="hi";
    const second = () =>{
        console.log(greet);
    }
    return second
}
const newfun = first();
newfun();


/*inner function ‘second()’ is a Closure. 
This inner function will have access to the variable ‘greet’ which is the part of the outer function ‘first()’ scope.
 Here the parent scope won’t have the access of child scope variable ‘name,*/