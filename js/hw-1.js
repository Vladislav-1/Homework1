/* Задание 1
Создайте переменную a. Запишите в нее значение 10, выведите его на экран с помощью метода alert(). Затем запишите в нее же значение 20, выведите его на экран. */

let a = 10;
alert(`a = ${a}`);

a = 20;
alert(`Теперь a = ${a}`);

/* Задание 2
Создайте переменную и присвойте ей значение года выпуска первого iPhone. Выведите значение переменной на экран. */

let firstIPhone = 2007;
alert(`Первый iPhone был выпущен в ${firstIPhone} г.`);

/* Задание 3
Создайте переменную и присвойте ей значение имени создателя языка JavaScript. Выведите значение переменной на экран. */

let nameСreatorJavaScriptLanguage = 'Brendon Eich';
alert(`Создателя языка JavaScript зовут ${nameСreatorJavaScriptLanguage}.`);

/* Задание 4
Создайте две переменные: 10 и 2. С помощью метода alert() выведите на экран их сумму, разность, произведение и частное (результат деления). */

let x = 10;
let y = 2;

let sum = x + y;
alert(`x = 10,
y = 2,

x + y = ${sum}`);

let diff = x - y;
alert(`x = 10,
y = 2,

x - y = ${diff}`);

let composition = x * y;
alert(`x = 10,
y = 2,

x * y = ${composition}`);

let quotient = x / y;
alert(`x = 10,
y = 2,

x / y = ${quotient}`);

/* Задание 5
Возведите 2 в 5-ю степень. Результат запишите в переменную result и выведите на экран с помощью метода alert(). */

let z = 2;
result = z ** 5;
alert(`${z} в 5-ой степени равно ${result}.`);

/* Задание 6
Даны переменные: a = 9 и b = 2. Найдите остаток от деления a на b и выведите результат на экран с помощью метода alert(). */

a = 9;
b = 2;
result = a % b;
alert(`Остаток от деления a на b равен ${result}.`);

/* Задание 7
Перепишите код с использованием операторов присваивания и инкремента/декремента (количество строк должно остаться прежним):

let num = 1;
num = num + 5;
num = num - 3;
num = num * 7;
num = num / 3;
num = num + 1;
num = num - 1;
alert(num); */

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(`Итог:

num = ${num}.`);

/* Задание 8
Создайте переменную age, присвойте ей значение с помощью метода prompt() «Сколько вам лет?». Результат выведите с помощью alert(). */

let age = 0;

age = Number(prompt('Сколько вам лет?'));
if (age == 18 || age == 19 || age == 20 || age == 25 || age == 26 || age == 27 || age == 28 || age == 29 || age == 30 || age == 35 || age == 36 || age == 37 || age == 38 || age == 39 || age == 40 || age == 45 || age == 46 || age == 47 || age == 48 || age == 49 || age == 50 || age == 55 || age == 56 || age == 57 || age == 58 || age == 59 || age == 60 || age == 65 || age == 66 || age == 67 || age == 68 || age == 69 || age == 70 || age == 75 || age == 76 || age == 77 || age == 78 || age == 79 || age == 80 || age == 85 || age == 86 || age == 87 || age == 88 || age == 89 || age == 90 || age == 95 || age == 96 || age == 97 || age == 98 || age == 99 || age == 100 || age == 105 || age == 106 || age == 107 || age == 108 || age == 109 || age == 110) { termin = 'лет' };
if (age == 21 || age == 31 || age == 41 || age == 51 || age == 61 || age == 71 || age == 81 || age == 91 || age == 101) { termin = 'год' };
if (age == 22 || age == 23 || age == 24 || age == 32 || age == 33 || age == 34 || age == 42 || age == 43 || age == 44 || age == 52 || age == 53 || age == 54 || age == 62 || age == 63 || age == 64 || age == 72 || age == 73 || age == 74 || age == 82 || age == 83 || age == 84 || age == 92 || age == 93 || age == 94 || age == 102 || age == 103 || age == 104) { termin = 'года' };
alert(`Мы теперь знаем, что Вам ${age} ${termin}.`);

