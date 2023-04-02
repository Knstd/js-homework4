const r1 = require('readline').createInterface(process.stdin, process.stdout)
let numberToGuess = Math.floor(Math.random() * 1000);
// console.log("Загадано: ", numberToGuess)

function guessNumber(tries = 1) {
    r1.question('Введите число в диапазоне от 0 до 999 или "q" для выхода:', (cmd) => {
        if (cmd === 'q') {
            r1.close()
            console.log('До новых встреч!')
            return
        }
        if (isNaN(+cmd) || +cmd < 0 || +cmd > 999) {
            console.log('Введите корректное число в диапазоне от 0 до 999 или "q" для выхода: ')
        } else if (cmd > numberToGuess) {
            console.log(`Попытка №${tries}, загаданное число меньше`)
        } else if (cmd < numberToGuess) {
            console.log(`Попытка №${tries}, загаданное число больше`)
        } else if (cmd == numberToGuess) {
            console.log(`Вы угадали c ${tries} попытки! Это было число ${numberToGuess}`)
            r1.close()
            return
        }
        tries++
        guessNumber(tries++);
    })
}

guessNumber()