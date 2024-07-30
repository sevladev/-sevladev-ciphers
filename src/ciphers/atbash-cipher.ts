import { alphabetUpperCase, alphabetLowerCase } from "../utils";

/**
 * Class representing an Atbash Cipher.
 */
class AtbashCipher {
  private text: string;

  /**
   * Create an AtbashCipher instance.
   *
   * @param text - The text to be encoded or decoded.
   */
  constructor(text: string) {
    this.text = text;
  }

  /**
   * Encodes the text using the Atbash Cipher.
   *
   * @returns The encoded text.
   */
  encode(): string {
    return this.transform();
  }

  /**
   * Decodes the text using the Atbash Cipher.
   *
   * @returns The decoded text.
   */
  decode(): string {
    return this.transform();
  }

  /**
   * Transforms the text by encoding or decoding it using the Atbash Cipher.
   *
   * @returns The transformed text.
   */
  private transform(): string {
    return this.text
      .split("")
      .map((char) => {
        if (alphabetUpperCase.includes(char)) {
          const index = alphabetUpperCase.indexOf(char);
          return alphabetUpperCase[25 - index];
        } else if (alphabetLowerCase.includes(char)) {
          const index = alphabetLowerCase.indexOf(char);
          return alphabetLowerCase[25 - index];
        } else {
          return char;
        }
      })
      .join("");
  }
}

/**
 * Factory function to create an AtbashCipher instance.
 *
 * @param text - The text to be encoded or decoded.
 * @returns An AtbashCipher instance.
 */
export const atbashCipher = (text: string): AtbashCipher => {
  if (!text) {
    throw new Error("Text cannot be empty");
  }
  return new AtbashCipher(text);
};
