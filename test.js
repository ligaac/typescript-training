var x;
var y;
var z; // de evitat, ce sens are ts daca folosesti asta ?
z = 5;
console.log(z);
z = 'ceva';
console.log(z);
var car; // un fel de strctura ca in c
car = {
    brand: 'vw',
    color: 'blue'
};
console.log(car.brand, car.color);
;
var a;
var array = [1, 2, 3, 4, 5, 6, 7];
console.log(array);
array.push(256);
console.log(array);
// let array: string[], daca las asa e eroare trebuie intializat cu ceva gol daca nu pun nimic in el la inceput
var cars = [];
cars.push({ color: 'red', brand: 'fiat' });
console.log(cars);
array.forEach(function (elm) { return console.log(elm); });
var vehicle_type;
(function (vehicle_type) {
    vehicle_type[vehicle_type["car"] = 0] = "car";
    vehicle_type[vehicle_type["motorcycle"] = 1] = "motorcycle";
    vehicle_type[vehicle_type["bike"] = 2] = "bike";
    vehicle_type[vehicle_type["skateboard"] = 3] = "skateboard";
})(vehicle_type || (vehicle_type = {}));
;
var mycar;
var ceva; // poate lua ca valoare un string sau un numar
var altceva; // ceva manarie
var tof; // = let tof: true | false;
function put(x) {
    console.log(x);
}
;
function add(x, y) {
    return x + y;
}
;
put(add(6, 7));
function add5(x) {
    return x + 5;
}
function salt(x, y, func) {
    var result = x + y;
    func(result);
}
console.log(salt(5, 6, add5));
var mycity = /** @class */ (function () {
    function mycity() {
    }
    mycity.prototype.hello = function () {
        return 'Hello' + this.name;
    };
    return mycity;
}());
var city = new mycity();
console.log(city.hello());
