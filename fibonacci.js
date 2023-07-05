// Takes a number and returns an
// array containing numbers from
// the fibonacci sequence
function fibs(n) {
    let arr = [0, 1];
    if(n == 1) return [0];
    if(n == 2) return arr;
    for(let i = 2; i < n; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }

    return arr;
}

console.log(fibs(8));

// Fibonacci with Recursion

function fibsRec(n) {
    if(n == 1) return [0];
    if(n == 2) return [0, 1];
    return fibsRec(n - 1).concat(fibsRec(n - 1)[n - 3] + fibsRec(n - 1)[n - 2]);
}

console.log(fibsRec(8));