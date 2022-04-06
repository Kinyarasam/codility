// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let size = A.length
    
    let sum = (size + 1) * (size + 2) / 2
    
    for(i = 0; i < size; i++) {
        sum -= A[i]
    }
    return sum
}

let arr = [2,4,3,1,6]
let result = solution(arr)
console.log(result)