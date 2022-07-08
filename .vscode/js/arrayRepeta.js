const friends = ['Monica', 'Chendler', 'Ross', 'Rachel', 'Joe', 'Phoebe'];
// console.log(friends);
console.table(friends);// використовується для зручного виводу у вигляді таблиці масивів

const lastIndex = friends.length - 1; // знаходимо індекс останнього елемента
console.log('Індекс останнього елемента:', lastIndex);

// console.log(friends[4]); 


 friends[5] = 'Фібі';// можна замінити значення елемента
console.table(friends);

// Прості типи, такі як Числа, передаються по значенню (точні копії не звязані між собою)
// передача по значенню
let a = 17;
let b = a;
console.log(a);//17
console.log(b);//17

a = 30;
console.log(a);// 30
console.log(b);// 17

console.log(a === b);  // false

// Складні типи, такі як Масив, передаються за посиланням на один і той же об"єкт
// передача за посиланням
const c = [1, 2, 3, 4, 5];
const d = c;
   console.log(c); //[1, 2, 3, 4, 5]
   console.log(d); //[1, 2, 3, 4, 5]

// c[0] = 500;
//    console.log(c); //  [500, 2, 3, 4, 5]
//    console.log(d); //  [500, 2, 3, 4, 5]
   
d[1] = 300;
console.log(c);  // [1, 300, 3, 4, 5]
console.log(d);  // [1, 300, 3, 4, 5]

console.log(c === d);  // true  
console.log([1, 2, 3, 4, 5] === [1, 2, 3, 4, 5]);  // false 


/// Цикли FOR, FOR OF...


const summer = ['mango', 'kiwi', 'poly', 'ajax', 'mango', 'kiwi', 'poly', 'ajax'];
const lastInd = summer.length - 1;

      ////   for   ////
// for (let k = 0; k <= lastInd; k += 1) {
//     // console.log(k);
//     summer[k] += '-yummy'
//     // console.log(summer[k]);
//     console.table(summer);
// }

    //// for of  ////
    /** використовується у випадках коли не потрібен Індекс  та/або 
     * вам не потрібно змінювати елемент масиву
    */
   // більш декларативний код
for (const summerItem of summer) {
        console.log(summerItem);
}
    

