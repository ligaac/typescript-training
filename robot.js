var Robot = /** @class */ (function () {
    function Robot(name, age, fabricationYear, isWorking) {
        this.name = name;
        this.age = age;
        this.fabricationYear = fabricationYear;
        this.isWorking = isWorking;
    }
    Robot.prototype.hello = function () {
        return 'Hello ' + this.name + ' ' + this.age + ' ' + this.fabricationYear + ' ' + this.isWorking;
    };
    return Robot;
}());
var r1 = new Robot('Robot1', 20, 2001, true);
console.log(r1.hello());
