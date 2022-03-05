"use strict";
exports.__esModule = true;
var models_1 = require("./models");
var junior = new models_1.Junior("Hristiyan", 25);
var senior = new models_1.Senior("Kamen", 25);
var manager = new models_1.Manager("Pesho", 34);
for (var i = 0; i < 5; i++) {
    junior.work();
    senior.work();
    manager.work();
    junior.collectSalary();
    senior.collectSalary();
    manager.collectSalary();
}
