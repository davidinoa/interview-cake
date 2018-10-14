function findRotationPoint(words) {
  const firstWord = words[0];
  let floorIndex = 0;
  let ceilingIndex = words.length - 1;

  while (floorIndex < ceilingIndex) {
    const middleDistance = (ceilingIndex - floorIndex) / 2;
    const middleIndex = Math.floor(middleDistance + floorIndex);

    if (words[middleIndex] === firstWord) {
      floorIndex = middleIndex;
    } else {
      ceilingIndex = middleIndex;
    }

    if (floorIndex + 1 === ceilingIndex) break;
  }

  return ceilingIndex;
}
