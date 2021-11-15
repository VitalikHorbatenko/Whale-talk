let input = 'Money makes the world go round';
const vowels = ["e", "a", "o", "u", "i"]; 
let resultArray = [];

for (i = 0; i < input.length; i++) {
  for (j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j])  {
    if (input[i] === "e") {
      resultArray.push("ee");
   } else if (input[i] === "u") {
    resultArray.push("ee"); 
   } else {
     resultArray.push(input[i]);
   }
  }
 } 
}
console.log(resultArray.join("").toUpperCase());