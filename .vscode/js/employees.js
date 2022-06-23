// напиши скрипт который подсчитывает общую сумму зарплат работников
// колВо работников хранится в переменной employees
//зп это случайное число от 500 до 5000
//записать сумму в переменную totalSalary и вывести в консоль

const maxSalary = 55000;  // максимальна зп
const minSalary = 1500; // мінімальна зп
const employees = 22; // кількість працівніків
let totalSalary = 0; // вар суми, змінюваний 

for (let k = 1; k <= employees; k += 1) {
//ГЕНЕРУЄМО ВІПАДКОВУ ЗП
    const salary = Math.round(
        Math.random() * (maxSalary - minSalary) + minSalary);
// СУМА ВСІХ ЗП 
    totalSalary += salary;

    // console.log(k);
    console.log(`ЗП працівника № ${k} -  ${salary}`);
}

console.log(`totalSalary: `, totalSalary);



 