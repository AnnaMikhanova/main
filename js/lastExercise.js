/*Вызовите функции square и cube в цикле от 0 до 9, вычисляя, соответственно квадрат и куб от переменной цикла. 
Передайте квадрат и куб на каждой итерации в функцию average. Результаты сложите в массив и возвратите из функции calculate.*/

let i=0; //переменная для цикла от 0 до 9
let arrSum=0; //переменная для хранения суммы элементов массива
let y=0; //переменная для цикла обхода массива
let sn=0; //переменная для хранения квадратов
let av=0; //переменная для хранения средних значений
let arrayOfNumber = []; //пустой массив для записи в него средних значений


average = (a, b) =>{ //функция для вычисления среднего значения двух чисел
    return (a + b) / 2;
};
calculate = (a, b) =>{ //функция для подсчета суммы элементов массива
    return c = a + b;
};

myFunction = (sn) =>{ //функция считает и выводит квадрат и куб, считает их среднее значение на каждой итерации 
    // и записывает результат каждой итерации в массив arrayOfNumber
    for (; i<=9; i++){
        sn = Math.pow(i, 2) ;
        document.write("<br/>", "Квадрат числа ", i, "= ", sn, "<br/>");

        snn = Math.pow(i, 3);
        document.write("Куб числа ", i, "= ", snn, "<br/>");

        av = average(sn, snn);
        document.write("Среднее значение квадрата и куба числа ", i, "= ", av, "<br/>");

        arrayOfNumber.push(av);
        document.write("[ ",arrayOfNumber, " ]", "<br/>");
    };

};

mySecondFunction = (arrSum) =>{ //функция находит сумму всех элементов массива, созданного предыдущей функцией
    for (y; y < arrayOfNumber.length; y++){
        arrSum = calculate(arrSum, arrayOfNumber[y]);
        
    };
    
    document.write("<br/>", "Сумма всех элементов массива - ", arrSum);
    
};
console.log(myFunction(sn));
console.log(mySecondFunction(arrSum));

