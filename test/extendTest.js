if (typeof exports !== 'undefined') {
	var chai = require('chai');
	var sinonChai = require("sinon-chai");
	var sinon = require('sinon');

	chai.use(sinonChai);
	chai.config.includeStack = true;

	require('../');
}

var expect = chai.expect;

describe('Object.extend', function() {

	it('extending an empty object with some properties, from two different objects', function() {

		var newObj = Object.extend({}, {'key1' : 'value1'}, {'key2' : 'value2'});
		expect(newObj).to.be.deep.equal({
			'key1' : 'value1',
			'key2' : 'value2'
		});

	});

	it('propertie overwritten from left to right', function() {

		var obj1 = {'key1' : 'value1'};
		var obj2 = {'key1' : 'value2'};

		var newObj = Object.merge(obj1, obj2);


		expect(newObj).to.be.deep.equal({
			'key1' : 'value2'
		});

	});

});