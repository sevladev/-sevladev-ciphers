import { caesarCipher } from "../index";

describe("CaesarCipher", () => {
  describe("encode", () => {
    it("should encode lowercase letters correctly", () => {
      expect(caesarCipher("abc", 3).encode()).toBe("def");
      expect(caesarCipher("xyz", 3).encode()).toBe("abc");
    });

    it("should encode uppercase letters correctly", () => {
      expect(caesarCipher("ABC", 3).encode()).toBe("DEF");
      expect(caesarCipher("XYZ", 3).encode()).toBe("ABC");
    });

    it("should handle non-alphabet characters correctly", () => {
      expect(caesarCipher("Hello, World!", 3).encode()).toBe("Khoor, Zruog!");
      expect(caesarCipher("123", 3).encode()).toBe("123");
      expect(caesarCipher("Hello, World! 123", 3).encode()).toBe(
        "Khoor, Zruog! 123"
      );
    });

    it("should handle shifts larger than 26 correctly", () => {
      expect(caesarCipher("abc", 29).encode()).toBe("def");
      expect(caesarCipher("xyz", 29).encode()).toBe("abc");
    });
  });

  describe("decode", () => {
    it("should decode lowercase letters correctly", () => {
      expect(caesarCipher("def", 3).decode()).toBe("abc");
      expect(caesarCipher("abc", 3).decode()).toBe("xyz");
    });

    it("should decode uppercase letters correctly", () => {
      expect(caesarCipher("DEF", 3).decode()).toBe("ABC");
      expect(caesarCipher("ABC", 3).decode()).toBe("XYZ");
    });

    it("should handle non-alphabet characters correctly", () => {
      expect(caesarCipher("Khoor, Zruog!", 3).decode()).toBe("Hello, World!");
      expect(caesarCipher("123", 3).decode()).toBe("123");
      expect(caesarCipher("Khoor, Zruog! 123", 3).decode()).toBe(
        "Hello, World! 123"
      );
    });

    it("should handle shifts larger than 26 correctly", () => {
      expect(caesarCipher("def", 29).decode()).toBe("abc");
      expect(caesarCipher("abc", 29).decode()).toBe("xyz");
    });
  });
});
