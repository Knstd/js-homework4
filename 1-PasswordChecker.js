function getPasswordChecker(password) {
    return function passCheck(passwordToCheck) {
        return password === passwordToCheck
    }
}

const checkPwd = getPasswordChecker('1234567')
console.log(checkPwd('1234567'))
console.log(checkPwd('123456'))
console.log(checkPwd('qwe'))