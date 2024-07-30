import { alphabetUpperCase } from "../utils";

/**
 * Class representing a Playfair Cipher.
 */
class PlayfairCipher {
  private text: string;
  private grid: string[][];

  /**
   * Create a PlayfairCipher instance.
   *
   * @param text - The text to be encoded or decoded.
   * @param secret - The secret used to generate the 5x5 grid.
   */
  constructor(text: string, secret: string) {
    this.text = text;
    this.grid = this.generateGrid(secret);
  }

  /**
   * Encodes the text using the Playfair Cipher.
   *
   * @returns The encoded text.
   */
  encode(): string {
    return this.transform("encode");
  }

  /**
   * Decodes the text using the Playfair Cipher.
   *
   * @returns The decoded text.
   */
  decode(): string {
    return this.transform("decode");
  }

  /**
   * Generates the 5x5 grid based on the secret.
   *
   * @param secret - The secret used to generate the grid.
   * @returns The 5x5 grid.
   */
  private generateGrid(secret: string): string[][] {
    const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ";
    const keyString = secret.toUpperCase().replace(/J/g, "I") + alphabet;
    const uniqueChars = [...new Set(keyString)];
    const grid: string[][] = [];

    for (let i = 0; i < 5; i++) {
      grid.push(uniqueChars.slice(i * 5, i * 5 + 5));
    }

    return grid;
  }

  /**
   * Finds the position of a letter in the grid.
   *
   * @param letter - The letter to find.
   * @returns The position as an array [row, col].
   */
  private findPosition(letter: string): [number, number] {
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        if (this.grid[row][col] === letter) {
          return [row, col];
        }
      }
    }
    throw new Error("Letter not found in grid");
  }

  /**
   * Transforms the text by encoding or decoding it using the Playfair Cipher.
   *
   * @param mode - The mode of transformation, either 'encode' or 'decode'.
   * @returns The transformed text.
   */
  private transform(mode: "encode" | "decode"): string {
    const digraphs = this.createDigraphs(this.text);
    let transformedText = "";

    for (const [a, b] of digraphs) {
      if (
        !alphabetUpperCase.includes(a.toUpperCase()) ||
        !alphabetUpperCase.includes(b.toUpperCase())
      ) {
        transformedText += a + b;
        continue;
      }

      const [rowA, colA] = this.findPosition(a.toUpperCase());
      const [rowB, colB] = this.findPosition(b.toUpperCase());

      let newA: string, newB: string;

      if (rowA === rowB) {
        newA = this.grid[rowA][(colA + (mode === "encode" ? 1 : 4)) % 5];
        newB = this.grid[rowB][(colB + (mode === "encode" ? 1 : 4)) % 5];
      } else if (colA === colB) {
        newA = this.grid[(rowA + (mode === "encode" ? 1 : 4)) % 5][colA];
        newB = this.grid[(rowB + (mode === "encode" ? 1 : 4)) % 5][colB];
      } else {
        newA = this.grid[rowA][colB];
        newB = this.grid[rowB][colA];
      }

      transformedText += this.matchCase(a, newA) + this.matchCase(b, newB);
    }

    if (mode === "decode") {
      transformedText = this.removeFillers(transformedText);
    }

    return transformedText;
  }

  /**
   * Matches the case of the original character to the new character.
   *
   * @param original - The original character.
   * @param transformed - The new character.
   * @returns The new character with matched case.
   */
  private matchCase(original: string, transformed: string): string {
    return original === original.toUpperCase()
      ? transformed.toUpperCase()
      : transformed.toLowerCase();
  }

  /**
   * Creates digraphs from the text, adding filler letters if necessary.
   *
   * @param text - The text to split into digraphs.
   * @returns An array of digraphs.
   */
  private createDigraphs(text: string): [string, string][] {
    const digraphs: [string, string][] = [];
    let cleanText = text.replace(/J/g, "I");
    let i = 0;

    while (i < cleanText.length) {
      let a = cleanText[i];
      let b = cleanText[i + 1] || "X";

      if (a === b) {
        b = "X";
      } else {
        i++;
      }

      digraphs.push([a, b]);
      i++;
    }

    return digraphs;
  }

  /**
   * Removes filler letters (X) used during encoding from the decoded text.
   *
   * @param text - The text from which to remove fillers.
   * @returns The text without fillers.
   */
  private removeFillers(text: string): string {
    return text.replace(/X/g, "");
  }
}

/**
 * Factory function to create a PlayfairCipher instance.
 *
 * @param text - The text to be encoded or decoded.
 * @param secret - The secret used to generate the 5x5 grid.
 * @returns A PlayfairCipher instance.
 */
export const playfairCipher = (
  text: string,
  secret: string
): PlayfairCipher => {
  if (!text || !secret) {
    throw new Error("Text and secret cannot be empty");
  }
  return new PlayfairCipher(text, secret);
};
