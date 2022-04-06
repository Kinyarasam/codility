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
    // return (BinaryGap)

    // if (BinaryGap.length>1) {
    //     let a = 0
    //     for(a = 0; a < BinaryGap.length; a++) {
            // return Math.max( ...BinaryGap[a+1]- BinaryGap[a]-1)
            // return Math.max(...BinaryGap)    
            // let Gap = []
                // Gap.push(BinaryGap[a+1] - BinaryGap[a] - 1)
                // return Gap   
                // console.log(Gap)
    //     }
    // }else if(BinaryGap.length <= 1){
    //     let Gap = (BinaryGap[0])
        // return Gap
    // }
    
    // return Gap

// }


function solution(N) {
    const bin = N.toString(2);

    let currentGap = 0;
    let gaps = [];

    for (i=0; i<bin.length; i++){

        if (bin[i]==="0"){
            currentGap++;

            if (bin[i+1]==="1"){
                gaps.push(currentGap);
                currentGap = 0;
            }
        }
    }

    if (gaps.length===1){
        return gaps[0];
    } else if (gaps.length>1){
        return Math.max(...gaps)
    } else {
        return 0
    }
}







// function solution(N) {
//     let x = Number(N).toString(2)

//     x.split('')
//     for(i = 0; i < x.length; i++){
//         console.log(i)
//     }
// }
// console.log(Number(3).toString(2)) //convert number to Binary
// console.log(x.split(''))
// const y = x.split('')
// console.log(x.split('')[3])

// console.log(x.split(''))
// console.log(x.indexOf(1))
// console.log(x.indexOf(1)+1)
// console.log(x.length)
//         console.log(i)
// for(i = 0 ; i < x.length; i++){
//     y = x.split('')[i]
//     if(y == 1){ 
//         if( x.split[i+1] == 1) {
//             // end of counter
//             console.log('next number is 1')
//         }else{
//             // add 1 to the counter
//             // console.log('next number is 0')

//         }
//         // calculate the number of 0 in between to the next 1       
//     }else {
//         console.log(BinaryGap.toString(10) + x.indexOf(i).toString(10))
//         // console.log(i+1 )
//         // console.log('found a Zero')
//     }
//     console
// }


