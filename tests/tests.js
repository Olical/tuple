(function () {
	/*global mocha,chai,Tuple*/
	'use strict';

	mocha.setup('tdd');
	var assert = chai.assert;

	suite('Tuple', function () {
		test('the class is defined within the global scope', function () {
			assert.isFunction(Tuple);
		});

		test('can create an instance of the class without arguments', function () {
			var t = new Tuple();
			assert.instanceOf(t, Tuple);
		});

		test('can create an instance of the class with arguments', function () {
			var t = new Tuple('foo', 'bar', 'baz');
			assert.instanceOf(t, Tuple);
		});
	});

	suite('Tuple#unpack()', function () {
		test('can unpack an empty tuple', function () {
			var t = new Tuple();
			var args;
			t.unpack(function () {
				args = arguments;
			});
			assert.deepEqual(args, []);
		});

		test('can unpack one value', function () {
			var value = 'foo';
			var t = new Tuple(value);
			var args;
			t.unpack(function () {
				args = arguments;
			});
			assert.deepEqual(args, [value]);
		});

		test('can unpack multiple values', function () {
			var first = 'foo';
			var second = 'bar';
			var t = new Tuple(first, second);
			var args;
			t.unpack(function () {
				args = arguments;
			});
			assert.deepEqual(args, [first, second]);
		});

		test('returns the returned value from the unpacker', function () {
			var value = 'foo';
			var t = new Tuple();
			var result = t.unpack(function () {
				return value;
			});
			assert.strictEqual(result, value);
		});

		test('called with the scope of the tuple', function () {
			var t = new Tuple();
			var scope;
			t.unpack(function () {
				scope = this;
			});
			assert.strictEqual(scope, t);
		});
	});

	suite('Tuple#toString()', function () {
		test('returns a string of an empty tuple', function () {
			var t = new Tuple();
			assert.strictEqual(t.toString(), '()');
		});

		test('returns a string of single value tuple', function () {
			var t = new Tuple('foo');
			assert.strictEqual(t.toString(), '(foo)');
		});

		test('returns a string of multiple value tuple', function () {
			var t = new Tuple('foo', 'bar', 123);
			assert.strictEqual(t.toString(), '(foo, bar, 123)');
		});
	});

	suite('Tuple#length', function () {
		test('is equal to 0 when there are no elements', function () {
			var t = new Tuple();
			assert.lengthOf(t, 0);
		});

		test('is equal to 1 when there is one element', function () {
			var t = new Tuple('foo');
			assert.lengthOf(t, 1);
		});

		test('is equal to 3 when there are two elements', function () {
			var t = new Tuple('foo', 'bar', 'baz');
			assert.lengthOf(t, 3);
		});
	});

	mocha.run();
}());
