function solution(X, Y, D) {

    toBeCovered = Y-X
    if(toBeCovered % D == 0) {
        noOfJmp = toBeCovered/D
        return parseInt(noOfJmp)
    }else {
        noOfJmp = toBeCovered/D
        return parseInt(noOfJmp)
    }

}

console.log(solution(10, 85, 74))
    // X = 10
    // Y = 85
    // D = 30