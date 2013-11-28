var expect = require('expect.js'),
	cbPromise = require('../cb-promise');

describe('cb-promise', function () {
	var getImportantData = function (cb) {
		var data = 'important data';
		return cbPromise(null, data, cb);
	};
	var getDataWithErrors = function (cb) {
		var error = 'error occurred';
		return cbPromise(error, null, cb);
	};

	it('should return "important data" by callback', function (done) {
		getImportantData(function (err, data) {
			expect(err).to.not.be.ok();
			expect(data).to.be('important data');
			done();
		});
	});

	it('should return "important data" by promise', function (done) {
		getImportantData()
			.then(function (data) {
				return expect(data).to.be('important data');
			}).then(function () {
				return done();
			}, function (err) {
				return done(err);
			});
	});

	it('should return "error occurred" by callback', function (done) {
		getDataWithErrors(function (err, data) {
			expect(err).to.be('error occurred');
			expect(data).to.not.be.ok();
			done();
		});
	});

	it('should return "error occurred" by promise', function (done) {
		getDataWithErrors()
			.fail(function (err) {
				return expect(err).to.be('error occurred');
			}).then(function () {
				return done();
			}, function (err) {
				return done(err);
			});
	});
});