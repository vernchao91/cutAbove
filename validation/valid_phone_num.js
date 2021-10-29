const regex = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/

const validPhoneNum = num => {
    return regex.test(num)
}

module.exports = validPhoneNum