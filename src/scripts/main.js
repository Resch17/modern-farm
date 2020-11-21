import { createPlan } from "./plan.js";
import { addPlant } from "./field.js";
import { usePlants } from "./field.js";
import { Catalog } from "./catalog.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
// import { countHarvest } from "./count.js"



// TODO: add distinct class properties to each plant type's object, add the class object to the HTML in catalog.js, style the classes in css. could also implement icons

const yearlyPlan = createPlan();
plantSeeds(yearlyPlan);

const plantsToHarvest = usePlants();

const harvest = harvestPlants(plantsToHarvest);

const harvestToSort = harvest.slice();

const sortedHarvest = harvestToSort.sort((a, b) => {
  if (a.type > b.type) return 1;
  if (b.type > a.type) return -1;
  return 0;
});

// const countedHarvest = countHarvest(sortedHarvest)
// console.log(countedHarvest);

// outputs HTML to DOM
Catalog(sortedHarvest);
// console.log(sortedHarvest)
