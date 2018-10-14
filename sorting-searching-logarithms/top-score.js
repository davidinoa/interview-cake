function sortScores(scores, maxScore) {
  const scoreCounts = new Array(maxScore + 1).fill(0);
  scores.forEach(score => scoreCounts[score]++);

  const sortedScores = [];
  for (let score = maxScore; score >= 0; score--) {
    const count = scoreCounts[score];

    for (let i = 0; i < count; i++) {
      sortedScores.push(score);
    }
  }

  return sortedScores;
}
