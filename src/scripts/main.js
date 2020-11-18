import {createPlan} from "./plan.js";
import {addPlant} from "./field.js";
import {usePlants} from "./field.js";
import {Catalog} from "./catalog.js";
import {plantSeeds} from "./tractor.js";
import {harvestPlants} from "./harvester.js";

const yearlyPlan = createPlan();
plantSeeds(yearlyPlan);

const plantsToHarvest = usePlants();

const harvest = harvestPlants(plantsToHarvest);
console.log(harvest);

const sortedHarvest = harvest.sort(function(a,b){
  if (a.type < b.type) {return -1;}
  if (a.type > b.type) {return 1;}
  return 0
})

// outputs HTML to DOM
Catalog(sortedHarvest);
