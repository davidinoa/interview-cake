function reverse(chars) {
  let leftIndex = 0;
  let rightIndex = chars.length - 1;

  while (leftIndex < rightIndex) {
    const temp = chars[leftIndex];
    chars[leftIndex] = chars[rightIndex];
    chars[rightIndex] = temp;

    leftIndex++;
    rightIndex--;
  }

  return chars;
}
