//Преобразование типов данных может быть явным и неявным
const numb = 111
const str = '222'
const result = numb + str
console.log (result) //В консоли будет выведено 111222. Числа склеются 
console.log (typeof result) //result отразится как данные со строчным типом

//Для numb произошло неявно преобразование типа данных из Number в String

console.log ('16' / '8') /*В консоли отобразится число 2. 
Потому что произошло неявное преобразование.
Сначала '16' преобразовалось из String в Number, потом '8'.
После этого произошло вычисление 
*/

console.log ( 
    typeof ('16' / '8') //Проверка typeof  подтвердит, что на выходе пролучается данное с типом Numb
)

//Несмотря на возможность преобразования, смешивать типы данных и производить операции между ними - плохая практика

const years = 11
console.log(typeof (years)) //В консоли отобразится тип данных Number
console.log(typeof (String(years))) //В консоли отобразится тип данныз String. Это явное преобразование

const isAdult = false 
console.log (isAdult) //В консоли отобразится false синим цветом (как булевое значение)
console.log (String(isAdult)) //В консоли отобразится false черным цветом (как значение типа String)

const obj = {}
console.log (
    String (obj) //Результатом такого преобразования станет [object Object]
)

const points = '10'
const my_point = Number(points) //Преобразование из строки в число

console.log (
    Number (true) // true преобразуется в 1
)

console.log (
    Number (false) // false преобразуется в 0
)

 console.log (Boolean(-1)) //Преобразуется в true
 console.log (Boolean(0)) //Преобразуется в false
 console.log (Boolean(1)) //Преобразуется в true
 console.log (Boolean(2)) //Преобразуется в true

  console.log (Boolean('текст')) //Преобразуется в true
 console.log (Boolean('0')) //Преобразуется в false
 console.log (Boolean(' ')) //Преобразуется в true
 console.log (Boolean('')) //Отсутствие всяких симолов (даже пробела) преобразует строку в false