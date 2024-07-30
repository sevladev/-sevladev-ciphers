# @sevladev/ciphers

A collection of ciphers.

1. **Caesar Cipher**:
   - The Caesar Cipher is a simple substitution cipher where each letter in the plaintext is shifted a certain number of places down or up the alphabet. For example, with a shift of 3, 'A' would be replaced by 'D', 'B' would become 'E', and so on. The same process is applied in reverse for decoding.

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

// Create a CaesarCipher instance with the text and the shift value
const cipher = caesarCipher("Hello, World! 123", 3);

// Encode the text
const encodedText = cipher.encode();
console.log(`Encoded Text: ${encodedText}`); // Output: Khoor, Zruog! 456

// Decode the text
const decodedText = cipher.decode();
console.log(`Decoded Text: ${decodedText}`); // Output: Hello, World! 123
```
