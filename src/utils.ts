export const alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz";
export const alphabetUpperCase = alphabetLowerCase.toUpperCase();
export const numbers = "0123456789";

export const generateVigenereTable = () => {
  const table = [];
  for (let i = 0; i < 26; i++) {
    const row = [];
    for (let j = 0; j < 26; j++) {
      row.push(String.fromCharCode(((i + j) % 26) + 65));
    }
    table.push(row);
  }
  return table;
};

export const generateRandomString = (
  length: number,
  withNumbers: boolean = false
): string => {
  let result = "";
  let charset = alphabetLowerCase + alphabetUpperCase;

  if (withNumbers) {
    charset = charset + numbers;
  }

  const charsetLength = charset.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charsetLength);
    result += charset[randomIndex];
  }

  return result;
};
