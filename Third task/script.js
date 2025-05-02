//Типы данных
const name = 'Valeria' //String 
const age = 28 //Number
const isQA = true //Boolean
const power = 99999999999n // BigInt
const sign = Symbol () // Symbol
const something = undefined //Undefined

const user = {   //Object
    login: '123',
    password: 'qwer',
}

const data = null //Null

//Строковый тип данных Srting
const greeting = 'Привет'
const firstName = "Valeria"
const goodbye = `Пока` //Обратные кавычки (бектики) дают доп функционал

const message = `${greeting}, ${firstName}!` //В такую строку можно вставлять другие сущности. Это интерполяция строк
console.log (message)

const a = 5
const b = 10
const sum = `Сумма a и b равна ${a + b}`
console.log (sum)

const test = `
текст
можно
растянуть
на сколько угодно строк
`

//Числовой тип данных Number. Отвечает и за целые числа, и за числа с точкой

const test1 = 1_000_000 //Можно использовать _ чтобы число легче читалось

const posX = 50
const posY = -100
const posZ = 12.5

const point = (posX + posZ)/posY * 2
console.log (point)

console.log ('Hello' / 100) // В строке будет не ошибка, а особый тип данных - NaN (Not a Number)
console.log (100 / 0) // В строке будет еще одно спец значение: Infinity. Infinity всегда больше любого числа 
console.log (-100 / 0) // В строке будет еще одно спец значение: - Infinity. Infinity всегда меньше любого числа 

//Для больших чисел используется на Number, а BigInt. Для этого в конце большого числа нужно добавить n

console.log (99999999999999999n + 1n) //Но BigInt не может сложиться с простым Numb. Поэтому приходится добавлять n и к простому числу

//Булевый тип данных Boolean

const shouldLearnJs = true
const itIsAlreadyLate = false

const salary = 10000
const isBig = 100 < salary
console.log (isBig) //В консоли выведется true

//Null - ничто. Тип, который присваивают переменным, у которых еще нет данных. Например, они не были запрошены и не были получены с сервера

//Undefined - тип, который отображается, когда переменной не задали значение

//Тип данных Объект. Object.
const list = {}

const Naruto { //Наборы ключ-значения
    village: Konoha,
    rank: genin,
}
const numbers [1, 4, 6, 8] //Массивы

const map = new Map () //Коллекции
const set = new Set ()
const date = new Date ()

