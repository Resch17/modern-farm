export const countHarvest = (harvestArray) => {
  const harvestToCount = harvestArray.slice();

  for (let i = 0; i < harvestToCount.length; i++) {
    harvestToCount[i].id = i + 1;
  }
  return harvestToCount;
};
