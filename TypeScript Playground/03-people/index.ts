import { Junior, Manager, Senior } from "./models";

const junior = new Junior("Hristiyan", 25);
const senior = new Senior("Kamen", 25);
const manager = new Manager("Pesho", 34);

for (let i = 0; i < 5; i++) {
    junior.work();
    senior.work();
    manager.work();

    junior.collectSalary();
    senior.collectSalary();
    manager.collectSalary();
}

