function getRandomInteger(minInclusive, maxInclusive) {
  return Math.floor(Math.random() * (maxInclusive + 1) + minInclusive);
}

module.exports = {
  getRandomInteger,
};
