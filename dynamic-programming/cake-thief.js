function maxDuffelBagValue(cakeTypes, weightCapacity) {
  const maxValuesAtCapacities = new Array(weightCapacity + 1).fill(0);

  for (
    let currentCapacity = 0;
    currentCapacity <= weightCapacity;
    currentCapacity++
  ) {
    let currentMaxValue = 0;
    for (let j = 0; j < cakeTypes.length; j++) {
      const cakeType = cakeTypes[j];

      if (cakeType.weight === 0 && cakeType.value !== 0) {
        return Infinity;
      }
      if (cakeType.weight <= currentCapacity) {
        const maxValueUsingCake =
          cakeType.value +
          maxValuesAtCapacities[currentCapacity - cakeType.weight];
        currentMaxValue = Math.max(maxValueUsingCake, currentMaxValue);
      }
    }
    maxValuesAtCapacities[currentCapacity] = currentMaxValue;
  }
  return maxValuesAtCapacities[weightCapacity];
}
