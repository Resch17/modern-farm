console.log("Welcome to the main module");

import {createPlan} from "./plan.js";

const yearlyPlan = createPlan();
console.log(yearlyPlan);

// seed test code
import {createCorn} from "./seeds/corn.js";
const cornSeed = createCorn();

import {createWheat} from "./seeds/wheat.js";
const wheatSeed = createWheat();

import {addPlant} from "./field.js";
import {usePlants} from "./field.js";

addPlant(wheatSeed);
addPlant(cornSeed);
console.log("field contents", usePlants());