function sayHelloBye(name, num) {   
    return (num === 1)
    ? `Hello ${name[0].toUpperCase()}${name.substring(1)}`
    : `Bye ${name[0].toUpperCase()}${name.substring(1)}`
}

module.exports = sayHelloBye