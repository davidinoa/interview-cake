function getMaxProfit(prices) {
  if (prices.length < 2) {
    throw new Error('Not enough prices');
  }

  var lowestPrice = prices[0];
  var maxProfit = prices[1] - prices[0];

  for (var i = 1; i < prices.length; i++) {
    var currentPrice = prices[i];
    var currentProfit = currentPrice - lowestPrice;

    maxProfit = Math.max(currentProfit, maxProfit);
    lowestPrice = Math.min(currentPrice, lowestPrice);
  }

  return maxProfit;
}
