function getMaxProfit(prices) {
  if (prices.length < 2) {
    throw new Error('Must provide at least 2 prices');
  }

  let minPrice = prices[0];
  let maxProfit = prices[1] - prices[0];

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    const currentProfit = currentPrice - minPrice;

    maxProfit = Math.max(maxProfit, currentProfit);
    minPrice = Math.min(minPrice, currentPrice);
  }

  return maxProfit;
}

const stockPrices = [10, 7, 5, 8, 11, 9];
const answer = getMaxProfit(stockPrices); // 6
console.log(answer);
