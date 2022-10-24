// 1. Є такий код:

// let x = 1;
// let y = 2;

// let res1 = "" + x + y;// Допишіть код, необхідно використовувати змінні x і y
// console.log(res1); // "12"
// console.log(typeof res1); // "string"

// let res2 = "true" + y; // Допишіть код, необхідно використовувати змінні x і y
// console.log(res2); // "true2"
// console.log(typeof res2); // "string"

// let res3 = x != y;// Допишіть код, необхідно використовувати змінні x і y
// console.log(res3); // true
// console.log(typeof res3); // "boolean"

// let res4 = Math.sqrt("olo" + x + y);// Допишіть код, необхідно використовувати змінні x і y
// console.log(res4); // NaN
// console.log(typeof res4); // "number"

// Допишіть код, щоб в консолі браузера з'явилися рядки, які написані в коментарях, оперуючи при цьому змінними х і у.


/* 2. Користувач вводить число (використовуйте prompt ()). Необхідно перевірити чи є введене число
	a) парним додатним;
	b) кратним числу 7.
Результат перевірки вивести в консоль. */

    // let num = prompt("Enter your number");
    // let rem = num % 2;
    // let mult = num % 7;

    // if (num % 2 == 0 && num > 0) {
    //     console.log(num + " is even and positive");
    // } else if (num % 7 == 0) {
    //     console.log(num + " multiples of 7");
    // } else {
    //     console.log(num + " not multipes of 7")
    // }

    // function isEven(num) {
    //     let rem = num % 2 ;
    //     if (rem == 0) {
    //         console.log("even");
    //     }
    // }
    // function isMultiplesOf7(num) {
    //     let mult = num % 7;
    //     if (mult == 0) {
    //         console.log(num + "multiplies of 7")
    //     }
    // }

/* 3. Створіть порожній масив;
1) У перший елемент масиву запишіть будь-яке число;
2) У другий елемент масиву запишіть будь-який рядок;
3) У третій елемент масиву запишіть будь-яке логічне значення;
4) У четвертий елемент масиву запишіть значення null;
5) Виведіть на екран число елементів, яке зберігається в масиві;
6) Запитайте у користувача ввести будь-яке значення і запишіть це значення в п'ятий елемент масиву;
7) Виведіть на екран п'ятий елемент масиву.
8) Видаліть 1-ий елемент масиву і виведіть масив на екран. */

    // const sirena = [];
    // sirena[0] = 2;
    // sirena[1] = "soul";
    // sirena[2] = true;
    // sirena[3] = null;

    // alert(sirena.length);

    // let any = prompt("Enter any value");
    // sirena[4] = any;
    // alert(sirena[4]);

    // sirena.shift();
    // alert(sirena);

/* 4. Напишіть програму, яка об’єднує всі наявні елементи масиву в стрічку і розділяє їх символом “*”.
Початковий масив:
let cities = ["Rome", "Lviv", "Warsaw"]; 
Результат:
"Rome*Lviv*Warsaw" */

    // let cities = ["Rome", "Lviv", "Warsaw"];

    // let citiesList = cities[0] + "*" + cities[1] + "*" + cities[2];
    // alert(citiesList);

    /* OR */

    // let citiesList = "";
    // for (let i = 0; i <= cities.length - 1; i++) {
    //     citiesList += cities[i] + "*";
    // }
    // citiesList = citiesList.slice(0, -1);
    // alert(citiesList);

/* 5. Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку.
Результат запишіть в змінну isAdult.
В залежності від отриманого значення виведіть відповідне повідомлення про статус особи.
Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”.
Якщо вік менше 18 років вивести “Ви ще надто молоді”, */

    // let age = prompt("Are you 18+ years old? \n Type: 'Yes' or 'No'" ).toLowerCase();
    // if (age == "yes") {
    //     alert("You have reached the age of majority")
    // } else if (age == "no") {
    //     alert("You are too young yet")
    // } else {
    //     alert("Try again");
    // }

/* 6. Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони).
Необхідно 
	a) визначити і вивести в консоль площу трикутника 
	b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести 'Incorrect data‘.
Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424).  */

    // function triangleAreaByThreeSides() {
    //     let a = Number(window.prompt("Enter first side of the triangle"));
    //         if (!a) {
    //             console.log("Canceled or incorrect data")
    //             return;
    //         }
    //     let b = Number(window.prompt("Enter second side of the triangle"));
    //         if (!b) {
    //             console.log("Canceled or incorrect data")
    //             return;
    //         }
    //     let c = Number(window.prompt("Enter third side of the triangle"));
    //         if (!c) {
    //             console.log("Canceled or incorrect data")
    //             return;
    //         }
      
    //     let p = (a + b + c) / 2;
      
    //     if (p <= a || p <= b || p <= c) {
    //       console.log(a, b, c);
    //       console.log('Incorrect data');
    //       return;
    //     }

    //     let area = Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(3);
    //     console.log('Triangle area: ' + area);
    // };
    // triangleAreaByThreeSides();

/*7. Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання.
Потрібно отримати реальний час доби із системи.
Зробити 2 способами через 2 різних умовних оператора.
В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”. */

// let time = new Date().getHours();

    // if (time == 23 || time >= 0 && time <= 5) {
    //     console.log("Good Night");
    // } else if (time >= 6 && time <= 11) {
    //     console.log("Good Morning");
    // } else if (time >= 12 && time <= 17) {
    //     console.log("Good Day");
    // } else if (time >= 18 && time <= 22) {
    //     console.log("Good Evening");
    // };

// switch (time) {
//     case 23:
//         console.log("Good Night");
//         break;
//     case 0:
//         console.log("Good Night");
//         break;
//     case 1:
//         console.log("Good Night");
//         break;
//     case 2:
//         console.log("Good Night");
//         break;
//     case 3:
//         console.log("Good Night");
//         break;
//     case 4:
//         console.log("Good Night");
//         break;
//     case 5:
//         console.log("Good Night");
//         break;
//     case 6:
//         console.log("Good Morning");
//         break;
//     case 7:
//         console.log("Good Morning");
//         break;
//     case 8:
//         console.log("Good Morning");
//         break;
//     case 9:
//         console.log("Good Morning");
//         break;
//     case 10:
//         console.log("Good Morning");
//         break;
//     case 11:
//         console.log("Good Morning");
//         break;
//     case 12:
//         console.log("Good Day");
//         break;
//     case 13:
//         console.log("Good Day");
//         break;
//     case 14:
//         console.log("Good Day");
//         break;
//     case 15:
//         console.log("Good Day");
//         break;
//     case 16:
//         console.log("Good Day");
//         break;
//     case 17:
//         console.log("Good Day");
//         break;
//     case 18:
//         console.log("Good Evening");
//         break;
//     case 19:
//         console.log("Good Evening");
//         break;
//     case 20:
//         console.log("Good Evening");
//         break;
//     case 21:
//         console.log("Good Evening");
//         break;
//     case 22:
//         console.log("Good Evening");
//         break;
// };