var x;
var y;
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
