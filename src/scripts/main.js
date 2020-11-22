import { createPlan } from "./plan.js";
import { usePlants } from "./field.js";
import { Catalog } from "./catalog.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
import { countHarvest } from "./count.js";
import { testData } from "./testData.js";

const yearlyPlan = createPlan();
plantSeeds(yearlyPlan);

const plantsToHarvest = usePlants();
console.log("Pre-harvest:", plantsToHarvest);


const harvest = harvestPlants(plantsToHarvest);
console.log("Harvest: ", harvest);

const countedHarvest = countHarvest(harvest);
console.log("counted: ", countedHarvest);

const harvestToSort = countedHarvest.slice();

const sortedHarvest = harvestToSort.sort((a, b) => {
  if (a.type > b.type) return 1;
  if (b.type > a.type) return -1;
  return 0;
});

// outputs HTML to DOM
Catalog(sortedHarvest);
