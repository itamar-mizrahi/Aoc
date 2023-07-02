import input from "./input.js";
let inputString = input;

function divideToArrVal(input) {
input = inputString.trim().split("\n");
  let values = input.map(Number);
return values;
}
function getIncreaseNum (arr){
    let increase=0
    for (let i=0;i<arr.length;i++){
        if (arr[i]<arr[i+1]){
            increase++;
        }
    }
    console.log(increase);
}

function sumThreeNumbers(array) {
    let result = [];
for (let i = 0; i < array.length; i += 1) {
    let num1 = array[i];
    let num2 = array[i + 1];
    let num3 = array[i + 2];

    let sum = num1 + num2 + num3;

    result.push(sum);

  }
console.log(result);
  return result;
}


let arr=divideToArrVal(inputString); 
let arrOfSum=sumThreeNumbers(arr);
getIncreaseNum (arrOfSum);
