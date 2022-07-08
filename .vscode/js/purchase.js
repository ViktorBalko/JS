//написати скрипт опрацювання покупки в магазині
//баланс користувача міститься в змінній balance
//сума покупки міститься в змінній payment
// перед перевіркою вивести повідомлення:
// "Загальна сума заказу [число] кредитів. Перевіряємо кількість доступних коштів на рахунку"

//Якщо сума покупки Не перевищує баланс:
//--вирахувати з балансу суму покупки
//--вивести повідомлення "На рахунку залашилось [число] кредитів"

//Якщо сума покупки Перевищує баланс:
//--вивести повідомлення "На рахунку недостатньо коштів для проведення операції"
//В кінці вивести повідомлення "Операція завершена"

// let balance = 20000;
// const payment = 2000;

// console.log(`Загальна сума заказу ${payment} кредитів. Перевіряємо кількість доступних коштів на рахунку`);
// //1 вари


// if (balance >= payment) {
//     // console.log(`OK`);
// // if (payment <= balance) {
// //      console.log(`OKay`);
// //  }
//     balance -= payment;
//     // balance = balance - payment;
//     console.log(`Все добре, знімаємо кошти. Дякуємо за покупку!`);
//      console.log(`На рахунку залишилось ${balance} кредитів`);
// } else {
//     console.log(`На рахунку недостатньо коштів для проведення операції`);
// }

// console.log(`Операція завершена`);





//2 умова -- сума <= баланс

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
let totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
  message = 'Insufficient funds!';
  } else {
  message = 'You ordered ${orderedQuantity} droids, you have ${totalPrice} credits left';
  };
  // Change code above this line
  return message;
}

makeTransaction(500, 3, 1800);