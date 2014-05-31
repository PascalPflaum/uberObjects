if (typeof exports !== 'undefined') {
	var chai = require('chai');
	var sinonChai = require("sinon-chai");
	var sinon = require('sinon');

	chai.use(sinonChai);
	chai.config.includeStack = true;

	var uber = require('../')();
}

var expect = chai.expect;

describe('Object.merge', function() {
	
	it('copy if called with one argument', function() {
		
		var original = {
			'key1' : 'value1',
			'key2' : 'value2',
			'nested' : {
				n1 : 'a',
				n2 : 'a'
			}
		};
		var newObj = uber.merge(original);
		expect(newObj).to.be.not.equal(original);
		expect(newObj).to.be.deep.equal(original);
		expect(newObj.nested).to.be.equal(original.nested);
		
		
		
	});
	
	it('merging two simple objects', function() {

		var newObj = uber.merge({'key1' : 'value1'}, {'key2' : 'value2'});
		expect(newObj).to.be.deep.equal({
			'key1' : 'value1',
			'key2' : 'value2'
		});

	});

	it('merging two simple objects, then delete keys from original elements', function() {

		var obj1 = {'key1' : 'value1'};
		var obj2 = {'key2' : 'value2'};

		var newObj = uber.merge(obj1, obj2);

		delete obj1.key1;
		delete obj2.key2;

		expect(newObj).to.be.deep.equal({
			'key1' : 'value1',
			'key2' : 'value2'
		});

	});

});