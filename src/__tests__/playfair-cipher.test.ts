import { playfairCipher } from "../index";

describe("PlayfairCipher", () => {
  test("should encode simple text", () => {
    const cipher = playfairCipher("Hello World!", "keyword").encode();
    expect(cipher).toBe("GyiZsc Wkcgc!X");
  });

  test("should decode simple text", () => {
    const cipher = playfairCipher("GyiZsc Wkcgc!X", "keyword").decode();
    expect(cipher).toBe("Hello World!");
  });

  test("should encode text with numbers", () => {
    const cipher = playfairCipher("Hello World! 123", "keyword").encode();
    expect(cipher).toBe("GyiZsc Wkcgc! 123X");
  });

  test("should decode text with numbers", () => {
    const cipher = playfairCipher("GyiZsc Wkcgc! 123X", "keyword").decode();
    expect(cipher).toBe("Hello World! 123");
  });

  test("should encode text with mixed case and punctuation", () => {
    const cipher = playfairCipher("Hello, World!", "keyword").encode();
    expect(cipher).toBe("GyiZsc, Okcfd!");
  });

  test("should decode text with mixed case and punctuation", () => {
    const cipher = playfairCipher("GyiZsc, Okcfd!", "keyword").decode();
    expect(cipher).toBe("Hello, World!");
  });

  test("should encode text with repeated characters", () => {
    const cipher = playfairCipher("aabbccdd", "keyword").encode();
    expect(cipher).toBe("bVbccrrabU");
  });

  test("should decode text with repeated characters", () => {
    const cipher = playfairCipher("bVbccrrabU", "keyword").decode();
    expect(cipher).toBe("aabbccdd");
  });
});
