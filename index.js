const Random = require('random-js')

const stringLength = 16

const uniqueId = function() {
    const randomEngine = Random.engines.mt19937().autoSeed();
    const randomDistrib = Random.string();

    return randomDistrib(randomEngine, stringLength)
}

module.exports = uniqueId
