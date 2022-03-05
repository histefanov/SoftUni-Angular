"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("./models");
var box = new models_1.default();
box.add("Pesho");
box.add("Gosho");
console.log(box.count);
box.remove();
console.log(box.count);
