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

	suite('Tuple#unpack', function () {
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
	});

	mocha.run();
}());
