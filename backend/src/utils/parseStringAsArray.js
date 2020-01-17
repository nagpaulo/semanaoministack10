module.exports = function parseStringAsArray(arrayAsStrings) {
    return arrayAsStrings.split(',').map(tech => tech.trim());
}