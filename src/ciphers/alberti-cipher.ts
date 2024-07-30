import { alphabetUpperCase, alphabetLowerCase } from "../utils";

const defaultInnerDiskUpper = "XYPQRSTUVZABCDEFGHIKLMNO";
const defaultInnerDiskLower = defaultInnerDiskUpper.toLowerCase();

/**
 * Class representing an Alberti Cipher.
 */
class AlbertiCipher {
  private text: string;
  private outerDiskUpper: string;
  private innerDiskUpper: string;
  private outerDiskLower: string;
  private innerDiskLower: string;

  /**
   * Create an AlbertiCipher instance.
   *
   * @param text - The text to be encoded or decoded.
   * @param initialPosition - The initial position of the inner disk.
   */
  constructor(text: string, initialPosition: number) {
    if (!text) {
      throw new Error("Text cannot be empty");
    }

    this.text = text;
    this.outerDiskUpper = alphabetUpperCase;
    this.innerDiskUpper = this.rotateString(
      defaultInnerDiskUpper,
      initialPosition
    );
    this.outerDiskLower = alphabetLowerCase;
    this.innerDiskLower = this.rotateString(
      defaultInnerDiskLower,
      initialPosition
    );
  }

  /**
   * Encodes the text using the Alberti Cipher.
   *
   * @returns The encoded text.
   */
  encode(): string {
    return this.transform("encode");
  }

  /**
   * Decodes the text using the Alberti Cipher.
   *
   * @returns The decoded text.
   */
  decode(): string {
    return this.transform("decode");
  }

  /**
   * Transforms the text by encoding or decoding it using the Alberti Cipher.
   *
   * @param mode - The mode of transformation, either 'encode' or 'decode'.
   * @returns The transformed text.
   */
  private transform(mode: "encode" | "decode"): string {
    let transformedText = "";
    let currentInnerDiskUpper = this.innerDiskUpper;
    let currentInnerDiskLower = this.innerDiskLower;

    for (const char of this.text) {
      if (alphabetUpperCase.includes(char)) {
        const index =
          mode === "encode"
            ? this.outerDiskUpper.indexOf(char)
            : currentInnerDiskUpper.indexOf(char);
        const newChar =
          mode === "encode"
            ? currentInnerDiskUpper[index]
            : this.outerDiskUpper[index];

        transformedText += newChar;

        // Rotate the inner disk after each letter
        currentInnerDiskUpper = this.rotateString(currentInnerDiskUpper, 1);
      } else if (alphabetLowerCase.includes(char)) {
        const index =
          mode === "encode"
            ? this.outerDiskLower.indexOf(char)
            : currentInnerDiskLower.indexOf(char);
        const newChar =
          mode === "encode"
            ? currentInnerDiskLower[index]
            : this.outerDiskLower[index];

        transformedText += newChar;

        // Rotate the inner disk after each letter
        currentInnerDiskLower = this.rotateString(currentInnerDiskLower, 1);
      } else {
        transformedText += char; // Preserve non-alphabet characters
      }
    }

    return transformedText;
  }

  /**
   * Rotates a string by a given number of positions.
   *
   * @param str - The string to be rotated.
   * @param positions - The number of positions to rotate.
   * @returns The rotated string.
   */
  private rotateString(str: string, positions: number): string {
    return str.slice(positions) + str.slice(0, positions);
  }
}

/**
 * Factory function to create an AlbertiCipher instance.
 *
 * @param text - The text to be encoded or decoded.
 * @param initialPosition - The initial position of the inner disk.
 * @returns An AlbertiCipher instance.
 */
export const albertiCipher = (
  text: string,
  initialPosition: number
): AlbertiCipher => {
  return new AlbertiCipher(text, initialPosition);
};
