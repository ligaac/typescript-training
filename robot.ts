class Robot {
    private _name: string;
    private _age: number;
    private _fabricationYear: number;
    private _isWorking: boolean;

    constructor(name: string, age: number, fabricationYear: number, isWorking: boolean) {
        this._name = name;
        this._age = age;
        this._fabricationYear = fabricationYear;
        this._isWorking = isWorking;
        console.log(this._hello());
    }

    private _hello(): string {
        return 'Hello ' + this._name + ' ' + this._age + ' ' + this._fabricationYear + ' ' + this._isWorking;
    }
}

let r1 = new Robot('Robot1', 20, 2021, true);
