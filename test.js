console.log('Hello world');
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
var o;
o = {
    name: 'nume',
    surname: 'surname',
    job: PersonJob.TEACHER
};
var array = [];
array.push('ceva');
array.push('ceva2');
array.push('ceva3');
array.forEach(function (element) { return console.log(element); });
var people = [];
people.push({ name: 'Rus', surname: 'Vlad', job: PersonJob.TEACHER });
people.push({ name: 'Valean', surname: 'Vlad', job: PersonJob.ENGINEER });
people.forEach(function (element) { return console.log(element.name, element.surname, element.job); });
var a;
a = 'a';
a = 5;
var b;
b = 'xulescu';
//b = 2;
b = 1;
function handler(x, y, func) {
    var result = x + y;
    func(result);
}
function specialLog(num) {
    console.log(num + 5);
}
handler(1, 2, specialLog);
