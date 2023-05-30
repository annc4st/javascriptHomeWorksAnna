/* Напишіть функцію sumSliceArray(arr, first, second), 

*/

function sumSliceArray(arr, first, second) {
    if (typeof first !== 'number' || typeof second !== 'number') {
        console.log("Not a number");
        throw new Error("Not a number");
    } else if (first >= arr.length || second >= arr.length) {
        console.log("Index out of range");
        throw new RangeError("Index out of range");
    }
    return arr[first] + arr[second];
}
    
let aa = [2, 3, 5, 6, 14, 15];
console.log(sumSliceArray(aa, 'ss', 3));

try {
    let result = sumSliceArray(aa, 2, 3);
    console.log(result);
} catch (error) {
    console.log(error.message);
}

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

function checkAge() {
    const users = ['admin', 'moderator', 'user'];
    let userAge = prompt("Age?");
    let userName = prompt("name?");
    let userRole = prompt("role?");
    
    if (userAge === "" || userAge == null || userAge.length === 0 ) {
        alert("The field is empty!");
        throw new Error("Incomplete data: The field is empty!");

    // check type of the age input
    } else if (typeof userAge !== 'number') {
        alert("You enetered not a number!");
        throw new TypeError("The field is not a number!");

    }else if (userAge < 18 || userAge > 70) {
        alert("Error: Age must be between 18 and 70");
        throw new RangeError("Age must be between 18 and 70");


// check for empty input

    } else if (userName === "" || userName == null || userName.length === 0) {
        alert("The field is empty!");
        throw new Error("Incomplete data: The field is empty!"); 
        
// check wehther role belowng to a list of roles
    } else if (users.indexOf(userRole) === -1) {
        alert ("The role is incorrect!");
        throw new Error("The user role is incorrect!");
    } else {
        alert ("The user has access!");
    }
}


try {
    checkAge();
    
} catch (error) {
    // alert(error.message);
    console.log(error.stack);
}
console.log(checkAge());

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
        console.log("Entered  parameters should be larger than 0!");
        throw new TypeError("width and height must be larger than zero!");
    
    } else {
        console.log("width or height are ok!");
    }
    return w * h;
}


try{
    let checkArea = calcRectangleArea();
    console.log(checkArea);

}catch (error){
    alert(error.message);
    console.log(error.name);
}

console.log(calcRectangleArea(3, -2));

/*4*/
class MonthExceptionError extends Error {
    constructor(message) {
        super(message);
        this.name = "MonthException";
        this.message = message;
    }
}


function showMonthName(month) {
    try{
        if (month >12) {
            throw new MonthExceptionError("there is such month number");
        }
    }catch(error){
        console.log(error.name);
        console.log(error.message);
    } finally {
  
        switch (month) {
            case 1: 
                console.log("Jan"); 
                break;
            case 2: 
                console.log("Feb"); 
                break;
            case 3: 
                console.log("Mar"); 
                break;
            case 4: 
                console.log("Apr"); 
                break;
            case 5: 
                console.log("May"); 
                break;
            case 6:
                console.log("Jun"); 
                break;
            case 7: 
                console.log("Jul"); 
                break;
            case 8:
                console.log("Aug");
                break;
            case 9: 
                console.log("Sep");
                break;
            case 10:
                console.log("Oct");
                break;
            case 11:
                console.log("Nov");
                break;
            case 12: 
                console.log("Dec");
                break;
        }
    }
}
console.log(showMonthName(13));

/*Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id. 
Також функція викидає помилку у разі якщо введено від’ємне id.
Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, 
перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність, в разі виключної ситуації виводить повідомлення про помилку.
Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids.

Приклад роботи програми:
showUsers([7, -12, 44, 22]);
Error: ID must not be negative: -12
[ {id: 7}, {id: 44}, {id: 22} ]*/

class IncorrectUserIdError extends Error {
    constructor(message) {
        super(message);
        this.name = "IncorrectUserIdError";
        this.message = message;
    }
}

function showUser(id) {
    try {
        if (id === "" || id == null || id.length === 0 || Number.isInteger(Number(id)) === false || id === 0){
            throw new IncorrectUserIdError("This is invalid user id");
        }
    } catch(error){
        console.log(error.name);
        console.log(error.message);
    } finally {
        let idObj = id;
        return "Your id is: ", idObj
    }
}

console.log(showUser(prompt("Enter your user id")));

function showUsers(arrayIds) {
    
    let userIds = [];
     
    for (let i = 0; i < arrayIds.length; i++) {
        
        if (arrayIds[i] === "" || arrayIds[i]  == null || arrayIds[i].length === 0 || Number.isInteger(Number(arrayIds[i] )) === false || arrayIds[i]  === 0){
            console.log("This is invalid user id ", arrayIds[i] );
            
        } else {          
            userIds.push(arrayIds[i]);
        }
    }
    return "correct ids: " + userIds;
}

try{
    showUsers();
    throw new IncorrectUserIdError("This is not valid user id!");
}catch(error){
    console.log(error.name);
    console.log(error.message);
}
    
let uss = [23, "dkjf", 789];
console.log(showUsers(uss));
