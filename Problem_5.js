

function sumOfBinaryNumbers(binaryNumber1, binaryNumber2) {

    let stringBinary1 = "" + binaryNumber1
    let stringBinary2 = "" + binaryNumber2
    let arr1 = [];
    let arr2 = [];
     for ( let i = 0 ; i < stringBinary1.length; i++) {
         arr1[i] = Number(stringBinary1.charAt(i));
        
     }

     for ( let k = 0; k < stringBinary2.length; k++) {
        arr2[k] = Number(stringBinary2.charAt(k));
     }
         
     if (arr1.length < arr2.length) {
        for ( let n = arr2.length - arr1.length; n > 0; n--) {
           arr1.unshift(0)
        }
       } else {
        for ( let m = arr1.length - arr2.length; m > 0; m--) {
            arr2.unshift(0)
       }
     }

     let sum = []
     let carryBit 
     let i = arr1.length - 1
     let j = arr2.length - 1
     let tempSum = []

     while (i >= 0, j >= 0, carryBit = 0) {
        1 + 1 == 0
        1 + 0 == 1
        0 + 1 == 1
        0 + 0 == 0

        if(arr1[i] + arr2[j] + carryBit > 1){
            tempSum = 0;
            carryBit = 1;
            sum.unshift[tempSum];
         }else{
            tempSum = arr1[i] + arr2[j] + carryBit;
            carryBit = 0;
            sum.unshift[tempSum]
         }
    return sum     
     }   
}  
         
    console.log(sumOfBinaryNumbers(11111, 101))