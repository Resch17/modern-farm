export const countHarvest = (input) => {
  const output = input.map((item, index)=>({...item, id: index + 1}))
  return output;
};
