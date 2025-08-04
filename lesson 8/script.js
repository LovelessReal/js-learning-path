//Функции в JS

//Встроенные функции

console.log ('Привет из консоли')
 
const number_from_string = Number('100')
const string_from_number = String(100)
const boolean_fron_null = Boolean(null)

alert('Привет из alert')
confirm('Подтверждение действий')

const answer = prompt('Введите ответ')

//Напишем свою функцию

function log_hello() {
    console.log('Привет') //Изначально код в скобках не будет выполняться. Функцию необходимо вызвать.
}

log_hello() //Вызов функции