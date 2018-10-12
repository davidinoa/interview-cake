function hasPalindromePermutation(string) {
  const unpairedChars = new Set();

  for (let char of string) {
    if (unpairedChars.has(char)) {
      unpairedChars.delete(char);
    } else {
      unpairedChars.add(char);
    }
  }

  return unpairedChars.size <= 1;
}
