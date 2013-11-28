var Q = require('q');

/**
 * Allow your methods be called by Callbacks or Promises.
 *
 * @param err
 * @param [data]
 * @param [cb]
 * @returns {promise}
 */
var cbPromise = function (err, data, cb) {
	// CallBacks //
	if (cb) {
		if (err) {
			cb(err);
		}
		else {
			cb(null, data);
		}
		return null;
	}
	// Promises //
	var deferred = Q.defer();
	if (err) {
		deferred.reject(err);
	}
	else {
		deferred.resolve(data);
	}
	return deferred.promise;
};

module.exports = cbPromise;