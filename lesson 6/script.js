alert('Hello') //Всплывающее окно в браузере. Но вывести можно только одну сущность.
const greeting = 'Hello World'
alert(greeting) //Выводить можно и через переменную
alert(5+6+7) //Выражение в круглых скобках будет вычесленно. Нам будет показан результат

//В процессе выполнения кода он останавливается на "alert" до тех пор, пока не будет закрыто окно

const userAge = prompt('Сколько тебе лет')
console.log(`Возраст: ${userAge}`)

const Age = Number(prompt('Сколько тебе лет', 18)) //В данном контексте 18 - это значение по дефолту

if (Age >= 18) {
console.log ('Доступ разрешен')
}
else {
    console.log ('доступ запрещен')
}

const year = Number(prompt('Какой сейчас год?'))

if (year === 0) {
    console.log ('Такого не может быть')
}
else if (year<=2024) {
    console.log ('Ты путешественник во времени?')
}
else if (year === 2025) {
    console.log ('Так точно')
}
else {
    console.log ('Что-то ты, друг, намудрил')
}

const userIsReady = confirm('Ты готов?')
if (userIsReady) {
    console.log ('Начинаем!')
}
else {
    console.log ('Ну нет - так нет')
}
