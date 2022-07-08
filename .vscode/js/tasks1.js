function getSubstring(string, length) {
  const substring = string.slice(0, length); // Change this line

  return substring;
}

//        задача#1B1
// Change code below this line
const productName = "Droid"; // console.log(productName);// 'Droid'
const pricePerItem = 2000;  // console.log(pricePerItem);// 2000

//        задача#2B1
let productName = "Droid";
let pricePerItem = 2000;
// Change code below this line
  productName = "Repair droid";
pricePerItem = 3500;
  
//        задача#3B1
// Change code below this line
let topSpeed = 160;
let distance = 617.54;
const login = "mango935";
const isOnline = true;
const isAdmin = false;

//        задача#4B1
const pricePerItem = 3500;
const orderedQuantity = 4;

// Change code below this line
const totalPrice = pricePerItem * orderedQuantity;

//        задача#5B1
const productName = "Droid";
const pricePerItem = 3500;
// Change code below this line
const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

//        задача#6B1
const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;

const totalPrice = (pricePerDroid * orderedQuantity) +
    deliveryFee;

const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

//        задача#7B1
function sayHi() { 
console.log("Hello, this is my first function!");
}
sayHi();

//        задача#8B1
function add(a, b, c) {
  console.log(`Addition result equals ${a+b+c}`);
  // Change code above this line
}
add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

//        задача#9B1
function add(a, b, c) {
  // Change code below this line
return a+b+c;
  // Change code above this line
}
add(2, 5, 8); // 15
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

//        задача#10B1
function makeMessage (name, price) {
  // Change code below this line
   const message = `You picked ${name}, price per item is ${price} credits`;
  // Change code above this line
  return message;
};

//        задача#11B1
function calculateTotalPrice (orderedQuantity, pricePerItem) {
  // Change code below this line
  const totalPrice = orderedQuantity * pricePerItem;

  // Change code above this line
  return totalPrice;
};


//        задача#12B1
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
  let message;
  let totalPrice = (orderedQuantity * pricePerDroid) + deliveryFee;
  return message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`
// Change code above this line
  return message;
}

//        задача#13B1
function isAdult(age) {
  // Change code below this line
  const passed = age >= 18;
  // Change code above this line
  return passed;
}

//        задача#14B1
function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
  const isMatch = password === SAVED_PASSWORD;

  // Change code above this line
  return isMatch;
}

//        задача#15B1
function checkAge(age) {
  let message;

  if (age >= 18) { // Change this line
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }

  return message;
}

//        задача#16B1
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
if(ordered > available){
message = "Not enough goods in stock!";
} else {
message = "Order is processed, our manager will contact you.";
}
  // Change code above this line
  return message;
}

//        задача#17B1
// Комбинированные операторы это более краткий способ
// присвоить переменной новое значение основываясь
// на её предыдущем значении.

// Будем увеличивать значение переменной age на единицу
// от предыдущего, имитируя обновление возраста после
// дня рождения пользователя.
let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a += 2;
b -= 4;
c *= 3;
d /= 10;

//        задача#18B1
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
  let totalPrice = customerCredits - (pricePerDroid * orderedQuantity);
  if((pricePerDroid * orderedQuantity) > customerCredits) {
  message = "Insufficient funds!";
  } else {
  message = `You ordered ${orderedQuantity} droids, you have ${totalPrice} credits left`;
  }
  // Change code above this line
  return message;
}


//        задача#19B1
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) { // Change this line
    message =  'Canceled by user!';
  } else if (password === ADMIN_PASSWORD) { // Change this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}

//        задача#20B1
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
if(ordered === 0) {
message = "There are no products in the order!";
} else if (ordered > available){
message = "Your order is too large, there are not enough items in stock!";
} else {
message = "The order is accepted, our manager will contact you";
}
  // Change code above this line
  return message;
}

//        задача#21B1
function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end;     // Change this line

  return isInRange;
}

//        задача#22B1
function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === "pro" ||
        subType === "vip"; // Change this line

  return canAccessContent;
}

//        задача#23B1
// Все операторы, которые мы рассматривали до этого, были бинарными.
//   Т.е.они содержали два операнда: левый и правый.Логическое «НЕ» - это унарный оператор,
//     выполняющий операцию над одним операндом справа.

// Оператор! приводит операнд к булю, если необходимо, а затем делает инверсию - заменяет его
// на противоположный true -> false или false -> true.


function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange;       // Change this line

  return isNotInRange;
}
//  isInRange = true;
//  isNotInRange = !isInRange; // !isInRange -> !true -> false


//        задача#24B1
function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
if(totalSpent >= 5000 && totalSpent <20000) {
 discount = 0.02;
} else if(totalSpent >= 20000 && totalSpent < 50000){
discount = 0.05;
} else if(totalSpent >= 50000){
discount = 0.1;
} else {
discount = 0;
}
  // Change code above this line
  return discount;
}
//?????????????????????????????????
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
// switch(totalSpent) {
//   case BASE_DISCOUNT:
//     discount = 0;
//     break;
//   case BRONZE_DISCOUNT:
//         discount = totalSpent * 0.02;
//     break;
//   case SILVER_DISCOUNT:
//      discount = totalSpent * 0.05;
//     break;
//   case GOLD_DISCOUNT:
//          discount = totalSpent * 0.1;
//     break;
// }
//   // Change code above this line
//   return discount;
// }


//        задача#25B1
function checkStorage(available, ordered) {
  let message;
// рефакторинг if
   if (ordered > available) {
    message = "Not enough goods in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
   }
  
  // з використанням тернарного оператора
  message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
  // Change code above this line
  return message;
}


//        задача#26B1
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
  // Change code above this line
  return message;
}


//        задача#27B1
//       IF       TO        SWITCH  
if (type === "starter") {
  price = 0;
} else if (type === "professional") {
  price = 20;
} else if (type === "organization") {
  price = 50;
}
function getSubscriptionPrice(type) {
  let price;

/////////////////////////////////////////////////

 switch (type) { 
    case "starter": 
      price = 0; 
      break;

    case "professional": 
      price = 20; 
      break;

    case "organization": 
      price = 50; 
      break;
  }
  return price;
}
///////////////////////////////////////////////////


//        задача#28B1
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;


  //  if (password === null) {
  //   message = "Canceled by user!";
  // } else if (password === ADMIN_PASSWORD) {
  //   message = "Welcome!";
  // } else {
  //   message = "Access denied, wrong password!";
  // }

  // Change code below this line
  switch (password) {
    case null:
      message = "Canceled by user!";
      break;
    case ADMIN_PASSWORD:
      message = "Welcome!";
      break;
    default:
      message = "Access denied, wrong password!";
}

  // Change code above this line
  return message;
}
//        задача#29B1
function getShippingCost(country) {
  let message;
  let price;
  // Change code below this line
switch(country) {
  case "China":
    price = 100;
    message = `Shipping to ${country} will cost ${price} credits`;
    break;
  case "Chile":
     price = 250;
    message = `Shipping to ${country} will cost ${price} credits`;
    break;
  case "Australia":
     price = 170;
    message = `Shipping to ${country} will cost ${price} credits`;
    break;
  case "Jamaica":
     price = 120;
    message = `Shipping to ${country} will cost ${price} credits`;
    break;
  default:
    message = "Sorry, there is no delivery to your country";
}
  // Change code above this line
  return message;
}

//        задача#30B1
//довжина рядка // длина строки
function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  return message;
}

//        задача#31B1
// Индексация элементов строки
const courseTopic = "JavaScript essentials";
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

//        задача#32B1
function getSubstring(string, length) {
  const substring = string.slice(0, length); // Change this line

  return substring;
}


//        задача#33B1
function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
 result = message.length > maxLength ?
   message.slice(0, maxLength) + "..." : message;
  /// Change code above this line
  return result;
}
//        задача#34B1
function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Change this line

  return normalizedInput;
}

//        задача#35B1
function checkForName(fullName, name) {
 const result = fullName.includes(name); // Change this line
  return result;
}

//        задача#36B1
function checkForSpam(message) {
  let result;
  let lowerMessage = message.toLowerCase();
  
  result = lowerMessage.includes('spam') ||
    lowerMessage.includes('sale');
  
  return result;
}





// РОЗІБРАТИСЯ!!! //
//Задача: форматирование сообщения
// Задание
// Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, если длина превышает значение в параметре maxLength.

// Дополни код функции так, что если длина строки:

// не превышает maxLength, функция возвращает её в исходном виде.
// больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие "...", после чего возвращает укороченную версию.
// Тесты
// Объявлена функция formatMessage(message, maxLength)
// Вызов функции formatMessage("Curabitur ligula sapien", 16) возвращает "Curabitur ligula..."
// Вызов функции formatMessage("Curabitur ligula sapien", 23) возвращает "Curabitur ligula sapien"
// Вызов функции formatMessage("Vestibulum facilisis purus nec", 20) возвращает "Vestibulum facilisis..."
// Вызов функции formatMessage("Vestibulum facilisis purus nec", 30) возвращает "Vestibulum facilisis purus nec"
// Вызов функции formatMessage("Nunc sed turpis a felis in nunc fringilla", 15) возвращает "Nunc sed turpis..."
// Вызов функции formatMessage("Nunc sed turpis a felis in nunc fringilla", 41) возвращает "Nunc sed turpis a felis in nunc fringilla"

function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
   result = message.slice(0, maxLength);
  if (message <= maxLength) {
  return message;
} else {
  return message.slice(0, maxLength) + '...';
}
  /// Change code above this line
  return result;
}


