const uniqueId = function(salt) {
    const algorithm = 'sha256'
    const hasher = crypto.createHash(algorithm)

    const encoding = 'base64'

    const sourceOfTime = Date.now
    const sourceOfRand = Math.random

    if (typeof salt === 'undefined' || salt.toString().length < 1)
    {
        salt = sourceOfRand().toString()
    }

    return hasher
        .update(sourceOfTime().toString() + salt)
        .digest(encoding)
}

module.exports = uniqueId