var x;
var y;
<<<<<<< Updated upstream
var z;
z = 5;
z = 'ceva';
var PersonJob;
(function (PersonJob) {
    PersonJob[PersonJob["TEACHER"] = 0] = "TEACHER";
    PersonJob[PersonJob["ENGINEER"] = 1] = "ENGINEER";
    PersonJob[PersonJob["POLICEMAN"] = 2] = "POLICEMAN";
})(PersonJob || (PersonJob = {}));
/*let o: IPerson;

o = {
    name: 'nume',
    surname: 'surname',
    job: PersonJob.TEACHER
};

console.log(o.name, o.surname);

let array: string[] = [];

array.push('ceva');
array.push('ceva2');
array.push('ceva3');

array.forEach(element => console.log(element));

let people: IPerson[] = [];

people.push({ name: 'Rus', surname: 'Vlad', job: PersonJob.ENGINEER });
people.push({ name: 'Valean', surname: 'Vlad', job: PersonJob.POLICEMAN });

people.forEach(element => console.log(element.name, element.surname, element.job));

let a: number | string;
a = 'a';
a = 5;
let b: string | 1;
b = 'xulescu';
//b = 2;

let v: string | null;*/
function functie() {
    console.log('altceva');
}
function add(a, b) {
    return a + b;
}
function comparePeople(p1, p2) {
    return (p1.name === p2.name) && (p1.surname === p2.surname) && (p1.job === p2.job);
}
var p1 = {
    name: 'Andrei',
    surname: 'Popescu',
    job: PersonJob.TEACHER
};
var p2 = {
    name: 'Andrei',
    surname: 'Popescu',
    job: PersonJob.TEACHER
};
console.log(comparePeople(p1, p2));
console.log(p1 === p2);
functie();
console.log(add(4, 3));
function handler(x, y, func) {
    var result = x + y;
    func(result);
}
function specialLog(num) {
    console.log(num + 5);
}
handler(1, 2, specialLog);
=======
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
salt(5, 6, add5);
>>>>>>> Stashed changes
