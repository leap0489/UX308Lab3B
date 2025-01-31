import { calculateVolume } from "../calculateprismvolume";

describe("A suite", function() {
    it("tests a length of 3 and a height of 4", function() {
      let volume = calculateVolume(3, 4);
      expect(volume.toFixed(2)).toBe("31.18");
    });
  });
  describe("A suite", function() {
    it("tests a length of 3 and a height of 4", function() {
      let volume = calculateVolume(4, 5);
      expect(volume.toFixed(2)).toBe("69.28");
    });
  });
  
  