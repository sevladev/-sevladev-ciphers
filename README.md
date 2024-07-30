# @sevladev/ciphers

A collection of ciphers.

1. **Caesar Cipher**:
   - The Caesar Cipher is a simple substitution cipher named after Julius Caesar, who used it in his private correspondence. In this cipher, each letter in the plaintext is shifted a certain number of places down or up the alphabet. For example, with a shift of 3, ‘A’ would be replaced by ‘D’, ‘B’ would become ‘E’, and so on. The same process is applied in reverse for decoding, shifting each letter back by the same number of places. This straightforward encryption technique is one of the oldest and most well-known ciphers, though it is easily broken with modern methods.​⬤
2. **Vigenère Cipher**:
   - The Vigenère Cipher is a more complex polyalphabetic substitution cipher invented by Blaise de Vigenère in the 16th century. It uses a keyword to determine the shift for each letter in the plaintext. Each letter of the keyword shifts the corresponding letter in the plaintext by its position in the alphabet. For example, with the keyword “KEY”, ‘A’ would be replaced by ‘K’, ‘B’ would become ‘F’ (shifted by ‘E’), and so on. The same process is applied in reverse for decoding, using the keyword to shift letters back to their original positions. This method provides greater security than simple substitution ciphers by varying the shifts across the plaintext, making frequency analysis more difficult.
3. **Atbash Cipher**
   - The Atbash Cipher, an ancient encryption technique attributed to the Hebrew scholars of the Biblical era, is a classic substitution cipher where each letter of the alphabet is mapped to its reverse. This means that ‘A’ is substituted with ‘Z’, ‘B’ with ‘Y’, ‘C’ with ‘X’, and so on. It is a simple and symmetric cipher, meaning that the same algorithm is used for both encryption and decryption. The Atbash Cipher is one of the oldest known ciphers and is notable for its simplicity and historical significance.
4. **Alberti Cipher**
   - The Alberti Cipher, invented by Leon Battista Alberti in the 15th century, is one of the earliest polyalphabetic ciphers. It uses two concentric disks to encrypt messages. The outer disk is fixed with a standard alphabet, while the inner disk is movable and can be rotated to create different substitution alphabets. By aligning the disks to a starting position and rotating the inner disk after a certain number of characters, the cipher provides a more secure encryption method than simple substitution ciphers. The same process is applied in reverse for decoding.
5. **Playfair Cipher**
   - The Playfair Cipher, invented by Charles Wheatstone in 1854 and popularized by Lord Playfair, is a digraph substitution cipher that uses pairs of letters (digraphs) to encrypt messages. It employs a 5x5 grid of letters constructed using a secret keyword. Letters ‘I’ and ‘J’ are typically combined to fit the 25-letter grid. To encrypt, the plaintext is split into pairs of letters. If a pair contains the same letter or a single letter at the end, a filler letter like ‘X’ is added. Depending on the relative positions of the letters in the grid, each pair is substituted with another pair. The same grid and process are used in reverse for decryption. This method provides more security than simple substitution ciphers by encrypting letter pairs instead of individual letters.

## Installation

To install the package, use:

```sh
npm install @sevladev/ciphers
```

## Examples

Here is examples of how to use all ciphers in your application:

### Caesar Cipher

```js
import { caesarCipher } from "@sevladev/ciphers";

const str = "Hello, World!";
const salt = 3;

// Encode the text
const encodedText = caesarCipher(str, salt).encode();
console.log(`Encoded Text: ${encodedText}`); // Output: Khoor, Zruog!

// Decode the text
const decodedText = caesarCipher(encodedText, salt).decode();
console.log(`Decoded Text: ${decodedText}`); // Output: Hello, World!
```

### Vigenère Cipher

```js
import { vigenereCipher } from "@sevladev/ciphers";
const str = "Hello, World!";
const secret = "KEY";

// Encode the text
const encodedText = vigenereCipher(str, secret).encode();
console.log(`Encoded Text: ${encodedText}`); // Output: Rijvs Uyvjn!

// Decode the text
const decodedText = vigenereCipher(encodedText, secret).decode();
console.log(`Decoded Text: ${encodedText}`); // Output: Hello World!
```

### Atbash Cipher

```js
import { atbashCipher } from "@sevladev/ciphers";

const str = "Hello, World!";

const encodedText = atbashCipher(str).encode();
console.log(`Encoded Text: ${encodedText}`); // Output: Svool Dliow!

const decodedText = atbashCipher(encodedText).decode();
console.log(`Decoded Text: ${encodedText}`); // Output: Hello, World!
```

### Alberti Cipher

```js
import { albertiCipher } from "@sevladev/ciphers";

const str = "Hello, World!";
const initialPosition = 3;

const encodedText = albertiCipher(str, initialPosition).encode();
console.log(`Encoded Text: ${encodedText}`); // Output: Aufgl, Pmyld!

const decodedText = albertiCipher(encodedText).decode();
console.log(`Decoded Text: ${encodedText}`); // Output: Hello, World!
```

### Playfair Cipher

```js
import { playfairCipher } from "@sevladev/ciphers";

const str = "Hello, World!";
const initialPosition = "keyword";

const encodedText = playfairCipher(str, initialPosition).encode();
console.log(`Encoded Text: ${encodedText}`); // Output: GyiZsc, Okcfd!

const decodedText = playfairCipher(encodedText).decode();
console.log(`Decoded Text: ${encodedText}`); // Output: Hello, World!
```
