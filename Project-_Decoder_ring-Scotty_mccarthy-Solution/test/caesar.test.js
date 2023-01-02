// Write your tests here!
// Write your tests here!
const expect = require("chai").expect;
const {caesar} = require("../src/caesar.js");

describe("Checking if input is valid", () => {
  it("should return false if shift input is 0", () => {
  const actual = caesar("input", 0);
  expect(actual).to.be.false;
    });
  });

describe("Checking if input is valid", () => {
  it("should return false if shift is greater than 25", ()=> {
    const actual = caesar("input", 26);
    expect(actual).to.be.false;
  });
});

describe("Checking if input is valid", () => {
  it("should return false if shift is less than -25", ()=> {
    const actual = caesar("input", -26);
    expect(actual).to.be.false;
  })
});

describe("Checking if input is valid", () => {
  it("should return false if no shift input", ()=> {
    const actual = caesar("input");
    expect(actual).to.be.false;
  })
});

describe("Checking if Caesar shift works properly", () => {
  it("ignores capital letters", () => {
  const actual = caesar("My MY", 3);
  const expected = "pb pb"
  expect(actual).to.eql(expected);
    });
  });

describe("Checking if Caesar shift works properly", () => {
  it("handles shifts that go past the end of the alphabet", () => {
  const actual = caesar("zzz", 3);
  const expected = "ccc"
  expect(actual).to.eql(expected);
    });
  });

describe("Checking if Caesar shift works properly", () => {
  it("should maintain spaces and other nonalphabetic symbols when encoding.", () => {
  const actual = caesar("aaa Aaa!", 3);
  const expected = "ddd ddd!"
  expect(actual).to.eql(expected);
    });
  });

describe("Checking if Caesar shift works properly", () => {
  it("should maintain spaces and other nonalphabetic symbols when decoding", () => {
  const actual = caesar("ddd ddd!", 3, false);
  const expected = "aaa aaa!"
  expect(actual).to.eql(expected);
    });
  });
