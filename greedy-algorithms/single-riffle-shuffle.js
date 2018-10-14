function isSingleRiffle(half1, half2, shuffledDeck) {
  let half1Index = 0;
  let half2Index = 0;
  const half1MaxIndex = half1.length - 1;
  const half2MaxIndex = half2.length - 1;

  for (let i = 0; i < shuffledDeck.length; i++) {
    const card = shuffledDeck[i];

    if (half1Index <= half1MaxIndex && half1[half1Index] === card) {
      half1Index++;
    } else if (half2Index <= half2MaxIndex && half2[half2Index] === card) {
      half2Index++;
    } else {
      return false;
    }
  }

  return true;
}
