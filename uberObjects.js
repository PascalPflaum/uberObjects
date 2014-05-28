(function() {

	var hasOwnProperty = Object.prototype.hasOwnProperty;


	/**
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
	 * @param {object} obj
	 * @param {function} everyFunc
	 * @param {object} thisArg (optional)
	 * @returns {undefined}
	 */
	Object.every = Object.every || function(obj, everyFunc, thisArg) {

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


	/**
	 * Inspired by jquery extend, but without the deep copy stuff.
	 * For details see: http://api.jquery.com/jQuery.extend/
	 * @param {object} obj the object that will be extended
	 */
	Object.extend = Object.extend || function(obj) {

		for (var i = 1, length = arguments.length; i < length; i++) {
			for (var key in arguments[i]) {
				if (hasOwnProperty.call(arguments[i], key)) {
					obj[key] = arguments[i][key];
				}
			}
		}

		return obj;
	};


	/**
	 * a filter method for objects
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
	 * @param {object} obj
	 * @param {function} filterFunc a function called with each value of the object
	 * @param {object} thisArg (optional)
	 * @return {object} the filtered object
	 */
	Object.filter = Object.filter || function(obj, filterFunc, thisArg) {

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


	/**
	 * find the first element fitting the filter
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
	 * @param {object} obj
	 * @param {function} findFunc a function called with each value of the object
	 * @param {object} thisArg (optional)
	 * @return {object} the first found item fullfilling the filter
	 */
	Object.find = Object.find || function(obj, findFunc, thisArg) {

		//using the .findIndex method saves some lines of code and duplicity
		var idx = Object.findKey.apply(this, arguments);
		if (idx !== undefined) {
			return obj[idx];
		}
	};


	/**
	 * find the first element fitting the filter
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
	 * @param {object} obj
	 * @param {function} findFunc a function called with each value of the object
	 * @param {object} thisArg (optional)
	 * @return {string} the key of the found element
	 */
	Object.findKey = Object.findKey || function(obj, findFunc, thisArg) {

		if (typeof findFunc !== 'function') {
			throw new TypeError();
		}

		for (var key in obj) {
			if (hasOwnProperty.call(obj, key) && findFunc.call(thisArg, obj[key], key, obj)) {
				return key;
			}
		}
	};


	/**
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
	 * @param {object} obj
	 * @param {function} forEachFunc
	 * @returns {undefined}
	 */
	Object.forEach = Object.forEach || function(obj, forEachFunc) {

		if (typeof forEachFunc !== 'function') {
			throw new TypeError();
		}

		for (var key in obj) {
			if (hasOwnProperty.call(obj, key)) {
				forEachFunc(obj[key], key);
			}
		}
	};


	/**
	 * Otherwise then on an array, .length is a function here and not a property
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
	 * @param {object} obj
	 * @returns {number} the number of keys in the obj
	 */
	Object.getLength = Object.getLength || function(obj) {
		return Object.keys(obj).length;
	};


	/**
	 * checks one or more properties are fullfilling the hasOwnProperty
	 * @param {object} obj
	 * @returns {boolean}
	 */
	Object.has = Object.has || function(obj) {

		for (var i = 1, length = arguments.length; i < length; i++) {
			if (!hasOwnProperty.call(obj, arguments[i])) {
				return false;
			}
		}

		return true;
	};


	/**
	 * checks a given object has no property and can be considered as empty
	 * @param {object} obj
	 * @param {boolean} checkPrototype
	 * @returns {Boolean}
	 */
	Object.isEmpty = Object.isEmpty || function(obj, checkPrototype) {
		for (var key in obj) {
			if (checkPrototype || hasOwnProperty.call(obj, key)) {
				return false;
			}
		}
		return true;
	};


	/**
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
	 * @param {object} obj
	 * @param {mixed} needle
	 * @returns {string/undefined} will return a string, if element found, otherwise undefined
	 */
	Object.keyOf = Object.keyOf || function(obj, needle) {

		for (var key in obj) {
			if (hasOwnProperty.call(obj, key)) {
				if (needle === obj[key]) {
					return key;
				}
			}
		}
	};


	/**
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
	 * @param {object} obj
	 * @param {function} mapFunc
	 * @param {object} thisArg (optional)
	 * @returns {object} an object with the same keys then the original obj, but with the return value of the map function
	 */
	Object.map = Object.map || function(obj, mapFunc, thisArg) {

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


	/**
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
	 * @returns {object}
	 */
	Object.merge = Object.merge || function() {
		Array.prototype.unshift.call(arguments, {});
		return Object.extend.apply(this, arguments);
	};


	/**
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
	 * @param {object} obj
	 * @param {function} reduceFunc
	 * @param {mixed} currentValue (optional)
	 * @returns {object} an object with the same keys then the original obj, but with the return value of the map function
	 */
	Object.reduce = Object.reduce || function(obj, reduceFunc, currentValue) {

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


	/**
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
	 * @param {object} obj
	 * @param {function} someFunc
	 * @param {object} thisArg (optional)
	 * @returns {object} an object with the same keys then the original obj, but with the return value of the map function
	 */
	Object.some = Object.some || function(obj, someFunc, thisArg) {

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


	/**
	 * Object.values() returns an array containing all the values, in the same order as the keys returned by Object.keys().
	 * @param {type} obj
	 * @returns {array}
	 */
	Object.values = Object.values || function(obj) {

		var keys = Object.keys(obj);
		var values = [];

		for (var i = 0, length = keys.length; i < length; i++) {
			values.push(obj[keys[i]]);
		}

		return values;
	};


	/**
	 * Object.subset() returns a subset based on the given object and the gives given in an additional array
	 * @param {type} obj
	 * @param {type} keys
	 * @returns {object}
	 */
	Object.subset = Object.subset || function(obj, keys) {

		var values = {};

		for (var i = 0, length = keys.length; i < length; i++) {
			var key = keys[i];
			if (hasOwnProperty.call(obj, key)) {
				values[key] = obj[key];
			}
		}

		return values;
	};
})();