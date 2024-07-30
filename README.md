# @sevladev/ciphers

A collection of ciphers.

1. **Caesar Cipher**:
   - The Caesar Cipher is a simple substitution cipher where each letter in the plaintext is shifted a certain number of places down or up the alphabet. For example, with a shift of 3, 'A' would be replaced by 'D', 'B' would become 'E', and so on. The same process is applied in reverse for decoding.
2. **Vigenère Cipher**:
   - The Vigenère Cipher is a more complex polyalphabetic substitution cipher that uses a keyword to determine the shift for each letter in the plaintext. Each letter of the keyword shifts the corresponding letter in the plaintext by its position in the alphabet. For example, with the keyword “KEY”, ‘A’ would be replaced by ‘K’, ‘B’ would become ‘F’ (shifted by ‘E’), and so on. The same process is applied in reverse for decoding, using the keyword to shift letters back to their original positions.​

## Installation

To install the package, use:

```sh
npm install @sevladev/ciphers
```

## Examples

Here is examples of how to use all ciphers in your application:

### Encoding and Decoding with Caesar Cipher

```js
import { caesarCipher } from "@sevladev/ciphers";

const str = "Hello, World!";
const salt = 3;

// Encode the text
const encodedText = caesarCipher(str, salt).encode();
console.log(`Encoded Text: ${encodedText}`); // Output: Khoor, Zruog! 123

// Decode the text
const decodedText = caesarCipher(encodedText, -salt).decode();
console.log(`Decoded Text: ${decodedText}`); // Output: Hello, World! 123
```

### Encoding and Decoding with Vigenère Cipher

```js
import { vigenereCipher } from "@sevladev/ciphers";
const str = "Hello, World!";
const secret = "KEY";

// Encode the text
const encodedText = vigenereCipher(str, secret).encode();
console.log(`Encoded Text: ${encodedText}`); // Output: Rijvs Uyvjn!

// Decode the text
const decodedText = vigenereCipher(encodedText, secret).decode();
console.log(`Encoded Text: ${encodedText}`); // Output: Hello World!
```
