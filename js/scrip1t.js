// Вам нужно запросить у пользователя число.
// Добавить условие при котором число будет выводиться (через alert) с правильным словом: «год», «года» или «лет».
// Т.е. «29 лет» или «4 года».
//
// Ограничений по возрасту — нет, 0 тоже подходит.
//
//     Также сделайте простую проверку, что пользователь ввел число.

const num = String(prompt("Ваш возраст?"));

const digit = num[num.length - 1];
const beforeLastDigit = num[num.length - 2];

let res;
if (digit == 1 && beforeLastDigit != 1) {
    res = num + " год";
} else if (digit >= 2 && digit <= 4 && beforeLastDigit != 1) {
    res = num + " года";
} else {
    res = num + " лет";
}

alert(res);