/*Приоритеты*/
numbers = () =>{
    return 55 * (7 + 2) / (4 + 2);
};
console.log(numbers());

/*Объявите переменную и запишите в нее свое имя как литерал строки.*/
let myName = 'Ann';

/*Объявите константу и запишите в нее год своего рождения как литерал числа.*/
const yearOfBirth = 1997;

/*Создайте функцию, которая печатает приветствие и имеет один аргумент: name.*/
hello = (myName) =>{//Закоментировать для корректной работы "консольных" функций
    alert ('My name is ' + myName);
};
hello(myName);

/*Реализуйте функцию average с сигнатурой average(a: number, b: number): number 
вычисляющую среднее арифметическое своих аргументов.*/
average = (a,b) =>{
    return (a + b) / 2;
};
console.log(average(10,14));

/*Реализуйте функцию square с сигнатурой square(x: number): number вычисляющую квадрат своего аргумента.*/
square = (a) =>{
    return Math.pow(a, 2);
};
console.log(square(4));

/*Реализуйте функцию cube с сигнатурой cube(x: number): number вычисляющую куб своего аргумента.*/
cube = (a) =>{
    return Math.pow(a, 3);
};
console.log(cube(3));