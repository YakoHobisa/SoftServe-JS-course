/* 1. Створити Node.js http-сервер, який слухатиме запити на порт 5000 на локальній  машині.
Сервер повинен повертати сторінку, що містить ім’я поточного користувача операційної системи,
тип операційної системи, час роботи системи в хвилинах (використати модуль OS),
поточну робочу директорію і назву файлу сервера (використати модуль path). */

// const http = require("http");
// const os = require("os");
// const path = require("path");

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-type": "text/html" });
//     let username = os.userInfo().username;
//     let userOs = os.type();
//     let upTime = Math.round(os.uptime() / 60);
//     let pth = path.dirname(
//       "/Users/nazarlytvynenko/Desktop/SoftServe JS course/Homework 11/index.js"
//     );
//     let serverName = path.basename(__filename);
//     res.write(
//       `<h1>System information</h1> 
//               Current user name: ${username} <br>
//               OS Type: ${userOs} <br>
//               System work time: ${upTime} <br>
//               Current work directory: ${pth} <br>
//               Server file name: ${serverName} <br>`,
//       "utf8"
//     );
//     res.end();
//   })
//   .listen(5320);
// console.log("Server running at http://127.0.0.1:5320/");


/* 2. Необхідно створити власний модуль personalmodule.js, який містить функцію,
що приймає ім’я системного юзера і працює з поточним часом та на основі пори доби виводить повідомлення із привітанням юзера.
Щоб експортувати змінні чи функції модуля на зовні можна використати об’єкт module.exports. 
Створіть Node.js сервер, який з використанням функціоналу розробленого модуля повертатиме наступну сторінку: */

 
const http = require("http");
const os = require("os");
const personalmodule = require("./personalmodule");

http.createServer( function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    let userName = os.userInfo().username;
    res.write(`Date of request: ${pryvit.date}<br>`)
    res.write(pryvit.showMessage(userName))
    res.end();
}).listen(8000);

console.log('Server running at http://127.0.0.1:8000/');