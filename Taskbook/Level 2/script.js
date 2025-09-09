//Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

let first_number = prompt ('Введите первое число')
 let second_number = prompt ('Введите второе число')
  if (String (Math.abs(first_number))[0] === String(Math.abs(second_number))[0]) { 
    /* 
    Math.abs() на случай отрицательного числа
    Но он преобразует строку в число.
    Для сравнения конкретных индексов нам нужно преобразовать число обратно в строку
    */
     console.log ('Первые цифры этих чисел совпадают') }
 else { 
    console.log ('Первые цифры этих чисел не совпадают')
 }

 //Дано число. Выведите в консоль первую цифру этого числа.

 let user_number = prompt ('Введите число, в консоли будет выведена первая цифра числа')
 console.log (String(Math.abs(user_number))[0])

 //Дано число. Выведите в консоль последнюю цифру этого числа.

 let user_numeric = Number (prompt ('Вводим число, в консоли будет выведена последняя цифра числа').trim())
 if (isNaN(user_numeric)) {
    console.log ('Это не число')
 }
 else {
 console.log (Math.abs(user_numeric % 10))
 }

 //Но этот код работает только при условии ввода целого числа. Рассмотрим второй вариант

 let user_input = prompt ('Введите целое или десятичное число').trim() //Убирает введенные в конце пробелы
 if (isNaN(Number(user_input)) || user_input === '') { 
    console.log ('Это не число')
 }
 else {
console.log (user_input.slice(-1))
 }