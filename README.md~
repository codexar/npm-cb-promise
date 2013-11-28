cb-promise
==============

Allow your methods be called by Callbacks or Promises.

## Examples:

The use of this module is very simple and useful.

```javascript
var cbPromise = require('cb-promise');

// Create your methods with a optional callback parameter
var getImportantData = function (cb) {
  var data = 'important data';
  return cbPromise(null, data, cb);
};
```

 Yes, that's it. Now you can call your method using callback or promise

 Using Callbacks:

```javascript
getImportantData(function (err, data) {
  if (err) throw new Error(err);
  console.log(data);
});
```

  Using Promises:

```javascript
getImportantData().then(function (data) {
  console.log(data);
}, function (err) {
  throw new Error(err);
})
```

## Handling Errors

There are no differences with the examples above.

```javascript
var cbPromise = require('cb-promise');

// Create your methods with a optional callback parameter
var getImportantData = function (cb) {
  var error = 'error occurred';
  return cbPromise(error, null, cb);
};
```