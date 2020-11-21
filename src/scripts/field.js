let plantArray = [];

export const addPlant = (seed) => {
  if (Array.isArray(seed) === true) {
    for (let i = 0;i<seed.length;i++) {
    plantArray.push(seed[i]);
    }
  } else {
    plantArray.push(seed);
  }  
};

export const usePlants = () => {
  return plantArray.slice();
}