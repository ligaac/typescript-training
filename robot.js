var Robot = /** @class */ (function () {
    function Robot(name, age, fabricationYear, isWorking) {
        this.name = name;
        this.age = age;
        this.fabricationYear = fabricationYear;
        this.isWorking = isWorking;
        console.log(this.hello());
    }
    Robot.prototype.hello = function () {
        return 'Hello ' + this.name + ' ' + this.age + ' ' + this.fabricationYear + ' ' + this.isWorking;
    };
    return Robot;
}());
var r1 = new Robot('Robot1', 20, 2021, true);
//public
