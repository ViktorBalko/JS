const cars = ['audi', 'mercedes', 'ford', 'fiat', 'audi', 'mercedes', 'ford', 'fiat'];
// console.log(cars);
// console.log(cars.length);

let result = '';

//цикл FOR
for (let i = 0; i < cars.length; i += 2) {
    // result += cars[i];
    result += ` ${cars[i]}`;
    
}
// console.log(result);
console.log(`Парні автомобілі: ${result.trim()}`);// trim обрубує пробіли з переду  
// console.table(result);

//цикл FOR OF
let allCar = '';
for (let car of cars) {
    allCar += ` ${car}`;
}
console.log(`Всі автомобілі: ${allCar.trim()}`);

//Знайти індекс елементу
let carIndex;
for (let i = 0; i < cars.length; i += 1) {
    if (cars[i] === 'fiat') {
        carIndex = i;
        break;// припиняємо виконання, потрібно якщо знайшли те що шукали
    }
}
console.log(`БМВ знаходиться під індексом: ${carIndex}`);

//Якщо audi та bmw сказати, що чудові автомобілі
let coolCar = ['mercedes', 'audi']; // if(coolCar.includes(car))

// for (const car of cars) {
//     if (car === 'audi' || car === 'mercedes') {
//         console.log(`Чудовий вибір, маєте чудовий смак: ${car}`);
//         continue; // цикл піде на нову ітерацію
//     }
//     console.log(`Вибраний автомобіль загалом непоганий: ${car}`);
// }

for (const car of cars) {
    if (coolCar.includes(car)) {
        console.log(`Чудовий вибір, маєте чудовий смак: ${car}`);
        continue; // цикл піде на нову ітерацію
    }
    console.log(`Вибраний автомобіль загалом непоганий: ${car}`);
}

//Присвоєння за посиланням та за значенням
// const a = 10;
// let b = a;
// console.log(a, b);
// b = 11;
// console.log(a, b);

const foo = [1, 2, 3];
const kwa = [1, 2, 3];
const bar = foo;// присвоєння за посиланням
// bar[0] = 44;
// foo[0] = 19; 
console.log(foo, bar);
console.log(foo === bar, `чи однакові масиви`); // true так як порівнюються по посиланню
console.log(foo === kwa, `чи однакові масиви`);// false так як посілання різні

