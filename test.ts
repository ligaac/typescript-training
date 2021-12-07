console.log('Hello world');
let x: number;
let y: string;
let z: any;
z = 5;
z = 'ceva';

enum PersonJob {
    TEACHER ,
    ENGINEER ,
    POLICEMAN
}

interface IPerson {
    name: string;
    surname: string;
    job: PersonJob;
}

let o: IPerson;
o = {
    name: 'nume',
    surname: 'surname',
    job: PersonJob.TEACHER
};

let array: string[] = [];

array.push('ceva');
array.push('ceva2');
array.push('ceva3');

array.forEach(element => console.log(element));

let people: IPerson[] = [];

people.push({ name: 'Rus', surname: 'Vlad', job: PersonJob.TEACHER });
people.push({ name: 'Valean', surname: 'Vlad', job: PersonJob.ENGINEER });

people.forEach(element => console.log(element.name, element.surname, element.job));

let a: number | string;
a = 'a';
a = 5;
let b: string | 1;
b = 'xulescu';
//b = 2;
b = 1;

function handler(x: number, y: number, func: (z: number) => void): void {
    let result = x + y;
    func(result);
}

function specialLog(num: number): void {
    console.log(num + 5);
}
handler(1, 2, specialLog);


