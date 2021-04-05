const { getRandomInteger } = require("./random-utils");

function isNumberListSorted(numberList) {
  for (let i = 0; i < numberList.length - 1; i++) {
    if (numberList[i] > numberList[i + 1]) {
      return false;
    }
  }

  return true;
}

function swapRandomItemsInNumberList(numberList) {
  const swapTarget1Index = getRandomInteger(0, numberList.length - 1);
  const swapTarget2Index = getRandomInteger(0, numberList.length - 1);

  const swapTarget1Item = numberList[swapTarget1Index];
  const swapTarget2Item = numberList[swapTarget2Index];

  const newTarget1Item = swapTarget2Item;
  const newTarget2Item = swapTarget1Item;

  const swappedNumberList = [...numberList];
  swappedNumberList[swapTarget1Index] = newTarget1Item;
  swappedNumberList[swapTarget2Index] = newTarget2Item;

  return swappedNumberList;
}

module.exports = { isNumberListSorted, swapRandomItemsInNumberList };
