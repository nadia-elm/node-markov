const { MarkovMachine } = require("./markov");

describe("markov machine tests", function () {
 
  let mm;

  beforeEach(() => {
    mm = new MarkovMachine("the cat in the hat");
  });


  describe("should return:", function () {
    test("should return an object", function () {
      expect(mm).toEqual(expect.any(Object));
    });

    test(".makeText should return a string", function () {
      expect(mm.makeText()).toEqual(expect.any(String));
    });
    test("should not be null", function () {
      expect(mm.makeText()).not.toBeNull();
    });
    
  });
  


//   test("makeChains correctly sets chains", () => {
//     expect(mm.chains).toEqual(new Map([["the", ["cat", "hat"]], ["cat", ["in"]], ["in", ["the"]], ["hat", [null]]]));
//   });

//   test("makeText returns expected number of words", () => {
//     const text = mm.makeText();
//     const words = text.split(" ");
//     expect(words.length).toBe(100);
//   });
});

