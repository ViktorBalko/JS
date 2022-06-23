//написати скрипт який рахує суму всіх парних чисел
//які входять в діапазон від min до max
//наприклад якщо діапазо 0-5 то в ньому два парних числа 2 та 4
//і їх сума 6

const minNum = 0;
const maxNum = 8;
let totalNum = 0;
// for для min до max з кроком в 1
for (let k = minNum; k <= maxNum; k += 1) {
    // console.log(k);

//     // перевіримо залішок від діління
    if (k % 2 === 0) {
        console.log(`Парне Число: `, k);
        totalNum += k;
    } 
}

     console.log(`Сума парних чисел`, totalNum);

//АБО ЛОГІКА ВІД ОБРАТНОГО
// for (let k = minNum; k <= maxNum; k += 1) {
//     // console.log(k);

//     // перевіримо залішок від діління
//     if (k % 2 !== 0) {
//         // console.log(`неПарнеЧисло: `, k);
//         continue;
//     } 
//     console.log(`парнеЧисло: `, k);
//         totalNum += k;
// }

//      console.log(`cумаПарнихЧисел`, totalNum);




// console.log(10 % 2);