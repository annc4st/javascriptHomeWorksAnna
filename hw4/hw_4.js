/* Напишіть функцію sumSliceArray(arr, first, second), 

*/

// function sumSliceArray(arr, first, second) {
//     if (typeof first !== 'number' || typeof second !== 'number') {
//         console.log("Not a number");
//         throw new Error("Not a number");
//     } else if (first >= arr.length || second >= arr.length) {
//         console.log("Index out of range");
//         throw new RangeError("Index out of range");
//     }
//     return arr[first] + arr[second];
// }
    
// let aa = [2, 3, 5, 6, 14, 15];
// console.log(sumSliceArray(aa, 'ss', 3));

// try {
//     let result = sumSliceArray(aa, 2, 3);
//     console.log(result);
// } catch (error) {
//     console.log(error.message);
// }

/*2*/
/*Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус 
(адмін, модератор, користувач) та генерує модальне вікно з помилкою, 
якщо:вік користувача менше 18 або більше 70 років (генерується помилка типу RangeError).
користувач не ввів жодних даних в будь-якому полі (виводиться повідомлення The field is empty! 
    Please enter your age з типом помилки Error). 
    У полі статус введено неправильне слово (тип помилки EvalError).
    в полі вік введено нечислове значення. 
    У всіх інших випадках користувач отримає доступ до перегляду фільму. 
    У блоці catch передбачена можливість виведення назви та опису помилки.*/

// function checkAge(userAge, userName, UserRole) {
//     let users = ['admin', 'moderator', 'user'];
//     // let userAge = prompt("Age? ");
//     // let userRole = prompt("role?");
//     // let userName = prompt("name?");
//     if (userAge < 18 || userAge > 70) {
//         alert("Error: Age must be between 18 and 70");
//         throw new RangeError("Age must be between 18 and 70");
// ///check for empty input
//     } else if (userAge == null) {
//         alert("The field is empty!");
//         throw new SyntaxError("Incomplete data: The field is empty!");
// // check type of the age input
//     } else if (typeof userAge !== "number") {
//         alert("You enetered not a number!");
//         throw new TypeError("The field is not a number!");
// // check for empty input
//     } else if (userName == null) {
//         alert("The field is empty!");
//         throw new SyntaxError("Incomplete data: The field is empty!");
// // check wehther role belowng to a list of roles
//     } else if (users.includes(userRole) === false) {
//         alert ("The role is incorrect!");
//         throw new EvalError("The user role is incorrect!");
//     } else {
//         alert ("The user has access!");
//     }
// }

// let userAge = prompt("Age? ");
// let userRole = prompt("role?");
// let userName = prompt("name?");

// try {
//     let checkResult = checkAge(userAge, userRole, userName);
//     console.log(checkResult);

// } catch (error) {
//     alert(error.message);
// console.log(error.stack);
// }
// console.log(checkAge());

/*3 Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника 
width і висота прямокутника height і обраховує його площу. 
Передбачити припинення виконання програми і генерацію винятку у випадку, 
якщо функції передано не числові параметри.
Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.*/

function calcRectangleArea(w, h) {
    if (typeof w !== 'number' || typeof h !== 'number') {
        console.log("width or height or both not a number!");
        throw new TypeError("width and height must be a number!");
    }
    else if (w <= 0 || h <= 0) {
        console.log("Entered  parameters should be positive!");
        throw new Error("width and height must be larger than zero!");
    
    } else {
        console.log("width or height are ok!");
    }
    return w * h;
}

console.log(calcRectangleArea(3, -2));

try {
    let checkArea = calcRectangleArea();
    console.log(checkArea);

} catch (error) {
    alert(error.message);
console.log(error.message);
}



