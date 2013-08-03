/**
 * Tuple v1.0.0 - https://github.com/Wolfy87/tuple
 * Oliver Caldwell - http://oli.me.uk
 * MIT licence
 */

(function () {
	/*global module*/
	'use strict';

	/**
	 * Simple tuple implementation. This constructor will create new instances
	 * and store immutable values within them.
	 *
	 * @class Tuple A tiny tuple implementation.
	 * @param {...*} List of values to store within the tuple.
	 */
	function Tuple() {
		/**
		 * Contains the number of elements held within the tuple.
		 *
		 * @type {Number} The amount of elements within the tuple.
		 */
		var i = this.length = arguments.length;

		while (i--) {
			this[i] = arguments[i];
		}
	}

	/**
	 * Passes the values as arguments, in the same order they were set, to the
	 * provided unpacker function. It will return the value that the unpacker
	 * returns.
	 *
	 * @param {Function} unpacker Is passed all of the tuples values in order, it's return value will be returned.
	 * @return {*} The value that the unpacker function returns.
	 */
	Tuple.prototype.unpack = function unpack(unpacker) {
		return unpacker.apply(this, this);
	};

	/**
	 * Flattens the tuples values into a string.
	 *
	 * @return {String} A textual representation of the tuples contents.
	 */
	Tuple.prototype.toString = function toString() {
		var values = this.toArray().join(', ');
		return ['(', values, ')'].join('');
	};

	/**
	 * Coerces the tuple into an array. This runs through
	 * `Array.prototype.slice.call` because tuples are array-like objects.
	 *
	 * @return {*[]} All of the tuples values contained within an array.
	 */
	Tuple.prototype.toArray = function toArray() {
		return Array.prototype.slice.call(this);
	};

	// Expose the class via AMD, CommonJS or the global object.
	if (typeof define === 'function' && define.amd) {
		define(function () {
			return Tuple;
		});
	}
	else if (typeof module === 'object' && module.exports) {
		module.exports = Tuple;
	}
	else {
		this.Tuple = Tuple;
	}
}.call(this));
