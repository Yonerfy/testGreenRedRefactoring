const findNeedle = function (words, wordToFind) {
  // Schrijf hier de functie...
  const needle = words.findIndex((e) => e == wordToFind);
  return needle;
};

module.exports = findNeedle;
