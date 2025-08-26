//Задача 1. Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.

let x = prompt ('Введите любое число: положительное или отрицательное')
if (x > 0) {
    console.log (`Число ${x} является положительным`)
}
else if (x < 0) {
    console.log (`Число ${x}, является отрицательным`)
}
else {
    console.log (`Число ${x}, равно нулю`)
}

//Задача 2. Дана строка. Выведите в консоль длину этой строки.

let user_string = prompt ('Введите любой текст')
let user_string_length = user_string.length
console.log (`Длина введенной пользователем строки ${user_string_length}`)

//Задача 3. Дана строка. Выведите в консоль последний символ строки.

let user_sentence = prompt ('Введите сюда что-нибудь')
let last_letter = user_sentence.slice(-1)
console.log(last_letter)

//Дано число. Проверьте, четное оно или нет.

let user_number = prompt ('Введите какое-то число')
user_number = Number(user_number)
 k = (user_number % 2)
 if (k > 0) {
    console.log('Было введено нечетное число')
 }
 if (k == 0) {
    console.log ('Было введено четное число')
 }