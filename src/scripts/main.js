import {createPlan} from "./plan.js";
import {addPlant} from "./field.js";
import {usePlants} from "./field.js";

import {plantSeeds} from "./tractor.js";
const yearlyPlan = createPlan();
console.log(yearlyPlan);

// // seed test code
// import {createCorn} from "./seeds/corn.js";
// const cornSeed = createCorn();

// import {createWheat} from "./seeds/wheat.js";
// const wheatSeed = createWheat();


// addPlant(wheatSeed);
// addPlant(cornSeed);
// console.log("field contents", usePlants());
plantSeeds(yearlyPlan);
console.log(usePlants());
