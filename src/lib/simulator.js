export function simulateROI(params) {
  const {
    rigCost,
    hashRate,
    powerConsumption,
    electricityCost,
    coinPrice,
    initialDifficulty,
    difficultyIncreasePct,
    periodMonths,
    blockReward = 6.25,
    blocksPerDay = 144
  } = params;

  let difficulty = initialDifficulty;
  const monthlyData = [];
  let cumulativeProfit = 0;

  for (let month = 1; month <= periodMonths; month++) {
const dailyRewards = (hashRate * 1000000000000 / difficulty) * blocksPerDay * blockReward;    const monthlyRevenue = dailyRewards * 30 * coinPrice;
    const monthlyCost = (powerConsumption / 1000) * 24 * 30 * electricityCost;
    const netProfit = monthlyRevenue - monthlyCost;
    cumulativeProfit += netProfit;

    monthlyData.push({
      month,
      difficulty,
      revenue: monthlyRevenue,
      cost: monthlyCost,
      netProfit,
      cumulativeProfit
    });

    difficulty *= (1 + difficultyIncreasePct / 100);
  }

  const totalROI = (cumulativeProfit / rigCost) - 1;

  return { monthlyData, totalROI };
}