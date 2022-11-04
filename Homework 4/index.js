/* 1. Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і висота прямокутника height і обраховує його площу.
Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри.
Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації. */

// function calcRectangleArea(width, height) {
// 	let areaRes;
// 	if (isNaN(width) || isNaN(height)) {
// 		throw new Error("Please, enter a number");
// 	} else if (width <= 0 || height <= 0) {
// 		throw new Error("Please, enter a positive number");
// 	} else if (width > 0 && height > 0) {
// 		areaRes = width * height;
// 	}
// 	return console.log(areaRes);
// }
// try {
//     calcRectangleArea(5, 4);
// } catch (err) {
//     console.log(err)
// }

/* 2. Напишіть функцію checkAge(), яка пропонуватиме юзеру ввести свій вік і генерувати в модальному вікні помилки у випадку, коли: 
	- юзер ввів порожню стрічку (наприклад “The field is empty! Please enter your age”), 
	- нечислове значення
	- вік юзера менше 14 років. 
В іншому разі юзер отримує доступ до перегляду фільму.
В блокові catch передбачити виведення назви і опису помилки. */


// function checkAge() {
// let age = prompt("Enter your age:");

//     if (age >= 14) {
//         alert("You are welcome to watch the movie")
//         return;
//     } else {
//     try {
//         if (isNaN(age)) throw "It's not a number! Please, enter your age";
//         if (age == "") throw "The field is empty! Please, enter your age";
//         if (typeof age === "object") throw "Canceled"
//         if (age < 14) throw "You are too young";
//     } catch (err) {
//         alert(err)
//         return;
//     }
// }
//     console.log(checkAge());
// }
// checkAge();


/* 3. Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням 'MonthException'.
Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році.
Функція повертає назву місяця відповідно до введеного номера місяця.
У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням 'Incorrect month number'.
Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
	Приклад роботи програми:
> console.log(showMonthName(5)); 
May
> console.log(showMonthName(14)); 
MonthException Incorrect month number */

// class MonthException {
// 	constructor(message) {
//         this.name = "MonthException";
// 		this.message = message;
// 	}
// }

// function showMonthName(month) {
// 	const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// 	try {
// 	if (month < 1 || month > 12) throw new MonthException("Incorrect month number");
// 	} catch (err) {
// 		return err.name + " " + err.message;
// 	}
// 	return monthNames[month - 1];
	
// }
// console.log(showMonthName(4));

/* 4. Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id.
Також функція викидає помилку у разі якщо введено від’ємне id.
Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids,
перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність,
в разі виключної ситуації виводить повідомлення про помилку. Функція showUsers(ids) повертає масив об’єктів,
де значеннями ключів є коректні елементи ids.

	Приклад роботи програми:
showUsers([7, -12, 44, 22]);
Error: ID must not be negative: -12
[ {id: 7}, {id: 44}, {id: 22} ] */

// function showUser(id) {
// 	if (id < 0) throw new Error("ID must not be negative: ");
// 	return {id: id}
// }
// function showUsers(ids) {
// 	let users = [];
// 	for (let i = 0; i < ids.length; i++) {
//         try {
//         users.push(showUser(ids[i]))
// 		} catch (err) {
//             console.log(err + ids[i])
// 		}
// 	}
// 	return console.log(users);
// }
// showUsers([7, -12, 44, 22]);
