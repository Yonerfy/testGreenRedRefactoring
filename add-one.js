const addOne = function (numbers) {
  // Schrijf hier de functie...
  const neWnumbers = [...numbers];
  return neWnumbers.map((e) => e + 1);
};
module.exports = addOne;
