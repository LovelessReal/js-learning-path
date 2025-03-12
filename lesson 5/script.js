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
const words = y = 15 ? 'Lets do is' : ''