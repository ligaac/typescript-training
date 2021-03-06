let x: number;
let y: string;
let z: any;
z = 5;
z = 'ceva';

enum PersonJob {
    TEACHER,
    ENGINEER,
    POLICEMAN
}

interface IPerson {
    name: string;
    surname: string;
    job: PersonJob;
}

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

function functie(): void {
    console.log('altceva');
}

function add(a: number, b: number): number {
    return a + b;
}

function comparePeople(p1: IPerson, p2: IPerson): boolean {
    return (p1.name === p2.name) && (p1.surname === p2.surname) && (p1.job === p2.job);
}

let p1: IPerson = {
    name: 'Andrei',
    surname: 'Popescu',
    job: PersonJob.TEACHER
}

let p2: IPerson = {
    name: 'Andrei',
    surname: 'Popescu',
    job: PersonJob.TEACHER
}

console.log(comparePeople(p1, p2));

console.log(p1 === p2);

functie();
console.log(add(4, 3));

function handler(x: number, y: number, func: (z: number) => void): void {
    let result = x + y;
    func(result);
}

function specialLog(num: number): void {
    console.log(num + 5);
}

handler(1, 2, specialLog);
