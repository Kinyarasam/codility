let A = [2,2,3,3,4,5,2,5,4]

// console.log(A.indexOf())
// need to implement the OR logic gates
// i.e., a + a = 0
// if (A.length%2 == 0) {
//     return 0
// } else{
    var x = 0
    for (let i = 0; i < A.length; i++) {
        x ^= A[i]
        
        // for (let x = 1; x < A.length; x++) {
            // console.log(A[i] + A[x])
            // if(A[i] !== A[x]){
                // break
                // console.log(A.split(''))
            // } else {
            //     if(A[x] !== A[x]){
                    // return 0
                // }else{
                    // console.log(A[i] + ' + ' + A[x])
                    // console.log(A[i])

                // }
                // console.log('we need this')
            // }
            // while (x = A[i]) {
            //     if (A[i] = )
                
            // }
    
    //     }
    // }
}
console.log(x)













// const countOccurrences = function( arr, val) {
//     return arr.reduce((acc, elem) => {
//         return (val === elem ? acc + 1 : acc)
//     }, 0)
// }

// for (let i = 0; i<A.length; i++ ) {
//     return countOccurrences = function( arr, val) {
//         return arr.reduce((acc, elem) => {
//             return (val === elem ? acc + 1 : acc)
//         }, 0)
//     }

// }

// console.log(countOccurrences(A, 9))
// console.log( A.length )

// const map = Array.prototype.map;
// const charCodes = map.call('Hello World', (x) => x.charCodeAt(0));
// console.log( charCodes )