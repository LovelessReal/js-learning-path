//Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

let first_number = prompt ('Введите первое число')
 let second_number = prompt ('Введите второе число')
  if (String (Math.abs(first_number))[0] === String(Math.abs(second_number))[0]) {
     console.log ('Первые цифры этих чисел совпадают') }
 else { 
    console.log ('Первые цифры этих чисел не совпадают')
 }