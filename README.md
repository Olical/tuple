# Tuple

A tiny JavaScript tuple implementation.

## Example

Creating a `Tuple` instance containing some values.

```javascript
// No values.
var empty = new Tuple();

// A single value.
var one = new Tuple('hello');

// Loads of values!
var loads = new Tuple('foo', 'bar', 'baz');
```

Extracting those values.

```javascript
var point = new Tuple(50, 75);

// You can unpack them into any names you want.
// They're just function arguments!
point.unpack(function (x, y) {
	doStuff(x * y);
});
```

Getting a value *from* `unpack`.

```javascript
var guy = new Tuple('Oliver', 'Caldwell');

// Unpack returns the value that was returned by the function you passed to it.
var name = guy.unpack(function (firstName, lastName) {
	return [
		firstName,
		lastName
	].join(' ');
});

name; // "Oliver Caldwell"
```

You can make this unpacking cleaner by passing predefined functions.

```javascript
function add(a, b) {
	return a + b;
}

var numbers = new Tuple(10, 20);
var result = numbers.unpack(add);

result; // 30
```

## API

### Tuple

Simple tuple implementation. This constructor will create new instances and store immutable values within them.

 * *Class* Tuple A tiny tuple implementation.
 * *Param* {...\*} List of values to store within the tuple.

### Tuple#unpack

Passes the values as arguments, in the same order they were set, to the provided unpacker function. It will return the value that the unpacker returns.

 * *Param* {Function} **unpacker** Is passed all of the tuples values in order, it's return value will be returned.
 * *Return* {\*} The value that the unpacker function returns.

## Tests

You can execute the tests by running the local Python HTTP server (`./tools/server.sh`) and navigating to http://localhost:8000/tests/.

## License (MIT)

Copyright (c) 2013 Oliver Caldwell

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.