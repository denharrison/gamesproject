// 1 задача
let password = 'пароль';
let numpassword = String(prompt('Введите ваш пароль'));
if (password === numpassword) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неверно');
}
// 2 задача
let c = 24;

if (c > 0 && c < 10) {
    alert('Верно');
} else {
    alert('Неверно');
}
// 3 задача
let d = 23;
let e = 103;
if (d > 100 || e>100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
// 4 задача 
let a = '2';
let b = '3';
alert(Number(a) + Number(b));
// 5 задача
const mothNumber = 7;
switch (mothNumber) {
    case 1:
    case 2:
    case 12:
    alert("Зима");
    break;

    case 3:
    case 4:
    case 5:
    alert('Весна');
    break;

    case 6:
    case 7:
    case 8:
    alert('Лето');
    break;

    case 9:
    case 10:
    case 11:
    alert('Осень');
    break;
}
