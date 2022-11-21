/* 1. Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні. 
	Приклад роботи:
upperCase('regexp');
upperCase('RegExp');
String's not starts with uppercase character 
String's starts with uppercase character */

// function upperCase(word){
//     if(/[A-Z]/.test(word.charAt(0)) == true) {
//         return "String's starts with uppercase character"
//     } else {
//         return "String's not starts with uppercase character"
//     }
// };
// console.log(upperCase('regexp'));
// console.log(upperCase('RegExp'));

/* 2. Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
Валідними вважаються всі символи на різних позиціях.
	Приклад роботи:
checkEmail("Qmail2@gmail.com");
true */

// function checkEmail(email) {
//   let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}")
//   return regex.test(email)
// };

// console.log(checkEmail("Qmail2@gmail.com"));

/* 3. Напишіть регулярний вираз, який знаходитиме в тексті одну літеру d, за якою йде одна чи більше b, за якими одна d.
Запам’ятати знайдені b і наступну за ними d.  Враховувати верхній і нижній регістр.
	Приклад роботи:   
Для стрінги "cdbBdbsbz" результат ["dbBd", "bB", "d"] */

// function lett(str) {
//   let lettRegex = /d(b+)(d)/i;
//   return lettRegex.exec(str);
// }
// console.log(lett("cdbBdbsbz"));

/* 4. Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
	Приклад роботи:
Вхідний рядок    "Java Script"
Вихід    “Script, Java” */

// function switchWords(phrase) {
//   const regex = /(\w+)\s(\w+)/;
//   return phrase.replace(regex, "$2 $1");
// }
// console.log(switchWords("Java Script"));

/* 5. Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999). */

// function validateCard(cardNum) {
//   let regex = new RegExp(/^\d{4}-\d{4}-\d{4}-\d{4}$/);
//   return regex.test(cardNum);
// }
// console.log(validateCard("9999-9999-9999-9999"));

/* 6. Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
	Вимоги:
•  Цифри (0-9).
•  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
•  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
•  Символ “-” не може повторюватися.
checkEmail('my_mail@gmail.com');
Email is correct!
checkEmail('#my_mail@gmail.com');
Email is not correct!
checkEmail('my_ma--il@gmail.com');
Email is not correct! */

// function checkEmail(email) {
//   let regex = new RegExp(/^[^#_-]([A-Za-z0-9_.%+]\-?)+@[A-Z0-9-]+\.[A-Z]{2,4}/gi);
//   if (regex.test(email)) {
//     return "Email is correct!";
//   } else {
//     return "Email is not correct!";
//   }
// }
// console.log(checkEmail("my_mail@gmail.com"));
// console.log(checkEmail("#my_mail@gmail.com"));
// console.log(checkEmail("my_ma--il@gmail.com"));

/* 7. Напишіть функцію, яка перевіряє правильність логіна. 
Правильний логін - рядок від 2 до 10 символів, що містить лише букви та числа, номер не може бути першим.
Функція має приймати рядок і знаходити усі числа в цьому рядку, включаючи числа з плаваючою комою (наприклад, 3.4).
	Приклад роботи:
checkLogin('ee1.1ret3');
true 
1.1, 3

checkLogin('ee1*1ret3');
false 
1, 1, 3 */

// function checkLogin(str) {
//   let regex = /^[a-zA-Z]{1}[a-zA-Z0-9\.]{1,9}$/;
//   let regexNum = /[0-9\.]+/g;
//   let res = regex.test(str);
//   let resNum = str.match(regexNum);
//   return [res, resNum];
// }

// console.log(checkLogin("ee1.1ret3"));
// console.log(checkLogin("ee1*1ret3"));
