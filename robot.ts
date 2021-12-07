class Robot {
    name: string;
    age: number;
    fabricationYear: number;
    isWorking: boolean;

    constructor(name: string, age: number, fabricationYear: number, isWorking: boolean) {
        this.name = name;
        this.age = age;
        this.fabricationYear = fabricationYear;
        this.isWorking = isWorking;
    }

    hello(): string {
        return 'Hello ' + this.name + ' ' + this.age + ' ' + this.fabricationYear + ' ' + this.isWorking;
    }

}

let r1 = new Robot('Robot1', 20, 2001, true);

console.log(r1.hello());

