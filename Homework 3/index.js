/* 1. Заданий масив з елементами [2, 3, 4, 5]. За допомогою циклу for знайдіть добуток елементів цього масиву.
Також реалізуйте завдання через while. */
	/* with for */
// let numArr = [2, 3, 4, 5];
// let multResult = 1;

//     for (let i = 0; i < numArr.length; i++) {
//         multResult *= numArr[i];
//     }; 
// console.log(multResult);

    /* with while */
// let numArr = [2, 3, 4, 5];
// let multResult = 1;
// let i = 0;

//     while (i < numArr.length) {
//         multResult *= numArr[i];
//         i++;
//     };
// console.log(multResult);

/* 2. Напишіть JavaScript for цикл, який буде ітеруватися від 0 до 15.
Для кожної ітерації він перевірятиме, чи є поточне число парним чи непарним, і відображатиме повідомлення на екрані.
Sample Output: 
"0 is even" 
"1 is odd" 
"2 is even" */

// for (i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//         alert(i + " is even");
//         } else {
//         alert(i + " is odd");
//         }
// };

/* 3. Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами.
Випадкові числа генеруються із діапазону 1-500.

Sample Output:
randArray(5);  // [399,310,232,379,40] */

//     let arr = [];
// function randArray(k) {
//     for (let i = 0; i < k; i++) {
//         arr.push(Math.floor(Math.random() * 500))
//     }
// };
// randArray(5);
// console.log(arr);

/* 4. Напишіть функцію raiseToDegree(a,b), яка повертає результат піднесення числа a до степеня b.
Функція працює тільки з цілими числами. Реалізувати інтерфейс введення чисел a, b з клавіатури.

Sample Output:
raiseToDegree(3, 4);  // 81 */

// function raiseToDegree(a,b) {
//     if (Number.isInteger(a ** b)) {
//         return a ** b;
//     } else {
//         alert("Enter a whole number")
//     }
// };
// let degRes = raiseToDegree(+prompt("Enter a number:"), +prompt("Enter the degree:"));
// console.log(degRes);

/* 5. Реалізуйте функцію – findMin(), яка повинна приймати довільну кількість числових аргументів і повертати той, який має найменше значення.
Порада: для розв’язку можете скористатися спеціальним масивом arguments.
Sample Output:
findMin(12, 14, 4, -4, 0.2); // => -4 */

// function findMin() {
//     let minNum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         if (minNum > arguments[i]) {
//             minNum = arguments[i]; 
//         }
//     }
//     return minNum;
// };
// console.log(findMin(12, 14, 4, -4, 0.2));

/* 6. Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи.
Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
Sample Output:
findUnique([1, 2, 3, 5, 3]);  // => false
findUnique([1, 2, 3, 5, 11]); // => true */

//     function findUnique(arr) {
//     if (arr.length !== new Set(arr).size) {
//         return false;
//       } else {
//         return true;
//       }
//     };
// console.log(findUnique([1, 2, 3, 5, 3]), findUnique([1, 2, 3, 5, 11]))

/* 7. Напишіть функцію, яка повертає останній елемент масиву.
Функція може приймати 2 параметра: 1-ий масив, 2-ий числовий параметр,
що відповідає кількості 'х' останніх елементів масиву, які треба вивести.

Sample Output:
console.log(lastElem([3, 4, 10, -5]));      // -5
console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5] */

// function lastElem(arr, last) {
//     lastElemRes = [];
//     if (last === undefined) {
//         lastElemRes = arr.slice(-1)
//     } else {
//         lastElemRes = arr.slice(-last)
//     }
//     return lastElemRes;
// };

// console.log(lastElem([3, 4, 10, -5]));      // -5
// console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
// console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]

/* 8. Напишіть функцію, яка приймає рядок як параметр і перетворює першу букву кожного слова рядка в верхній регістр.

Input string: 'i love java script' 
Output string: 'I Love Java Script' */

// function capitaliseFirstLetter(inputStr) {
//     let splitStr = inputStr.toLowerCase().split(' ');
//     for (let i = 0; i < splitStr.length; i++) {
//         splitStr[i] = splitStr[i][0].toUpperCase() + splitStr[i].substring(1);     
//     }
//     return splitStr.join(' '); 
//  };
//  console.log(capitaliseFirstLetter('i love java script'));

 