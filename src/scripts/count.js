// trying to add an incremental id property to all crop objects in final array
export const countHarvest = (crops) => {  
  for (let i = 0;i<crops.length;i++){
    crops[i].id = i+1;
    console.log(crops[i])
  }
  return crops;
};