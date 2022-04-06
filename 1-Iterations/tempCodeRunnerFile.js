console.log(solution(1041))
function solution(N) {

    const x = Number(N).toString(2)

    let BinaryGap = []
    let currentGap = 0
    let i=0
    
    while ( i<BinaryGap.length) {
       
        if (x[i] === 0) {
            currentGap++
x
            if(x[i + 1] === 1) {
                BinaryGap.push(currentGap)
                currentGap = 0
            }
            // i++
        }
        i++
    }
    if (BinaryGap.length===1){
        return BinaryGap[0];
    } else if (BinaryGap.length>1){
        return Math.max(...BinaryGap)
    } else {
        return 0
    }
}