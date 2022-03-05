import { Airmelon, Earthmelon, Firemelon, Melolemonmelon, Melon, Watermelon } from "./models";
//Throws error

let watermelon: Watermelon = new Watermelon(12.5, "Medium");
let firemelon: Firemelon = new Firemelon(10.5, "Small");
let airmelon: Airmelon = new Airmelon(5, "Extra-small");
let earthmelon: Earthmelon = new Earthmelon(40, "Kingsize");
let melolemonmelon: Melolemonmelon = new Melolemonmelon(12.5, "Medium");

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
