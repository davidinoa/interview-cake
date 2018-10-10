function highestProductOf3(nums) {
  let highest = Math.max(nums[0], nums[1]);
  let lowest = Math.min(nums[0], nums[1]);

  let highestProductOf2 = nums[0] * nums[1];
  let lowestProductOf2 = nums[0] * nums[1];

  let highestProductOf3 = nums[0] * nums[1] * nums[2];

  for (let i = 2; i < nums.length; i++) {
    const current = nums[i];

    highestProductOf3 = Math.max(
      highestProductOf3,
      current * highestProductOf2,
      current * lowestProductOf2,
    );

    highestProductOf2 = Math.max(
      highestProductOf2,
      current * highest,
      current * lowest,
    );
    lowestProductOf2 = Math.min(
      lowestProductOf2,
      current * highest,
      current * lowest,
    );

    highest = Math.max(highest, current);
    lowest = Math.min(lowest, current);
  }

  return highestProductOf3;
}

const integers = [1, 10, -5, 1, -100];
const result = highestProductOf3(integers);
console.log(result);
