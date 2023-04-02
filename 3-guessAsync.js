const r1 = require('readline').createInterface(process.stdin, process.stdout)
let numberToGuess = Math.floor(Math.random() * 1000);
// console.log(numberToGuess)

function question(quest) {
    return new Promise((resolve, reject) => {
        r1.question(quest, (cmd) => {
            resolve(cmd);
        })
    })
}

async function guessNumber(tries = 1) {
    while (true) {
        const cmd = await question('Введите число в диапазоне от 0 до 999 или "q" для выхода: ');
        if (cmd === 'q') {
            r1.close();
            console.log('До новых встреч!')
            break
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
            break
        }
        tries++
    }
}

guessNumber()