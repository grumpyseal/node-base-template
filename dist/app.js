'use strict';

var _server = require('./lib/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_server2.default.listen(8080, function () {
  console.log('%s listening at %s', _server2.default.name, _server2.default.url);
});
//# sourceMappingURL=app.js.map