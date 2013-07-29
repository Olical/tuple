/**
 * Tuple v0.0.0 - https://github.com/Wolfy87/tuple
 * Oliver Caldwell - http://oli.me.uk
 * MIT licence
 */

(function () {
	/*global module*/
	'use strict';

	/**
	 */
	function Tuple() {
	}

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
