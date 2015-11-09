var assert = require('assert')

var uniqueId = require('./index.js')

describe('uniqider', function() {
    it('should return unique id 44 characters long', function () {
        assert.equal(44, uniqueId().length)
    });
    it('should return unique ids when invoked consecutively', function () {
        var id1 = uniqueId()
        var id2 = uniqueId()
        assert.notEqual(id1, id2)
    });
});
