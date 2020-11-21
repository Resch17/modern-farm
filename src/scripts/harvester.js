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
  
  // console.log(seedObjects)
  // // add incrementing id property to each plant object in the harvest using for loop's iteration
  // for (let i=0;i<seedObjects.length;i++){
  //   seedObjects[i].id = i+1;
  // }


  // // add incrementing id property to each plant object in the harvest using separate counting variable
  // let count = 1;
  // for (let i=0;i<seedObjects.length;i++){
  //   seedObjects[i].id = count;
  //   count++;
  // }

  return seedObjects;

};
