import { atbashCipher } from "../index";

describe("AtbashCipher", () => {
  test("should be a simple enconding", () => {
    const cipher = atbashCipher("Hello World!").encode();
    expect(cipher).toBe("Svool Dliow!");
  });
  test("should be a simple decoding", () => {
    const cipher = atbashCipher("Svool Dliow!").encode();
    expect(cipher).toBe("Hello World!");
  });
  test("should be a simple enconding with numbers in string", () => {
    const cipher = atbashCipher("Hello World! 123").encode();
    expect(cipher).toBe("Svool Dliow! 123");
  });
  test("should be a simple decoding with numbers in string", () => {
    const cipher = atbashCipher("Svool Dliow! 123").encode();
    expect(cipher).toBe("Hello World! 123");
  });
});
