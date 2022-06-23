const buttonAdd = document.querySelector('button[data-add]');
const buttonDel = document.querySelector('button[data-clean]');
const inputValue = document.querySelector('input[data-value]');
const outputElem = document.querySelector('.outputJs span');

let total = 0;

console.log(buttonAdd);
// console.dir(buttonAdd.textContent);
  buttonAdd.textContent = 'add';
  buttonAdd.addEventListener('click', function () {
    console.log('click xo xo xo');

    const value = Number(inputValue.value); //обізначімо число
    console.log(value);

    total += value;// виведемо загальну сумму введених чисел
      console.log(`Total: `, total);
      outputElem.textContent = total;
      
      inputValue.value = ''; 
  })

buttonDel.textContent = 'del';
buttonDel.addEventListener('click', function () {
    console.log('click xe xe xe');
    outputElem.textContent = 0;
    total = 0;
    console.log(`Total: `, total);
}) 
//   console.log(`Total: `, total);