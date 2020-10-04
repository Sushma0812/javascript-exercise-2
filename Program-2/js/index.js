// read the first array and convert that color into a statement with the help of second array
var arrayOne = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
function convertToStatement(i)
 {
 var o = ["th","st","nd","rd"],
 number = i%100;
 return number+(o[(number-20)%10]||o[number]||o[0]);
 }
for(i = 0; i < arrayOne.length; i++){
 var value = i + 1;
 var result = (convertToStatement(value) + " choice is " + arrayOne[i] + ".");
console.log(result);
}