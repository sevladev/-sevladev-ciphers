import { alphabetUpperCase, alphabetLowerCase } from "../utils";

/**
 * Class representing a Vigenere Cipher.
 */
class VigenereCipher {
  private text: string;
  private secret: string;

  /**
   * Create a VigenereCipher instance.
   *
   * @param text - The text to be encoded or decoded.
   * @param secret - The secret used for the Vigenere Cipher.
   */
  constructor(text: string, secret: string) {
    this.text = text;
    this.secret = secret.replace(/[^a-zA-Z]/g, "").toUpperCase();
  }

  /**
   * Encodes the text using the Vigenere Cipher.
   *
   * @returns The encoded text.
   */
  encode(): string {
    return this.transform("encode");
  }

  /**
   * Decodes the text using the Vigenere Cipher.
   *
   * @returns The decoded text.
   */
  decode(): string {
    return this.transform("decode");
  }

  /**
   * Transforms the text by encoding or decoding it using the Vigenere Cipher.
   *
   * @param mode - The mode of transformation, either 'encode' or 'decode'.
   * @returns The transformed text.
   */
  private transform(mode: "encode" | "decode"): string {
    const secretRepeated = this.secret
      .repeat(Math.ceil(this.text.length / this.secret.length))
      .substring(0, this.text.length);
    let secretIndex = 0;

    return this.text
      .split("")
      .map((char) => {
        if (alphabetUpperCase.includes(char)) {
          const textCharIndex = alphabetUpperCase.indexOf(char);
          const secretCharIndex = alphabetUpperCase.indexOf(
            secretRepeated[secretIndex]
          );
          const shift = mode === "encode" ? secretCharIndex : -secretCharIndex;
          const newIndex = (textCharIndex + shift + 26) % 26;
          secretIndex++;
          return alphabetUpperCase[newIndex];
        } else if (alphabetLowerCase.includes(char)) {
          const textCharIndex = alphabetLowerCase.indexOf(char);
          const secretCharIndex = alphabetUpperCase.indexOf(
            secretRepeated[secretIndex]
          );
          const shift = mode === "encode" ? secretCharIndex : -secretCharIndex;
          const newIndex = (textCharIndex + shift + 26) % 26;
          secretIndex++;
          return alphabetLowerCase[newIndex];
        } else {
          return char;
        }
      })
      .join("");
  }
}

/**
 * Factory function to create a VigenereCipher instance.
 *
 * @param text - The text to be encoded or decoded.
 * @param secret - The secret used for the Vigenere Cipher.
 * @returns A VigenereCipher instance.
 */
export const vigenereCipher = (
  text: string,
  secret: string
): VigenereCipher => {
  if (!secret || !text) {
    throw new Error("Secret or Text cannot be empty");
  }
  return new VigenereCipher(text, secret);
};
