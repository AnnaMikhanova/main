/* Решение задачи основано на одном из свойств совершенных чисел: если сложить все цифры чётного совершенного числа (кроме 6),
затем сложить все цифры полученного числа и так повторять, пока не получится однозначное число, 
то это число будет равно 1.
Например, 28 - совершенное число. 
2 + 8 = 10, 
1 + 0 = 1 */

const numbers = (userNumber) =>{
    let element; // переменная для обращения к элементам массива
    let arrayOfNumbers = []; // массив для хранения цифр из введённого пользователем числа 

    if (userNumber == 6) { // проверка для числа 6, т.к. это первое совершенное число, 
        //но оно не подходит под большинство свойств совершенных чисел
        console.log("TRUE");
    } 
    else{

        while (userNumber >= 10){
            arrayOfNumbers = []; // обнуление массива на каждой итерации 

                while (userNumber >= 1){ // цикл для обхода заданного числа по цифрам и записи этих цифр в массив
                    element = userNumber % 10;
                    arrayOfNumbers.push(element); 
                    userNumber = Math.floor(userNumber / 10);
                };
                
                for (element of arrayOfNumbers){ // цикл для сложения всех элементов массива
                    userNumber +=  element;
                };
        };
        
     userNumber == 1 ? console.log("TRUE") : console.log("FALSE"); // проверка на истиность условия и вывод результата
    };
};

numbers(2);
//несколько первых совершенных чисел для примера 
//6, 28, 496, 8128, 33550336, 8589869056, 137438691328
/* программа работает корректно только на приведенных совершенных числах, для чисел, которые больше приведенных необходим тип BigInt,
но тогда остальные данные тоже нужно подогнать под этот тип. В общем пока не могу разобраться как это сделать корректно((( */