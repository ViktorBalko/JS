//методи JOIN(DELIMETER) & SPLIT(DELIMETER)

// JOIN
const words = ["JavaScript", "это", "интересно"];
console.log(words.join("")); // "JavaScriptэтоинтересно"
console.log(words.join("+")); // "JavaScript+это+интересно"
console.log(words.join("---")); // "JavaScript---это---интересно"
console.log(words.join(" ")); // "JavaScript это интересно"
console.log(words.join("😎")); // "JavaScript😎это😎интересно"

//SPLIT
const fruit = "Mango";
console.log(fruit.split("")); // ["M", "a", "n", "g", "o"]

const message = "JavaScript это интересно";
console.log(message.split(" ")); // ["JavaScript", "это", "интересно"]


//Метод indexOf()

const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1

//Метод includes()

if (!clients.includes('Monkong')) {
    console.log('Monkong не знайдений');
}
// console.log(clients.includes("Poly")); // true
// console.log(clients.includes("Monkong")); // false

//Методы push() и pop()

//PUSH добавляє один або декілька єлементів в кінець масиву
const numberss = [];

numberss.push(1);
console.log(numberss); // [1]

numberss.push(2);
console.log(numberss); // [1, 2]

numberss.push(3);
console.log(numberss); // [1, 2, 3]

numberss.push(4);
console.log(numberss); // [1, 2, 3, 4]

numberss.push(5);
console.log(numberss); // [1, 2, 3, 4, 5]


//POP  видаляє останній елемент з кінця масиву і повертає видалений елемент
const numbers = [1, 2, 3, 4, 5];

console.log(numbers.pop()); //  5
console.log(numbers); // [1, 2, 3, 4]

console.log(numbers.pop()); //  4
console.log(numbers); // [1, 2, 3]

console.log(numbers.pop()); //  3
console.log(numbers); // [1, 2]

console.log(numbers.pop()); //  2
console.log(numbers); // [1]

console.log(numbers.pop()); //  1
console.log(numbers); // []

//примусимо користувача створити масив автомобілів
// let cars = [];
// while (true) {
//     const car = prompt('Введіть марку автомобіля');

//     if (!car) break;

//     cars.push(car);
//     console.log(cars);
// } 

// const lastCar = cars.pop();
// console.log(`Останній автомобіль ${lastCar}`);
// console.log(cars, `Масив після методу pop`);


/** МЕТОД SLICE */ // данний метод Не вносить зміни в поточний масив
//                                  і завжди повертає Новий масив

// Перший аргумент - початковий індекс
// Другий аргумент - кінцевий індекс (НЕ ВКЛЮЧНО)
/** забрати всі елементи окрім першого та останнього */
const fruits = ['kiwi', 'banana', 'apple', 'pineapple', 'guawa', 'cucumber', 'lemon'];
const fruitsWithoutEdgeElem = fruits.slice(1, fruits.length - 1);
// const fruitsWithoutEdgeElem = fruits.slice(1, fruits.length - 2);//  також можна відризати по 2 або більше єлементів масиву
// const fruitsWithoutEdgeElem = fruits.slice(2); // метод slice буде працювати навіть з одним параметром
console.log(fruitsWithoutEdgeElem, `масив fruits після викорсистання методу SLICE`);
console.log(fruits, 'оригінальний масив для slice');

/** МЕТОД SPLICE */ // даний метод Вносить зміни в поточний масив
//                                    і повертає Новий змінений масив

// Перший аргумент - початковий індекс елемента масива
// Другий аргумент - кіклькість елементів для видалення
// Третий аргумент - використовується для додавання об"єкту в масив
const phones = ['nokia', 'motorola', 'blackberry', 'ericsson', 'siemens'];
const splicePhones = phones.splice(1, 3); // рахується з індеку 1 і забирає 3 єлементи
// const splicePhones = phones.splice(1, 3, 'audi'); // якщо ввести третій аргумент - можна додати елементи в масив
console.log(splicePhones, 'масив phones після викорсистання методу SPLICE');
console.log(phones, 'оригінальний масив для splice');




/** МЕТОД CONCAT */

const oldPhones = ['nokia', 'motorola', 'blackberry', 'ericsson', 'siemens'];
const newPhones = ['iphone', 'samsung', 'huawei', 'oppo', 'xiaomi'];
// console.log(oldPhones, newPhones);
// const newAndOldPhones = oldPhones.concat(newPhones); // старий варіант запису
const newAndOldPhones = [...newPhones, ...oldPhones]; // новий варіант запису ( "..." - три крапки - метод СПРЕД)
console.log(`Всі телефони: ${newAndOldPhones}`);

