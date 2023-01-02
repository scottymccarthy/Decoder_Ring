// Write your tests here!
const expect = require("chai").expect;
const {substitution} = require("../src/substitution.js");

describe("Checking if inputted alphabet is valid", () => {
  it("should return false if inputted alphabet is not 26 characters long", () => {
  const actual = substitution("message", "qwertyuiopas")
  expect(actual).to.be.false;
    });
  });

describe("Checking if Substitution works properly", () => {
  it("should correctly translate the given phrase, based on the alphabet given to the function", () => {
  const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
  const expected = "ykrrpik"
  expect(actual).to.eql(expected);
    });
  });

describe("Checking if inputted alphabet is valid", () => {
  it("should return false if there are any duplicate characters in the given alphabet.", () => {
  const actual = substitution("message", "qwertyuiopasdfghjklzxcvbnq")
  expect(actual).to.be.false;
    });
  });

describe("Checking if Substitution works properly", () => {
  it("should maintain spaces in the message when decoding", () => {
  const actual = substitution("x amddxgm", "xoyqmcgrukswaflnthdjpzibev", false);
  const expected = "a message"
  expect(actual).to.eql(expected);
    });
  });

describe("Checking if Substitution works properly", () => {
  it("should ignore capital letters when encoding", () => {
  const actual = substitution("A Message", "$wae&zrdxtfcygvuhbijnokmpl");
  const expected = "$ y&ii$r&"
  expect(actual).to.eql(expected);
    });
  });
