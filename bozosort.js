const { numberList } = require("./utils/number-list");
const {
  isNumberListSorted,
  swapRandomItemsInNumberList,
} = require("./utils/sort-utils");

let testedPermutations = 0;

function bozoSortNumberList(numberList) {
  let numberListWorkingCopy = [...numberList];

  do {
    testedPermutations++;
    numberListWorkingCopy = swapRandomItemsInNumberList(numberListWorkingCopy);
  } while (!isNumberListSorted(numberListWorkingCopy));

  return numberListWorkingCopy;
}

console.log("Sorting list:", numberList);

const start = Date.now();

const sortedList = bozoSortNumberList(numberList);

const end = Date.now();

const diff = end - start;

console.log("List sorted:", sortedList);
console.log("Attempted", testedPermutations, "permutations");
console.log("Operation took", diff, "ms");
