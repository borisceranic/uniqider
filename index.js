var Random = require('random-js')

var stringLength = 16

var uniqueId = function() {
    var randomEngine = Random.engines.mt19937().autoSeed();
    var randomDistrib = Random.string();

    return randomDistrib(randomEngine, stringLength)
}

module.exports = uniqueId
