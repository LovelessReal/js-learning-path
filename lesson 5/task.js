const userName = 'Максим'
const age = 16
const isRich = false
const withGoodJob = false
const hasMotivation = true
const hasFreeTime = true

if (userName !== 'Максим') {
    console.log('Позовите Максима')
} else if (age < 16) {
    console.log ('Максиму рано думать о взрослой жизни')
} else if (!isRich || !withGoodJob || hasMotivation && hasFreeTime) {
    console.log('Максиму нужно учить язык программирования')
}