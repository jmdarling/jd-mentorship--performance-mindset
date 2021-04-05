const { numberList } = require("./utils/number-list");
const {
  isNumberListSorted,
  swapRandomItemsInNumberList,
} = require("./utils/sort-utils");

function jsSortNumberList(numberList) {
  return numberList.sort((a, b) => {
    return a < b ? -1 : a === b ? 0 : 1;
  });
}

console.log("Sorting list:", numberList);

const start = Date.now();

// DO THE SORT
const sortedList = jsSortNumberList(numberList);

const end = Date.now();

const diff = end - start;

console.log("List sorted:", sortedList);
console.log("Operation took", diff, "ms");
