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

function have_a_good_day() {
console.log('Hi')
console.log('Glad to see u')
console.log('Have a good day')
}//Внутри тела функции может быть сколько угодно инструкций. Все они выполнятся при вызове.

have_a_good_day()
have_a_good_day()
have_a_good_day()

//Область видимости

const song = ('I walk a lonely road, the only one that i have ever know')
function log_song() {
    console.log (song) //Мы легко обращаемся к переменно извне
}


function log_song1() {
    const song1 = ('Dont know where it goes but its home to me and i walk alone')
    console.log (song1) //Мы легко обращаемся к переменно извне
}
//Но обратиться к переменной song1 вне функции нельзя, так как она вне зоны видимости

{
    const song2 = ('I walk this empty street')
    console.log(song2)
    {
        const song2 = ('On the Boulevard of Broken Dreams')
        console.log(song2)
        {
            const song2 = ('Where the city sleeps And Im the only one, and I walk alone')
            console.log(song2)
        }
    }
}

function log_message(message, count) { //message и count - параметры функции
    for (let i = 0; i < count; i++) 
        console.log(message)
}
log_message('I walk alone, I walk alone', 2) // при вызове функции параметры становятся аргументами
log_message('I walk alone, I walk a-', 1) //Перечисляются они в том же порядке, что и параметры 

function sum(a, b) {
    return a + b //Если после return добавить какие-то команды, то они не выполнятся
} 
console.log (
    sum(11, 33)
)

function get_age_type(age) {
 if (age !== 'number') {
    return 'Возраст указан некорректно'
 }

 if (age > 125 || age < 1) {
    return 'Такого возраста не может быть'
 }

 if (age < 18) {
    return 'Несовершеннолетний'
 }

 return 'Взрослый'

}

console.log(get_age_type(22))