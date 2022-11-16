/* 1. За допомогою методів об’єкта window створити:
	1) нове вікно розміром 300х300 пікселів.
	2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
	3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
	4) із затримкою 2 сек закрийте вікно. */

let newWin;
    function newWindow() {
        newWin = window.open("", "", "width=300, height=300");
    };
    setTimeout(function(){newWin.resizeTo(500, 500)}, 2000);
    setTimeout(function(){newWin.moveTo(200, 200)}, 4000);
    setTimeout(function(){newWin.close()}, 6000);

/* 2. Для заданої HTML-сторінки:

<p id ='text'>I learning JavaScript events!</p> 
<div>
	<button . . . . . >Change style!</button>
</div>

напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і змінюватиме стиль вмісту тега <p>:
колір шрифту – оранжевий, розмір шрифту 20 пс, шрифт сімейства "Comic Sans MS". */

let par = document.querySelector("#text");

function changeCSS() {
    par.style.color = "orange";
    par.style.fontSize = "20px";
    par.style.fontFamily = "Comic Sans MS";
}

/* 3. Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку 
з відповідними подіями на кожному елементові:
	1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
	2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
	3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
	4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
	Приклад – курсор наведений на лінку. */
 
    document.querySelector("#backgrClr").onclick = function() {
        document.body.style.backgroundColor = "blue";
     };
     document.querySelector("#backgrClrDoubleClick").ondblclick = function() {
        document.body.style.backgroundColor = "pink";
     };
     document.querySelector("#backgrClrHoldRelease").onmousedown = function() {
        document.body.style.backgroundColor = "purple";
     };
     document.querySelector("#backgrClrHoldRelease").onmouseup = function() {
        document.body.style.backgroundColor = "white";
     };
     document.querySelector("#backgrClrOver").onmouseover = function() {
        document.body.style.backgroundColor = "yellow";
     };
     document.querySelector("#backgrClrOver").onmouseout = function() {
        document.body.style.backgroundColor = "white";
     };


/* 4. Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку.
Можуть видалятися всі елементи в будь-якому порядку. */

 let carsElement = document.querySelector("#cars")
    document.querySelector("#deleteSelected").onclick = function() {
        carsElement.remove(element.selectedIndex);
    };


/* 5. Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення 
"I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!",
а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".

Приклад роботи: */

     document.querySelector("#liveBttn").onclick = function() {
        document.querySelector("#clickMess").innerText += "I was pressed! \r\n";
     };
     document.querySelector("#liveBttn").onmouseover = function() {
        document.querySelector("#clickMess").innerText += "Mouse on me! \r\n";
     };
     document.querySelector("#liveBttn").onmouseout = function() {
        document.querySelector("#clickMess").innerText += "Mouse is not on me! \r\n";
     };


/* 6. Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера
і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення. */

 
window.onresize = displayWindowSize;
window.onload = displayWindowSize;
let myWidth;
let myHeight;

function displayWindowSize() {
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
    document.querySelector("#dimensions").innerHTML = "Width: " + myWidth + ", Height: " + myHeight;
};


/* 7*. На сторінці потрібно реалізувати 2 випадаючих списки. У першому містяться назви країн,
у другому – назви міст. Реалізувати роботу таким чином,
щоб коли вибирається з лівого випадаючого списку певна країна - в правому випадаючому  списку з'являлися міста цієї країни.
Список міст формується динамічно, через JavaScript. Також потрібно нижче вивести назву обраної країни і місто.
   

Код HTML-сторінки:
<select name="country" id="country">
	<option value="ger">Germany</option>
	<option value="usa">USA</option>
	<option value="ukr">Ukraine</option>
</select>
                    
<select name="cities" id="cities"></select>
<p></p> */


// ----------not done yet--------- 


// let mealsByCategory = {
//     A: [],
//     B: [],
//     C: []
// }

//     function changecat(value) {
//         if (value.length == 0) document.querySelector("#country").innerHTML = "<option></option>";
//         else {
//             var catOptions = "";
//             for (categoryId in mealsByCategory[value]) {
//                 catOptions += "<option>" + mealsByCategory[value][categoryId] + "</option>";
//             }
//             document.querySelector("#cities").innerHTML = catOptions;
//         }
//     }
