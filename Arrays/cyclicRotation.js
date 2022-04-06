function solution(A, K) {
    //array A of N integers
    
    //if The length of array is equal to K otherwise set K to the length of the reminder.
    if( K%A.length == 0 ){
        return A
    }else {
        x = K%A.length
    }

    let newArray = []
    let at = 0

    for( let i = x; i<A.length; i++ ) {
        newArray[i] = A[at]
        at++
    }

    for( let i = 0; i < x; i++ ) {
        newArray[i] = A[at]
        at++
    }

    return newArray
}
A = [3, 8, 9, 7, 6]
K = 3

console.log(solution(A, K))