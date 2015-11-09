# uniqider: Generate unique identifiers

[![Build Status](https://travis-ci.org/borisceranic/uniqider.svg?branch=master)](https://travis-ci.org/borisceranic/uniqider)

This is a very simple module that generates unique identifiers.

It uses node.js native Crypto module. You can use it in the browser
via Browserify.

## Usage

Install via npm or bower

```bash
npm install uniqider
```

In your code:

```js
var uniqueId = require('uniqider');

// Retrieve unique id
var id = uniqueId();

// Optionally, you can pass a salt string to use
var id = uniqueId('salt');
```

## API

### uniqueId(salt)

Returns a 44-byte string, e.g.: `gRNOyeOgPuKoZl9Cp2S9UNOpZxae07iTOFeniGSG1jU=`

Argument `salt` is optional.

## License

[BSD 3-Clause License](https://tldrlegal.com/l/bsd3)

Copyright (c) 2015, [Boris Ćeranić](https://sosko.in.rs)
