import input5 from "./input5.js";
let inputString = input5;

function convertToArrRepresentation(coordinates) {
  coordinates = inputString.split("\n");
  const arrRepresentation = coordinates.map((coord) => {
    const [xy1, xy2] = coord.split(" -> ");
    const [x1, y1] = xy1.split(",");
    const [x2, y2] = xy2.split(",");
    return [
      [Number(x1), Number(y1)],
      [Number(x2), Number(y2)],
    ];
  });
  return arrRepresentation;
}

function removeNotEqual(arr) {
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i][0][0], arr[i][1][0], arr[i][0][1], arr[i][1][1]);
        if (arr[i][0][0] !== arr[i][1][0] && arr[i][0][1] !== arr[i][1][1]) {
            arr.splice(i, 1);
            i--;
        }
    }
    console.log(ar);
    console.log(arr.length);
}


function matrixOfCoordinates() {
    const arr = []
    for (let i = 0; i < 1000; i++) {
        arr[i] = []
        for (let j=0; j<1000; j++) {
            arr[i][j] = 0
        }
    }
    // for 
    // arr[858]
}
const arrRepresentation = convertToArrRepresentation(inputString);
removeNotEqual(arrRepresentation);
