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

let user_number = Number(prompt ('Введите какое-то число'))

 if (user_number % 2 > 0) {
    console.log('Было введено нечетное число')
 }
 else if (user_number % 2 == 0) {
    console.log ('Было введено четное число')
 }

 //Даны два слова. Проверьте, что первые буквы этих слов совпадают.

 let first_word = prompt ('Вводим первое слово')
 let second_word = prompt ('Вводим второе слово')
 if (first_word.charAt(0).toLowerCase() === second_word.charAt(0).toLowerCase()) { //charAt(0) - берет первые символы а .toLowerCase() позволяет проигнорить разницу в регистре
    console.log ('Первые буквы этих слов равны')
 }
 else {
    console.log ('Первые буквы этих слов не равны')
 }

 //Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.

 let user_word = prompt ('Еще одно слово')
 if (user_word.slice(-1) === 'ь') {
    console.log(user_word[user_word.length -2])
 }
 else {
    console.log (user_word[user_word.length -1]) //[user_word.length -1] означает посленюю цифру, а -2 - предпоследнюю
 }