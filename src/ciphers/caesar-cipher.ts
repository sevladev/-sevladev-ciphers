import { alphabetLowerCase, alphabetUpperCase } from "../utils";

/**
 * Class representing a Caesar Cipher.
 */
class CaesarCipher {
  private text: string;
  private shift: number;

  /**
   * Create a CaesarCipher instance.
   *
   * @param text - The text to be encoded or decoded.
   * @param shift - The number of positions each letter should be shifted.
   */
  constructor(text: string, shift: number) {
    this.text = text;
    this.shift = shift;
  }

  /**
   * Encodes the text using the Caesar Cipher.
   *
   * @returns The encoded text.
   */
  encode(): string {
    return this.transform(this.shift);
  }

  /**
   * Decodes the text using the Caesar Cipher.
   *
   * @returns The decoded text.
   */
  decode(): string {
    return this.transform(-this.shift);
  }

  /**
   * Transforms the text by shifting letters according to the shift value.
   *
   * @param shift - The number of positions each letter should be shifted.
   * @returns The transformed text.
   */
  private transform(shift: number): string {
    const normalizedShift = ((shift % 26) + 26) % 26;
    return this.text
      .split("")
      .map((char) => {
        if (alphabetLowerCase.includes(char)) {
          const newIndex =
            (alphabetLowerCase.indexOf(char) + normalizedShift) % 26;
          return alphabetLowerCase[newIndex];
        } else if (alphabetUpperCase.includes(char)) {
          const newIndex =
            (alphabetUpperCase.indexOf(char) + normalizedShift) % 26;
          return alphabetUpperCase[newIndex];
        } else {
          return char;
        }
      })
      .join("");
  }
}

/**
 * Factory function to create a CaesarCipher instance.
 *
 * @param text - The text to be encoded or decoded.
 * @param shift - The number of positions each letter should be shifted.
 * @returns A CaesarCipher instance.
 */
export const caesarCipher = (text: string, shift: number): CaesarCipher => {
  return new CaesarCipher(text, shift);
};
