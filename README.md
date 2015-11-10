# uniqider: Generate unique identifiers

[![Build Status](https://travis-ci.org/borisceranic/uniqider.svg?branch=master)](https://travis-ci.org/borisceranic/uniqider)

This is a very simple module that generates unique identifiers. It is a thin
wrapper around [Random.js](https://www.npmjs.com/package/random-js).

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
```

## API

### uniqueId()

Returns a random id string, 16 bytes long, e.g.: `UQ80VjpeSIb9ZMZW`

## License

[BSD 3-Clause License](https://tldrlegal.com/l/bsd3)

Copyright (c) 2015, [Boris Ćeranić](https://sosko.in.rs)
