const getWordLengths = function (someWords) {
  //Schrijf je functie...
  const wordsLength = [];
  someWords.forEach((element) => {
    wordsLength.push(element.length);
  });
  return wordsLength;
};

module.exports = getWordLengths;
