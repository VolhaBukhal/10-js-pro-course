// import functions from your package
const { smartSearch, smartIndex } = require('tms-lesson32');

console.log(smartSearch(['Smith', 'John'], 'John'));
console.log(smartIndex('Smith', 'th'));

function printArr(arr){
  console.log(arr);
}
printArr(['Smith', 'John']);
