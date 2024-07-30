import { vigenereCipher } from "../ciphers/vigenere-cipher";

describe("VigenereCipher", () => {
  test("basic encoding", () => {
    const cipher = vigenereCipher("Hello World!", "KEY").encode();
    expect(cipher).toBe("Rijvs Uyvjn!");
  });

  test("basic decoding", () => {
    const cipher = vigenereCipher("Rijvs Uyvjn!", "KEY").decode();
    expect(cipher).toBe("Hello World!");
  });

  test("encoding with mixed case and non-alphabetic characters", () => {
    const cipher = vigenereCipher("Hello, World!", "KEY").encode();
    expect(cipher).toBe("Rijvs, Uyvjn!");
  });

  test("decoding with mixed case and non-alphabetic characters", () => {
    const cipher = vigenereCipher("Rijvs, Uyvjn!", "KEY").decode();
    expect(cipher).toBe("Hello, World!");
  });

  test("encoding with long secret", () => {
    const cipher = vigenereCipher(
      "EXAMPLE-EXAMPLE-EXAMPLE",
      "EXAMPLEEXAMPLE"
    ).encode();
    expect(cipher).toBe("IUAYEWI-IUAYEWI-IUAYEWI");
  });

  test("decoding with long secret", () => {
    const cipher = vigenereCipher(
      "IUAYEWI-IUAYEWI-IUAYEWI",
      "EXAMPLEEXAMPLE"
    ).decode();
    expect(cipher).toBe("EXAMPLE-EXAMPLE-EXAMPLE");
  });

  test("encoding with short secret repeated", () => {
    const cipher = vigenereCipher("THEEXAMPLEVIGENERE", "KEY").encode();
    expect(cipher).toBe("DLCOBYWTJOZGQILOVC");
  });

  test("decoding with short secret repeated", () => {
    const cipher = vigenereCipher("DLCOBYWTJOZGQILOVC", "KEY").decode();
    expect(cipher).toBe("THEEXAMPLEVIGENERE");
  });

  test("encoding with empty text", () => {
    expect(() => vigenereCipher("", "KEY")).toThrow();
  });

  test("decoding with empty text", () => {
    expect(() => vigenereCipher("", "KEY")).toThrow();
  });

  test("encoding with empty secret", () => {
    expect(() => vigenereCipher("HELLO", "")).toThrow();
  });

  test("decoding with empty secret", () => {
    expect(() => vigenereCipher("RIJVS", "")).toThrow();
  });

  test("encoding with spaces in text", () => {
    const cipher = vigenereCipher("HELLO WORLD", "KEY").encode();
    expect(cipher).toBe("RIJVS UYVJN");
  });

  test("decoding with spaces in text", () => {
    const cipher = vigenereCipher("RIJVS UYVJN", "KEY").decode();
    expect(cipher).toBe("HELLO WORLD");
  });

  test("encoding with numbers in text", () => {
    const cipher = vigenereCipher("HELLO123", "KEY").encode();
    expect(cipher).toBe("RIJVS123");
  });

  test("decoding with numbers in text", () => {
    const cipher = vigenereCipher("RIJVS123", "KEY").decode();
    expect(cipher).toBe("HELLO123");
  });

  test("encoding and decoding with same secret and text", () => {
    const encode = vigenereCipher("SAMEKEY", "SAMEKEY").encode();
    const decode = vigenereCipher(encode, "SAMEKEY").decode();

    expect(encode).toBe("KAYIUIW");
    expect(decode).toBe("SAMEKEY");
  });
});
