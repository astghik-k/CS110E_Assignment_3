

function binaryNumber(num) {
    
 let stringNum = "" + num;   
 let inversedBinary = "";
    

    for ( let i = 0; i < stringNum.length; i++  ) {
        if (stringNum.charAt(i) == '0') {
            inversedBinary += "1"
            
        }
        else inversedBinary += "0"

    }

        return inversedBinary
}
 
console.log(binaryNumber("00101010"))