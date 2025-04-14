//Преобразование типов данных может быть явным и неявным
const numb = 111
const str = '222'
const result = numb + str
console.log (result) //В консоли будет выведено 111222. Числа склеются 
console.log (typeof result) //result отразится как данные со строчным типом

//Для numb произошло неявно преобразование типа данных из Number в String