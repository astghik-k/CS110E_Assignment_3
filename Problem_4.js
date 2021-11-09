
function reverseNumber(num) {
  
  let reverse = ""
  for (let i = num.length - 1; i >= 0; i--) {
      reverse += num[i];

  }

  if (num == reverse ) {

    return true }

    return false
  
}

console.log(reverseNumber("1591"))