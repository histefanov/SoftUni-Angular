"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("./models");
//Throws error
var watermelon = new models_1.Watermelon(12.5, "Medium");
var firemelon = new models_1.Firemelon(10.5, "Small");
var airmelon = new models_1.Airmelon(5, "Extra-small");
var earthmelon = new models_1.Earthmelon(40, "Kingsize");
var melolemonmelon = new models_1.Melolemonmelon(12.5, "Medium");
console.log(watermelon.toString());
console.log(firemelon.toString());
console.log(airmelon.toString());
console.log(earthmelon.toString());
console.log(melolemonmelon.toString());
melolemonmelon.morph();
console.log(melolemonmelon.toString());
melolemonmelon.morph();
console.log(melolemonmelon.toString());
melolemonmelon.morph();
console.log(melolemonmelon.toString());
melolemonmelon.morph();
console.log(melolemonmelon.toString());
melolemonmelon.morph();
// Element: Water
// Sort: Kingsize
// Element Index: 100
