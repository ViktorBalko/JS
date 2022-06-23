// const userName = prompt('Please enter user name');
// const userNameLength = userName.length;

// if (userNameLength <= 2) {
//     console.warn('Слишком короткое имя');
//     console.log(userName);
// } else if (userNameLength > 10) {
//     console.warn('Слишком много символов')
//     console.log(userName);
// } else if (userName === 'Viktor') {
//     console.warn('Приветствую! Виктор');
// }
// else {
//     console.log('Имя прошло проверку');
//     console.log(userName);
// }

// alert(111)
// const password = 'qwerty';
// const userInput = prompt('Enter passwod');
// // let isLoggedIn = false; 
// let isLoggedIn = password === userInput;
// let userRole = isLoggedIn ? 'admin' : 'user';

// console.log(userRole);

// if (isLoggedIn) {
//     userRole = 'admin';
// }

// if (userInput === password) {
//     isLoggedIn = true;
//     console.log('Password entered correctly');
// } else {
//     isLoggedIn = false;
//     // console.log('Password incorrect');
//     console.warn('Password incorrect');
// }

const boxSizeInput = prompt('Enter box size');
// const boxSize = boxSizeInput > 100 ? 'l' : 'm';
// console.log(boxSize);



let boxSize;

if (boxSizeInput >= 30 && boxSizeInput <= 49) {
    boxSize = "small";
}
else if (boxSizeInput >= 50 && boxSizeInput <= 69) {
    boxSize = "medium";
}
else if (boxSizeInput >= 70 && boxSizeInput <= 89) {
    boxSize = "large";
}
else if (boxSizeInput < 30) {
    boxSize = "xTraSmall";
}
else if (boxSizeInput >= 90) {
    boxSize = "xTraLarge";
} 
    console.log(boxSize);

// let boxSize;
// if (boxSizeInput > 99) {
//     boxSize = 'xl';
// } else {
//     boxSize = 'm'
// }

// console.log(boxSize);