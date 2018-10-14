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

let myChars = 'inoa'.split('');
const test = reverse(myChars);
console.log(test);
