export abstract class Employee {
    private currentTasksIndex = 0;
    public salary: number = 0;
    public tasks: string[] = [];

    constructor(public name: string, public age: number) { }

    work(): void {
        console.log(this.tasks[(this.currentTasksIndex++ % this.tasks.length)]);
    }

    collectSalary(): void {
        console.log(`${this.name} received ${this.salary} this month.`);
    }
}

export class Junior extends Employee {
    public tasks: string[] = [`${this.name} is working on a simple task.`]

    constructor(public name: string, public age: number) {
        super(name, age);
    }
}

export class Senior extends Employee {
    public tasks: string[] = [
        `${this.name} is working on a complicated task.`,
        `${this.name} is taking time off work.`,
        `${this.name} is supervising junior workers.`
    ]

    constructor(public name: string, public age: number) {
        super(name, age);
    }
}

export class Manager extends Employee {
    public dividend: number = 0;

    public tasks: string[] = [
        `${this.name} scheduled a meeting.`,
        `${this.name} is preparing a quarterly report.`
    ]

    constructor(public name: string, public age: number) {
        super(name, age);
    }

    collectSalary(): void {
        console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
    }
}