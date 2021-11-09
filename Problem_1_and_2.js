

function primeNumber(num) {

    
    
    if (num == 2) {
        return true;
    }
    if (num == 1 ) {
        return false;
    }
    let k = 2;
    let sqrtNumber = Math.sqrt(num);

    while ( num > 1, k <= sqrtNumber ){
    
        if ((num % k) == 0) {
            return false;
        }
        k++;
      
    }
    return true;
    }

    console.log(primeNumber(16));


    // Problem 2

function primeNumbers(num1, num2){

    let arr = [];
    const biggerNumber = Math.max(num1, num2);
    const smallerNumber = Math.min(num1, num2);

    for (let i = smallerNumber; i<= biggerNumber; i++) {
        if(primeNumber(i)) {
            arr.push(i);
        }
    }
  
    return arr;
}
    console.log(primeNumbers(16, 2));

