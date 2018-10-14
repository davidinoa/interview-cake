function getProductAllOtherNums(nums) {
  if (nums.length < 2) {
    throw new Error('Must provide at least 2 numbers');
  }

  const productAllOtherNums = [];

  let productSoFar = 1;
  for (let i = 0; i < nums.length; i++) {
    productAllOtherNums[i] *= productSoFar;
    productSoFar *= nums[i];
  }

  productSoFar = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    productAllOtherNums[j] *= productSoFar;
    productSoFar *= nums[j];
  }

  return productAllOtherNums;
}

const myNumbers = [1, 7, 3, 4];
const test = getProductAllOtherNums(myNumbers);
console.log(test); // [84, 12, 28, 21]
