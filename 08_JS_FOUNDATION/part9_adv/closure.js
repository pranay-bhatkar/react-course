function outer(){
    let counter = 4;
    return function (){
        counter++
        return counter
    }
}

let incerement = outer()
console.log(incerement());
