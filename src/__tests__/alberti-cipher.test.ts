import { albertiCipher } from "../index";

describe("AlbertiCipher", () => {
  test("basic encoding", () => {
    const cipher = albertiCipher("HELLO", 3).encode();
    expect(cipher).toBe("AVGHM");
  });

  test("basic decoding", () => {
    const cipher = albertiCipher("AVGHM", 3).decode();
    expect(cipher).toBe("HELLO");
  });

  test("encoding with mixed case and non-alphabetic characters", () => {
    const cipher = albertiCipher("Hello, World!", 3).encode();
    expect(cipher).toBe("Aufgl, Pmyld!");
  });

  test("decoding with mixed case and non-alphabetic characters", () => {
    const cipher = albertiCipher("Aufgl, Pmyld!", 3).decode();
    expect(cipher).toBe("Hello, World!");
  });

  test("encoding with different initial position", () => {
    const cipher = albertiCipher("HELLO", 5).encode();
    expect(cipher).toBe("CAIKO");
  });

  test("decoding with different initial position", () => {
    const cipher = albertiCipher("CAIKO", 5).decode();
    expect(cipher).toBe("HELLO");
  });

  test("encoding with empty text", () => {
    expect(() => albertiCipher("", 3)).toThrow();
  });

  test("decoding with empty text", () => {
    expect(() => albertiCipher("", 3)).toThrow();
  });
});
