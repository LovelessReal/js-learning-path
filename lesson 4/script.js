//Арифметические операторы

console.log (2 + 2)
console.log (10 - 1)
console.log (5 * 3)
console.log (6 / 2)

console.log (6 ** 3) //Возведение в степень
console.log (5 % 2) //Остаток от деления

console.log (-2) //Это унарный оператор, т.е действует только на один операнд

console.log (
    typeof +'123' //Из-за + строка будет преобразована в числовой тип данных
)

console.log ('3' + '5') //В консоли выведется 35
console.log (+'3' + +'5')//Результат изменится на 8. Сначала произошло преобразование каждого числа, а потом их сложение

let count = 1

count = count + 2 //Изначальное значение увеличится на 2
count +=2 //Упрощенный вариант этой же записи

count -=5 //count = count - 5
count *=10 // count = count * 10
count /=3 // count = count / 3

count = 10
count-- //декрементация, т.е. уменьшение на 1
count++ //инкрементация т.е. увеличение на 1

console.log(5 > 3) // true
console.log(5 < 3) //false
console.log(2 >= 2) //true
console.log(3 <= 0) //false
console.log(5 == 5) //true
console.log(5 != 5) //false (аналог знака перечеркнутого равно)

console.log(2 == '2') //true JS привел данные к единому типу данных и сравнил их. Это нестрогое сравнение
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
console.log(2 === '2') //false. Это режим "строгое сравнение". Он не приводит данные к общему типу
>>>>>>> Stashed changes
=======
console.log(2 === '2') //false. Это режим "строгое сравнение". Он не приводит данные к общему типу
>>>>>>> Stashed changes
=======
console.log(2 === '2') //false. Это режим "строгое сравнение". Он не приводит данные к общему типу
>>>>>>> Stashed changes
