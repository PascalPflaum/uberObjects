(function() {

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	if (!Object.every) {

		/**
		 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
		 * @param {object} obj
		 * @param {function} everyFunc
		 * @param {object} thisArg (optional)
		 * @returns {undefined}
		 */
		Object.every = function(obj, everyFunc, thisArg) {

			if (typeof everyFunc !== 'function') {
				throw new TypeError();
			}

			for (var key in obj) {
				if (hasOwnProperty.call(obj, key) && !everyFunc.call(thisArg, obj[key], key, obj)) {
					return false;
				}
			}

			return true;
		};

	}


	if (!Object.extend) {

		/**
		 * Inspired by jquery extend, but without the deep copy stuff.
		 * For details see: http://api.jquery.com/jQuery.extend/
		 * @param {object} obj the object that will be extended
		 */
		Object.extend = function(obj) {

			for (var i = 1, length = arguments.length; i < length; i++) {
				for (var key in arguments[i]) {
					if (hasOwnProperty.call(arguments[i], key)) {
						obj[key] = arguments[i][key];
					}
				}
			}

			return obj;
		};
	}


	if (!Object.filter) {

		/**
		 * a filter method for objects
		 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
		 * @param {object} obj
		 * @param {function} filterFunc a function called with each value of the object
		 * @param {object} thisArg (optional)
		 * @return {object} the filtered object
		 */
		Object.filter = function(obj, filterFunc, thisArg) {

			if (typeof filterFunc !== 'function') {
				throw new TypeError();
			}

			var result = {};

			for (var key in obj) {
				if (hasOwnProperty.call(obj, key) && filterFunc.call(thisArg, obj[key], key, obj)) {
					result[key] = obj[key];
				}
			}

			return result;
		};
	}


	if (!Object.find) {

		/**
		 * find the first element fitting the filter
		 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
		 * @param {object} obj
		 * @param {function} findFunc a function called with each value of the object
		 * @param {object} thisArg (optional)
		 * @return {object} the first found item fullfilling the filter
		 */
		Object.find = function(obj, findFunc, thisArg) {

			//using the .findIndex method saves some lines of code and duplicity
			var idx = Object.findKey.apply(this, arguments);
			if (idx !== undefined) {
				return obj[idx];
			}
		};
	}


	if (!Object.findKey) {

		/**
		 * find the first element fitting the filter
		 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
		 * @param {object} obj
		 * @param {function} findFunc a function called with each value of the object
		 * @param {object} thisArg (optional)
		 * @return {string} the key of the found element
		 */
		Object.findKey = function(obj, findFunc, thisArg) {

			if (typeof findFunc !== 'function') {
				throw new TypeError();
			}

			for (var key in obj) {
				if (hasOwnProperty.call(obj, key) && findFunc.call(thisArg, obj[key], key, obj)) {
					return key;
				}
			}
		};
	}


	if (!Object.forEach) {

		/**
		 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
		 * @param {object} obj
		 * @param {function} forEachFunc
		 * @returns {undefined}
		 */
		Object.forEach = function(obj, forEachFunc) {

			if (typeof forEachFunc !== 'function') {
				throw new TypeError();
			}

			for (var key in obj) {
				if (hasOwnProperty.call(obj, key)) {
					forEachFunc(obj[key], key);
				}
			}
		};
	}


	if (!Object.getLength) {

		/**
		 * Otherwise then on an array, .length is a function here and not a property
		 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
		 * @param {object} obj
		 * @returns {number} the number of keys in the obj
		 */
		Object.getLength = function(obj) {
			return Object.keys(obj).length;
		};
	}


	if (!Object.keyOf) {

		/**
		 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
		 * @param {object} haystack
		 * @param {mixed} needle
		 * @returns {string/undefined} will return a string, if element found, otherwise undefined
		 */
		Object.keyOf = function(haystack, needle) {

			for (var key in haystack) {
				if (haystack.hasOwnProperty(key)) {
					if (needle === haystack[key]) {
						return key;
					}
				}
			}
		};
	}


	if (!Object.map) {

		/**
		 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
		 * @param {object} obj
		 * @param {function} mapFunc
		 * @param {object} thisArg (optional)
		 * @returns {object} an object with the same keys then the original obj, but with the return value of the map function
		 */
		Object.map = function(obj, mapFunc, thisArg) {

			if (typeof mapFunc !== 'function') {
				throw new TypeError();
			}

			var result = {};

			for (var key in obj) {
				if (hasOwnProperty.call(obj, key)) {
					result[key] = mapFunc.call(thisArg, obj[key], key, obj);
				}
			}

			return result;
		};
	}


	if (!Object.merge) {

		/**
		 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
		 * @returns {object}
		 */
		Object.merge = function() {
			Array.prototype.unshift.call(arguments, {});
			return Object.extend.apply(this, arguments);
		};

	}


	if (!Object.reduce) {

		/**
		 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
		 * @param {object} obj
		 * @param {function} reduceFunc
		 * @param {mixed} currentValue (optional)
		 * @returns {object} an object with the same keys then the original obj, but with the return value of the map function
		 */
		Object.reduce = function(obj, reduceFunc, currentValue) {

			if (obj === null || obj === undefined) {
				throw new TypeError('Object.reduce called on null or undefined');
			}

			if (typeof reduceFunc !== 'function') {
				throw new TypeError(reduceFunc + ' is not a function');
			}

			var noInitialValue = arguments.length < 3;

			for (var key in obj) {
				if (hasOwnProperty.call(obj, key)) {

					var atLeastOneIteratio = true;

					if (currentValue === undefined && noInitialValue) {
						currentValue = obj[key];
						continue;
					}

					currentValue = reduceFunc(currentValue, obj[key], key, obj);
				}
			}

			if (noInitialValue && !atLeastOneIteratio) {
				throw new TypeError('neither initial value nor object properties to iterate');
			}

			return currentValue;
		};
	}


	if (!Object.some) {

		/**
		 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
		 * @param {object} obj
		 * @param {function} someFunc
		 * @param {object} thisArg (optional)
		 * @returns {object} an object with the same keys then the original obj, but with the return value of the map function
		 */
		Object.some = function(obj, someFunc, thisArg) {

			if (typeof someFunc !== 'function') {
				throw new TypeError();
			}

			for (var key in obj) {
				if (hasOwnProperty.call(obj, key)) {
					if (someFunc.call(thisArg, obj[key], key, obj)) {
						return true;
					}
				}
			}

			return false;
		};
	}


	if (!Object.values) {

		/**
		 * Object.values() returns an array containing all the values, in the same order as the keys returned by Object.keys().
		 * @param {type} obj
		 * @returns {array}
		 */
		Object.values = function(obj) {

			var keys = Object.keys(obj);
			var values = [];

			for (var i = 0, length = keys.length; i < length; i++) {
				values.push(obj[keys[i]]);
			}

			return values;
		};
	}

	if (!Object.subset) {

		/**
		 * Object.subset() returns a subset based on the given object and the gives given in an additional array
		 * @param {type} obj
		 * @param {type} keys
		 * @returns {object}
		 */
		Object.subset = function(obj, keys) {

			var values = {};

			for (var i = 0, length = keys.length; i < length; i++) {
				var key = keys[i];
				if (hasOwnProperty.call(obj, key)) {
					values[key] = obj[key];
				}
			}

			return values;
		};
	}
})();