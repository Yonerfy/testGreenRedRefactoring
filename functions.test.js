const addOne = require("./add-one.js");

test("Add 1 to each item in myArray", function () {
  const myArray = [31, 57, 12, 5];

  const unchanged = [31, 57, 12, 5];
  const expected = [32, 58, 13, 6];
  const output = addOne(myArray);

  expect(output).toEqual(expected);
  expect(myArray).toEqual(unchanged);
});

const getWordLengths = require("./get-word-lengths.js");

test("Get word lengths", function () {
  const words = ["sun", "potato", "roundabout", "pizza"];
  const expected = [3, 6, 10, 5];

  const output = getWordLengths(words);
  expect(output).toEqual(expected);
});

const findNeedle = require("./find-needle.js");

test("Find the needle", function () {
  const words = ["house", "train", "slide", "needle", "book"];
  const expected = 3;

  const output = findNeedle(words, "needle");
  expect(output).toEqual(expected);
});
