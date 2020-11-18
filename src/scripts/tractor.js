import { addPlant } from "./field.js";
import {createAsparagus} from "./seeds/asparagus.js";
import {createCorn} from "./seeds/corn.js";
import {createPotato} from "./seeds/potato.js";
import {createSoybean} from "./seeds/soybean.js";
import {createSunflower} from "./seeds/sunflower.js";
import {createWheat} from "./seeds/wheat.js";

export const plantSeeds = (plan) => {

  for (let i=0;i<plan.length;i++) {
    for (const x of plan[i]) {
      let seed;
      switch (x) {
        case "Asparagus":
          seed = createAsparagus();
          break;
        case "Corn":
          seed = createCorn();
          break;
        case "Potato":
          seed = createPotato();
          break;
        case "Soybean":
          seed = createSoybean();
          break;
        case "Sunflower":
          seed = createSunflower();
          break;
        case "Wheat":
          seed = createWheat();
      };
      addPlant(seed);
    }
  }
}