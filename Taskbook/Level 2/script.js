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

 let user_numeric = Number (prompt ('Вводим число, в консоли будет выведена последняя цифра числа').trim())//Убирает в конце пробелы
 if (isNaN(user_numeric)) {
    console.log ('Это не число')
 }
 else {
 console.log (Math.abs(user_numeric % 10))
 }

 //Но этот код работает только при условии ввода целого числа. Рассмотрим второй вариант

 let user_input = prompt ('Введите целое или десятичное число').trim() //Убирает в конце пробелы
 if (isNaN(Number(user_input)) || user_input === '') { 
    console.log ('Это не число')
 }
 else {
console.log (user_input.slice(-1))
 }

 //Дано число. Выведите в консоль сумму первой и последней цифры этого числа.

 let user_choice = prompt ('Введите число, которое состояло бы больше, чем из одной цифры').trim()
 if (isNaN(Number(user_choice)) || user_choice === '' || Math.abs(Number(user_choice)) < 10) {
   console.log ('Введенное число не удовлетворяет требованиям')
 }
 else {
   let first_digit = Number(user_choice[0]);
  let last_digit = Number(user_choice[user_choice.length - 1]);
  let numerics_sum = first_digit + last_digit;
   console.log (numerics_sum)
 }


 //Дано число. Выведите количество цифр в этом числе.
let numero = prompt('Введите число').trim()
let num = Number(numero)   // преобразуем один раз

if (isNaN(num) || numero === '') {
  console.log('Некорректно введенные данные')
}
else {
  let x = 1
  while (num >= 10) {
    num = Math.floor(num / 10)
    x++
  }
  console.log(`В введенном числе ${x} цифр`)
}

//Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

let first_user_number = prompt ('Введите первое число').trim()
let second_user_number = prompt ('Введите второе число').trim()


if (isNaN(first_user_number) || isNaN(second_user_number) || first_user_number === '' || second_user_number === '') {
  console.log ('Вы ввели некорректные данные')
} 
else {
  let first_numb = Math.abs(first_user_number).toString()[0]
  let second_numb = Math.abs(second_user_number).toString()[0]
  if (first_numb === second_numb) {
    console.log ('Первые цифры введенных чисел совпадают')
  }
  else {
    console.log ('Первые цифры введенных чисел не совпадают')
  }
}