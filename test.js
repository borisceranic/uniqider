var assert = require('assert')

var uniqueId = require('./index.js')

describe('uniqider', function() {
    it('should return string at least 10 characters long', function () {
        assert.ok(uniqueId().length >= 10)
    });
    it('should return unique ids when invoked consecutively', function () {
        var id1 = uniqueId()
        var id2 = uniqueId()
        assert.notEqual(id1, id2)
    });
});
