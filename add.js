function doubleLetter(str) {
    let newstr = ''
    for (let index = 0; index < str.length; index++) {
        const symbol = str[index];
        newstr = newstr + symbol + symbol

    }
    return newstr
}

console.log(doubleLetter("wolf"))











function padString(str, length, symbol, toLeft) {

    if (str.length >= length) {
        return str;
    }

    const paddingLenght = length - str.length;

    const padding = symbol.repeat(paddingLenght);

    if (toLeft) {
        return padding + str
    }
    else {
        return str + padding
    }


}

console.log(padString('Ivan', 6, '*'))
console.log(padString('Ivan', 6, '*', true))
console.log(padString('Ivan', 4, '*'))
console.log(padString('Ivan', 8, '-'))



function camelCase(str, separator = ' ') {
    let words = str.split(separator)
    let camelCaseStr = words[0].toLowerCase()
    for (let index = 1; index < words.length; index++) {
        let word = words[index]
        camelCaseStr += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()

    }
    return camelCaseStr
}



console.log(camelCase("Hello World"));
