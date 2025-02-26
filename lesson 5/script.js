const year = 2025

if (year == 2025) {
    console.log('Ура!')
    console.log('Самое время изучать JS')
} else if (year < 2025){ //иначе если
 console.log('О, да ты путешественник во времени')
} else {
    console.log('Too late...')
}

const x = 9
let message = null //обозначаем так потому что собираемся перезаписать переменную

if (x == 20) {
    message = 'Say something'
}
else if (x > 20) {
    message = 'High way to hell'
}
else {
    message = 'i like to move it'
}

console.log(message)

//Есть краткая запись с 2мя вариантами развития

const y = 15
const words = y = 15 
? 'Lets do is' 
: 'Hello world' 
/* Мы присваиваем word значение "у" и спрашиваем: оно равно 15? Если да - то... 
После : ставится действие на случае, если у не равно 15
*/

console.log(words)

//Сравнение нескольких условий

//Логический оператор "ИЛИ" (равноценен операции логического сложения)

false || false //false
true || false //true
false ||true //true
true || true //true

const age = 15
const withParent = true

if (age > 18 || withParent) {
    console.log('Проходите')
} else {
    console.log ('Несовершеннолетним вход закрыт')
}

const result = '' || false || null || undefined || 0 || 'Hello' //Присваивание будет работать до тех пор, пока не напорется на true
console.log (result)

//Второй оператор && (И) (равноценен операции логического умножения)

console.log(false && false) // false
console.log (true && false) // false
console.log (false && true) // false
console.log (true && true) // true

const moneyInWallet = 100
const iceCreamPrice = 100
const shopIsOpen = false

if (moneyInWallet >= iceCreamPrice && shopIsOpen) {
    console.log ('u can buy this ice cream ')
} else {
    console.log ('u will buy it next time')
}

//Оператор  ! (НЕ)
//Приводит к булевому типу, а потому инвентирует в противоположный

console.log (!false) //в консоли отобразится true
console.log (!true) //в консоли отобразится false
console.log(!'') // true
console.log(!'Hello') // false
