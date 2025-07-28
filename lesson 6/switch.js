const y = +prompt('Сколько тебе лет?', 18) //+ вместо Number
switch (y) {
    case 0: {
        console.log('Такого возраста не бывает')
        break
    }
    case 18: {
            console.log ('Не верю, покажи паспорт')
            break
        }
        case 100: {
            console.log ('Ну ты долгожитель')
            break
        }
        case 1000: {
            console.log ('Несите кол, у нас вампир')
            break
        }
        default: {
            console.log(`Твой возраст: ${y}`)
        }

    }

    const x = +prompt('Введи число?', 2025) //+ вместо Number
    switch (true) {
        case x <= 0:
            {
                console.log ('Иди готовить плов')
                break
            }
        case x <=100: {
            console.log ('Читай книгу')
            break
        }
        case x <=1000: {
            console.log ('Посмотри сериал')
            break
        }
        default: {
            console.log ('Достаем лотерейный билет')
        }
    }
    //Брейк нужен, чтобы все последующие условия не выполнились