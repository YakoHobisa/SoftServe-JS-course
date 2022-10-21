// 1.   Напишіть скріпт всередині HTML-документу, який виводить на екран ваше імя за допомогою функції alert().

// done

/* 2.  Напишіть скріпт в зовнішньому файлі, який виводить в консоль ваше прізвище.    
      Підключіть створений файл до HTML-документу. */

    // let userLastName = "Lytvynenko";
    // alert(userLastName);

/* 3. a) оголосіть дві змінні;
    b) запишіть у змінні будь-які значення;
    c) виведіть на екран значення змінних;
    d) скопіюйте значення однієї змінної в іншу;
    e) виведіть на екран значення змінних. */

    // let a, b;

    // a = 3;
    // b = 8;

    // alert(a);
    // alert(b);

    // a = b;

    // alert(a);
    // alert(b);


// 4. Створіть об’єкт з 5-ма наступними властивостями: “String”, “Number”, “Boolean”, “Undefined”, “Null”. Значення кожної властивості повинно відповідати відповідному примітивному типу даних.
	
    // let Car = {
    //     manufacturer: "Porsche",
    //     carBodyDesignation: 991,
    //     isRelevant: true,
    //     seller: undefined,
    //     color: null
    // };
    // console.log(Car);

// 5. Використовуючи функцію confirm() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult і виведіть в консоль.

    // let isAdult = confirm("Вам виповнилося 18 років?");
    // console.log(isAdult);

/* 6. В зовнішньому файлі напишіть скріпт, в якому оголосіть змінні, для збереження таких даних:
	- ваше ім’я
	- ваше прізвище
	- навчальна група
	- ваш рік народження.
    Присвойте змінним відповідні значення. 
    Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану. 
    Визначте тип кожної змінної.
    Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String.
    Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль. */
	
    // let myName = "Nazar";
    // let myLastName = "Lytvynenko";
    // let studyGroupName = "JS Fundamentals";
    // let yearOfBirth = 1995;
    // let isMarried = false;

    // console.log(yearOfBirth, isMarried, myName, myLastName, studyGroupName);

    // let musicTaste = null;
    // let hoursOfSleep;
    // console.log(typeof musicTaste, hoursOfSleep);

// 7. За допомогою функції prompt() напишіть скріпт, який послідовно запитує в користувача логін, емейл та пароль, і виводить на екран повідомлення із введеними даними.
    // Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”.

    // let userLogin = prompt("Please, enter your login");
    // let userEmail = prompt("Please, enter your e-mail address");
    // let userPass = prompt("Please, enter your password");

    // alert(`Dear ${userLogin}, your email is ${userEmail}, and your password is ${userPass}`);


/* 8. Напишіть скріпт, який вираховує кількість секунд в годині, в добі, в місяці, записує результати в відповідні змінні, і виводить їх значення на екран. */

// const secsInAnHour = 3600;
// const secsInADay = 86400;
// const secsInAMonth = 30.436875 * secsInADay; //In the Gregorian calendar, an average month has exactly 30.436875 days.

// let hours;
// let days;
// let months;
// let result;
// let converter = prompt("What do you want to convert to seconds? \n 1. Hours \n 2. Days \n 3. Months \n Enter a number:");

// if (converter == 1){
//     hours = prompt("Enter a number of hours:")
//     if (hours >= 0){
//         result = hours * secsInAnHour;
//         alert(`There is ${result} seconds in ${hours} hour(s)`);
//     } else {alert("Enter a valid number of hours")}
// } else if (converter == 2){
//     days = prompt("Enter a number of days:");
//         if (days >= 0){
//     result = days * secsInADay;
//     alert(`There is ${result} seconds in ${days} day(s)`);
//         } else {alert("Enter a valid number of hours")}
// } else if (converter == 3){
//     months = prompt("Enter a number of months:");
//         if (months >= 0){
//     result = months * secsInAMonth;
//     alert(`There is ${result} seconds in ${months} month(s)`);
//         } else {alert("Enter a valid number of hours")}
// } else if (converter != 1 || 2 || 3){
//     alert("Enter a valid number: 1, 2 or 3")
// } 
