# uberObjects


Provides a bunch of useful methods related to objects. Can be assigned to a variable or extend a native object, like Object.

## How to use

### Browser

Include via script
```javascript
var uber = initUberObjects();
```

Either assign to variable
```javascript
var uber = initUberObjects();
```

Or mix in existing object
```javascript
initUberObjects(Object);
```


### Node.js

Include via npm
```javascript
npm install uber.objects
```

Either assign to variable
```javascript
var uber = require('../')();
```

Or mix in existing object
```javascript
require('../')(Object);
```

## Methods

* [uber.copy()](#copy)
* [uber.deepCopy()](#copy)
* [uber.every()](#every)
* [uber.extend()](#extend)
* [uber.filter()](#filter)
* [uber.find()](#find)
* [uber.findKey()](#findKey)
* [uber.forEach()](#forEach)
* [uber.getLength()](#getLength)
* [uber.has()](#has)
* [uber.isEmpty()](#isEmpty)
* [uber.keyOf()](#keyOf)
* [uber.map()](#map)
* [uber.merge()](#merge)
* [uber.reduce()](#reduce)
* [uber.some()](#some)
* [uber.values()](#values)
* [uber.subset()](#subset)

<a name="copy"/>
## uber.copy()

*Alias for [uber.merge()](#merge)*

The uber.copy() creates a shallow copy of an provided object.

### Syntax

```javascript
uber.copy(obj)
```

#### Parameters

**obj** The object

### Description

The uber.copy() creates a shallow copy of a object. It is an alias for the uber.merge() method, which provides this functionality, if called with one argument.

<a name="every"/>
## uber.every()

*Inspired by [Array.prototype.every()]*

The uber.every() method tests whether all elements in the object pass the test implemented by the provided function.

### Syntax

```javascript
uber.every(obj, callback[, thisArg])
```

#### Parameters

**obj** The object

**callback** Function to test for each element.
* **element** The current element being processed in the object.
* **key** The key of the current element being processed in the object.
* **object** The object uber.find was called upon.

**thisArg** Value to use as this when executing callback.

### Description

The uber.every() method executes the provided callback function once for each element present in the object until it finds one where callback returns a falsy value (a value that becomes false when converted to a Boolean). If such an element is found, the every method immediately returns false. Otherwise, if callback returned a true value for all elements, uber.every() will return true. callback is not invoked for keyes which have been deleted.

If a thisArg parameter is provided to every, it will be passed to callback when invoked, for use as its this value.  Otherwise, the value undefined will be passed for use as its this value.  The this value ultimately observable by callback is determined according to the usual rules for determining the this seen by a function.

uber.every() does not mutate the object on which it is called.

If existing elements of the object are changed, their value as passed to callback will be the value at the time every visits them; elements that are deleted are not visited.

uber.every() acts like the "for all" quantifier in mathematics. In particular, for an empty array, it returns true. (It is vacuously true that all elements of the empty set satisfy any given condition.)

<a name="extend"/>
## uber.extend()

*Inspired by [jQuery.extend()]*

Merge the contents of two or more objects together into the first object.

### Syntax

```javascript
uber.extend(obj1, obj2, ..., objN)
```

uber.extend() extends a object consisting in order by, for each argument, the elements of that argument.

uber.extend() does only alter the object provided as first argument. Elements of the original objects are copied into the new object as follows:

* Object references (and not the actual object): uber.extend() copies object references into the object provided as first argument. Both the original and extended object refer to the same object. That is, if a referenced object is modified, the changes are visible to both the extended and original objects.
* Strings and numbers (not String and Number objects): uber.extend() copies the values of strings and numbers into the object provided as first argument.

<a name="filter"/>
## uber.filter()

*Inspired by [Array.prototype.filter()]*

The uber.filter() method creates a new object with all elements that pass the test implemented by the provided function.

### Syntax

```javascript
uber.filter(obj, callback[, thisArg])
```

#### Parameters

**obj** The object

**callback** Function to test for each element.
* **element** The current element being processed in the object.
* **key** The key of the current element being processed in the object.
* **object** The object uber.filter was called upon.

**thisArg** Value to use as this when executing callback.

### Description

uber.filter calls a provided callback function once for each element in an object, and constructs a new object of all the values for which callback returns a true value. callback is not invoked for keyes which have been deleted. Array elements which do not pass the callback test are simply skipped, and are not included in the new object.

If existing elements of the object are changed, or deleted, their value as passed to callback will be the value at the time filter visits them; elements that are deleted are not visited.

If a thisArg parameter is provided to uber.filter, it will be passed to callback when invoked, for use as its this value. Otherwise, the value undefined will be passed for use as its this value. The this value ultimately observable by callback is determined according to the usual rules for determining the this seen by a function.

uber.filter does not mutate the object on which it is called.

<a name="find"/>
## uber.find()

*Inspired by [Array.prototype.find()]*

The uber.find() method returns a value in the object, if an element in the object satisfies the provided testing function. Otherwise undefined is returned.

See also the uber.findKey() method, which returns the key of a found element in the object instead of its value.

### Syntax

```javascript
uber.find(obj, callback[, thisArg])
```

#### Parameters

**obj** The object

**callback** Function to execute on each value in the object, taking three arguments:

* **element** The current element being processed in the object.
* **key** The key of the current element being processed in the object.
* **object** The object uber.find was called upon.

**thisArg** Object to use as this when executing callback.

### Description

The uber.find method executes the callback function once for each element present in the object until it finds one where callback returns a true value. If such an element is found, find immediately returns the value of that element. Otherwise, find returns undefined. callback is not invoked for keyes which have been deleted.

If an existing, unvisited element of the object is changed by callback, its value passed to the visiting callback will be the value at the time that find visits that element's key; elements that are deleted are not visited.

If a thisArg parameter is provided to find, it will be used as the this for each invocation of the callback. If it is not provided, then undefined is used.

find does not mutate the object on which it is called.

<a name="findKey"/>
## uber.findKey()

*Inspired by [Array.prototype.findIndex()]*

The uber.findKey() method returns an key in the object, if an element in the object satisfies the provided testing function. Otherwise -1 is returned.

See also the uber.find() method, which returns the value of a found element in the object instead of its key.

### Syntax

```javascript
uber.findKey(obj, callback[, thisArg])
```

#### Parameters

**obj** The object

**callback** Function to execute on each value in the object, taking three arguments:

* **element** The current element being processed in the object.
* **key** The key of the current element being processed in the object.
* **object** The object find was called upon.

**thisArg** Object to use as this when executing callback.

### Description

The uber.findKey() method executes the callback function once for each element present in the object until it finds one where callback returns a true value. If such an element is found, find immediately returns the value of that element. Otherwise, find returns undefined. callback is not invoked for keyes which have been deleted.

If an existing, unvisited element of the object is changed by callback, its value passed to the visiting callback will be the value at the time that find visits that element's key; elements that are deleted are not visited.

If a thisArg parameter is provided to find, it will be used as the this for each invocation of the callback. If it is not provided, then undefined is used.

uber.find does not mutate the object on which it is called.

<a name="forEach"/>
## uber.forEach()

*Inspired by [Array.prototype.forEach()]*

The uber.forEach() method executes a provided function once per object element.

### Syntax

```javascript
uber.forEach(obj, callback[, thisArg])
```

#### Parameters

**obj** The object

**callback** Function to execute for each element.

* **element** The current element being processed in the object.
* **key** The key of the current element being processed in the object.
* **object** The object uber.map was called upon.

**thisArg** Value to use as this when executing callback.

### Description

uber.forEach executes the provided callback once for each element of the object with an assigned value. It is not invoked for keyes which have been deleted. However, it is executed for values which are present but have the value undefined.

Elements which are appended to the object after the call to forEach begins will not be visited by callback. If existing elements of the object are changed, or deleted, their value as passed to callback will be the value at the time forEach visits them; elements that are deleted are not visited.

If a thisArg parameter is provided to forEach, it will be passed to callback when invoked, for use as its this value. Otherwise, the value undefined will be passed for use as its this value. The this value ultimately observable by callback is determined according to the usual rules for determining the this seen by a function.

### Note
There is no way to stop or break a forEach loop. The solution is to use uber.every() or uber.some(). See example below.

uber.forEach() executes the callback function once for each object element; unlike every and some it does not return a value.

<a name="getLength"/>
## uber.getLength()

*Inspired by [].length*

The uber.getLength() returns the number of properties in an object

```javascript
uber.getLength(obj)
```

#### Parameters

**obj** the object

### Description

uber.getLength() returns the number of properties in an object, like the array property "length"

<a name="has"/>
## uber.has()

*Inspired by [_.has()]*

The uber.has() behaves like the vanilla uber.prototype.hasOwnProperty().

```javascript
uber.has(obj, key1, key2, ..., keyN)
```

#### Parameters

**obj** the object

**keyN** property keys

### Description

The uber.has() behaves like the vanilla uber.prototype.hasOwnProperty(), but is failsafe for objects with a property named hasOwnProperty and can consume up to n keys. If one of the provided keys can not be found, uber.has() returns false. uber.has() returns true, if all keys were found in the provided object.

<a name="isEmpty"/>
## uber.isEmpty()

*Inspired by [_.isEmpty()]*

The uber.isEmpty() checks that a given object has no properties

```javascript
uber.isEmpty(obj [, includingPrototype])
```

#### Parameters

**obj** the object
**includingPrototype** a flag for including the prototype in the check

### Description

uber.isEmpty() checks only the properties of the object itself (like [_.isEmpty()]). If true is parsed as second parameter, isEmpty will also check the prototype of the object (like [jQuery.isEmptyObject()])


<a name="keyOf"/>
## uber.keyOf()

*Inspired by [Array.prototype.indexOf()]*

The uber.keyOf() returns the number of properties in an object

```javascript
uber.keyOf(obj, searchElement)
```

#### Parameters

**obj** the object

**searchElement** Element to locate in the array.

### Description

uber.keyOf() compares searchElement to elements of the Object using strict equality (the same method used by the ===, or triple-equals, operator). If the element can't be found uber.keyOf() returns undefined.

<a name="map"/>
## uber.map()

*Inspired by [Array.prototype.map()]*

The uber.map() method creates a new object with the results of calling a provided function on every element in this object.

### Syntax

```javascript
uber.map(obj, callback[, thisArg])
```

#### Parameters

**obj** The object

**callback** Function to execute on each value in the object, taking three arguments:

* **currentValue** The current element being processed in the object.
* **** The  of the current element being processed in the object.
* **object** The object uber.map was called upon.

**thisArg** Object to use as this when executing callback.

### Description

uber.map() calls a provided callback function once for each element in an object, in order, and constructs a new object from the results. If existing elements of the object are changed, or deleted, their value as passed to callback will be the value at the time map visits them; elements that are deleted are not visited.

If a thisArg parameter is provided to map, it will be passed to callback when invoked, for use as its this value. Otherwise, the value undefined will be passed for use as its this value. The this value ultimately observable by callback is determined according to the usual rules for determining the this seen by a function.

uber.map() does not mutate the object on which it is called (although callback, if invoked, may do so).

<a name="merge"/>
## uber.merge()

*Inspired by [Array.prototype.concat()]*

The uber.merge() method returns a new object comprised of several joined objects.

```javascript
uber.merge(obj1, obj2, ..., objN)
```

#### Parameters

**objN** objects to concatenate to the resulting object.

### Description

uber.merge() creates a new object consisting in order by, for each argument, the elements of that argument.

uber.merge() does not alter any of the object provided as arguments but instead returns a shallow copy that contains copies of the same elements combined from the original objects. Elements of the original objects are copied into the new object as follows:

* Object references (and not the actual object): uber.merge() copies object references into the new object. Both the original and new object refer to the same object. That is, if a referenced object is modified, the changes are visible to both the new and original objects.
* Strings and numbers (not String and Number objects): uber.merge() copies the values of strings and numbers into the new object.

Any operation on the new object will have no effect on the original objects, and vice versa.

<a name="reduce"/>
## uber.reduce()

*Inspired by [Array.prototype.reduce()]*

The uber.reduce() method applies a function against an accumulator and each value of the array (from left-to-right) has to reduce it to a single value.

### Syntax

```javascript
uber.reduce(obj, callback[, thisArg])
```

#### Parameters

**obj** The object

**callback** Function to execute on each value in the object, taking four arguments:

* **previousValue** The value previously returned in the last invocation of the callback, or initialValue, if supplied. (See below.)
* **currentValue** The current element being processed in the object.
* **** The  of the current element being processed in the object.
* **object** The object uber.reduce was called upon.

**initialValue** Object to use as the first argument to the first call of the callback.

### Description

uber.reduce() executes the callback function once for each element present in the object.

The first time the callback is called, previousValue and currentValue can be one of two values. If initialValue is provided in the call to reduce, then previousValue will be equal to initialValue and currentValue will be equal to the first value in the array. If no initialValue was provided, then previousValue will be equal to the first value in the object and currentValue will be equal to the second.

If the object has only one element and no initialValue was provided, or if initialValue is provided but the object is empty, the solo value would be returned without calling callback.

If the object is empty and no initialValue was provided, TypeError would be thrown.

<a name="some"/>
## uber.some()

*Inspired by [Array.prototype.some()]*

The uber.some() method tests whether some element in the object passes the test implemented by the provided function.

### Syntax

```javascript
uber.some(obj, callback[, thisArg])
```

#### Parameters

**obj** The object

**callback** Function to test for each element.

* **currentValue** The current element being processed in the object.
* **** The  of the current element being processed in the object.
* **object** The object uber.reduce was called upon.

**thisArg** Object to use as this when executing callback.

### Description

uber.some executes the callback function once for each element present in the object until it finds one where callback returns a true value. If such an element is found, some immediately returns true. Otherwise, some returns false. callback is not invoked for es which have been deleted. If an existing, unvisited element of the object is changed by callback, its value passed to the visiting callback will be the value at the time that some visits that element's ; elements that are deleted are not visited.

If a thisArg parameter is provided to some, it will be passed to callback when invoked, for use as its this value.  Otherwise, the value undefined will be passed for use as its this value.  The this value ultimately observable by callback is determined according to the usual rules for determining the this seen by a function.

some does not mutate the array on which it is called.

<a name="values"/>
## uber.values()

*Inspired by [mootools.Object.values()]*

The uber.values() returns an array containing all the values, in the same order as the keys returned by uber.keys().

### Syntax

```javascript
uber.values(obj);
```

#### Parameters

**obj** The object

<a name="subset"/>
## uber.subset()

*Inspired by [mootools.Object.subset()]*

The uber.values() returns an array containing all the values, in the same order as the keys returned by uber.keys().

### Syntax

```javascript
uber.subset(obj, keys);
```

#### Parameters

**obj** The object

**keys** The keys that should be part of the new subset

License
----

MIT

[Array.prototype.concat()]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
[Array.prototype.every()]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
[Array.prototype.filter()]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
[Array.prototype.find()]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
[Array.prototype.findIndex()]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
[Array.prototype.forEach()]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
[Array.prototype.indexOf()]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
[Array.prototype.map()]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[Array.prototype.reduce()]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
[Array.prototype.some()]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

[jQuery.extend()]:http://api.jquery.com/jquery.extend
[jQuery.isEmptyObject()]:http://api.jquery.com/jquery.isemptyobject

[mootools.Object.values()]:http://mootools.net/docs/core/Types/Object#Object:Object-values
[mootools.Object.subset()]:http://mootools.net/docs/core/Types/Object#Object:Object-subset

[_.has()]:http://underscorejs.org/#has
[_.isEmpty()]:http://underscorejs.org/#isEmpty