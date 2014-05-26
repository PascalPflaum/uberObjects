if (typeof exports !== 'undefined') {
	var chai = require('chai');
	var sinonChai = require("sinon-chai");
	var sinon = require('sinon');

	chai.use(sinonChai);
	chai.config.includeStack = true;

	require('../');
}

var expect = chai.expect;

describe('Object.merge', function() {

	it('merging two simple objects', function() {

		var newObj = Object.merge({'key1' : 'value1'}, {'key2' : 'value2'});
		expect(newObj).to.be.deep.equal({
			'key1' : 'value1',
			'key2' : 'value2'
		});

	});

	it('merging two simple objects, then delete keys from original elements', function() {

		var obj1 = {'key1' : 'value1'};
		var obj2 = {'key2' : 'value2'};

		var newObj = Object.merge(obj1, obj2);

		delete obj1.key1;
		delete obj2.key2;

		expect(newObj).to.be.deep.equal({
			'key1' : 'value1',
			'key2' : 'value2'
		});

	});

});