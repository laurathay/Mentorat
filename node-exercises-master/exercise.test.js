const { sum, hasUniqueLetter, isAnagram } = require("./exercise");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

describe("hasUniqueLetter", () => {
  test("true for different letters : ABCD ", () => {
    expect(hasUniqueLetter("ABCD")).toBe(true);
  });
  test("false when two similar letters ", () => {
    expect(hasUniqueLetter("AA")).toBe(false);
  });
  test("false when word has two same letters letters (here 2x A)", () => {
    expect(hasUniqueLetter("JAVASCRIPT")).toBe(false);
  });
  test("true when word has no repeated letters ", () => {
    expect(hasUniqueLetter("GITHUB")).toBe(true);
  });
});

describe("isAnagram", () => {

  test("2 random words, should be false", () => {
    expect(isAnagram("random", "words")).toBe(false);
  });

  test("2 anagram words, should be true", () => {
    expect(isAnagram("marion", "manoir")).toBe(true);
  });

  test("2 other anagram words, should be true", () => {
    expect(isAnagram("romain", "manoir")).toBe(true);
  });

  test("Harry Potter exemple, should be true", () => {
    expect(isAnagram("tom marvolo riddle", "i am lord voldemort")).toBe(true);
  });
});
