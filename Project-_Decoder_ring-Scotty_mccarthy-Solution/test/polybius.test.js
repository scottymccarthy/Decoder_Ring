// Write your tests here!
// Write your tests here!
const expect = require("chai").expect;
const {polybius} = require("../src/polybius.js");

describe("Validating polybius", () => {
  it("Should translate the letters i and j to 42 while encoding", () => {
  const actual = polybius("ij");
  const expected = "4242"
  expect(actual).to.eql(expected);
    });
  });

describe("Checking if Polybius works properly", () => {
  it("Should, when decoding, translate 42 the letters (i,j)", () => {
  const actual = polybius("42", false);
  const expected = "(i/j)"
  expect(actual).to.eql(expected);
    });
  });

describe("Checking if Polybius works properly", () => {
  it("Should, when encoding, ignore capital letters", () => {
  const actual = polybius("A Message");
  const expected = "11 23513434112251"
  expect(actual).to.eql(expected);
    });
  });

describe("Validating polybius", () => {
  it("When decoding, should maintain spaces", () => {
  const actual = polybius("3251131343 2543241341", false);
  const expected = "hello world"
  expect(actual).to.eql(expected);
    });
  });
