export const harvestPlants = (plants) => {
  
  let seedObjects = [];
  for (const plant of plants) {
    if (plant.type !== "Corn") {
      let plantQuantity = plant.output;
      for (let i = 0; i < plantQuantity; i++) {
        seedObjects.push(plant);
      }
    } else {
      let plantQuantity = plant.output / 2;
      for (let i = 0; i < plantQuantity; i++) {
        seedObjects.push(plant);
      }
    }
  }
  
  return seedObjects;
};
