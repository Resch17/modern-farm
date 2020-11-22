export const countHarvest = (harvestArray) => {
  const countedArray = harvestArray.map((item, index)=>({...item, id: index + 1}))
  return countedArray;
};
