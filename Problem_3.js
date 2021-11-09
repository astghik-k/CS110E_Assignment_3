

function reverseNumber(num) {
  
  let reverse = ""
  for (let i = num.length - 1; i >= 0; i--) {
      reverse += num[i];
  }
  if (num < 0 ) {
    reverse = "-" + reverse
    reverse = reverse.substring(0, num.length);

  }
  return reverse;
}
console.log(reverseNumber('159878'));