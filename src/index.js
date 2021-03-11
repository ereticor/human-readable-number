module.exports = function toReadable (number) {
  let a = ["", " one", " two", " three", " four", " five", " six", " seven", " eight", " nine", " ten", " eleven", " twelve", " thirteen", " fourteen", " fifteen", " sixteen", " seventeen", " eighteen", " nineteen"];
  let b = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  let c = [" ", "hundred", "thousand", "million", "billion"];
  if (number == 0) {
      return "zero";
  }
  else if (number < 100) {
      if (number < 20) {
          return a[number].substring(1);
      } 
      else {
          return b[Math.floor(number / 10)] + a[number % 10];
      }
  }
  else {
      if (number % 100 < 20) {
          return (a[Math.floor(number / 100)] + " " + c[1] + a[number % 100]).substring(1);
      }
      else {
          return (a[Math.floor(number / 100)] + " " + c[1] + " " + b[Math.floor(number / 10 % 10)] + a[number % 10]).substring(1);
      }
  }
}
// to much if else, i know