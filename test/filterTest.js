if (typeof exports !== 'undefined') {
	var chai = require('chai');
	var sinonChai = require("sinon-chai");
	var sinon = require('sinon');

	chai.use(sinonChai);
	chai.config.includeStack = true;

	var uber = require('../')();
}

var expect = chai.expect;

describe('Object.filter', function() {

	it('{}, no iteration', function() {

		var iterationSpy = sinon.spy();
		uber.filter({}, iterationSpy);
		expect(iterationSpy).have.not.been.called;

	});

	it('filtering all true', function() {

		var data = {
			'keyA' : true,
			'keyB' : true,
			'keyC' : false,
			'keyD' : true,
			'keyE' : false
		};

		var iterationSpy = sinon.spy(function(item, key, obj) {
			expect(obj).to.be.equal(data);
			expect(data).to.contain.keys(key);
			return !!item;
		});
		
		var filtered = uber.filter(data, iterationSpy);
		expect(filtered).to.be.deep.equal({'keyA' : true, 'keyB' : true, 'keyD' : true});
		expect(iterationSpy).to.have.callCount(Object.keys(data).length);

	});

});