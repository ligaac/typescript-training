let x: number;
let y: string;
let z: any;  // de evitat, ce sens are ts daca folosesti asta ?

z = 5;
console.log(z);
z = 'ceva';
console.log(z);

let car: { brand: string, color: string}; // un fel de strctura ca in c

car = {
    brand: 'vw',
    color: 'blue'
};
console.log(car.brand, car.color);

interface car2 {   // asta seamana mai bine cu un struct din c
    brand: string,
    color: string
};

let a: car2;

let array: number[] = [1, 2, 3, 4, 5, 6 ,7];

console.log(array);
array.push(256);
console.log(array);

// let array: string[], daca las asa e eroare trebuie intializat cu ceva gol daca nu pun nimic in el la inceput

let cars: car2[] = [];
cars.push({ color: 'red', brand: 'fiat'});

console.log(cars);

array.forEach(elm => console.log(elm));

enum vehicle_type {
    car,
    motorcycle,
    bike,
    skateboard
};


let mycar: {brand: string, color: string, vehicleType: vehicle_type};

let ceva: number | string; // poate lua ca valoare un string sau un numar
let altceva: string | 1; // ceva manarie

let tof: boolean; // = let tof: true | false;

function put(x: number): void {
    console.log(x);
};

function add(x: number, y: number): number {
    return x + y;
};

put(add(6, 7));

function add5(x: number): number{
    return x + 5;
}

function salt(x: number, y: number, func: (z: number) => number): void{
    let result: number = x + y;
    func(result);
}

console.log(salt(5, 6, add5));

class mycity {
    name: string;
    population: number;
    

    hello(): string{
        return 'Hello' + this.name;
    }
}

