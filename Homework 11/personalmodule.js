module.exports.pryvit = function (name) {
let time = new Date().getHours();

    if (time == 23 || time >= 0 && time <= 5) {
        `Good Night, ${name}`;
    } else if (time >= 6 && time <= 11) {
        `Good Morning, ${name}`;
    } else if (time >= 12 && time <= 17) {
        `Good Day, ${name}`;
    } else if (time >= 18 && time <= 22) {
        `Good Evening, ${name}`;
    };

};
