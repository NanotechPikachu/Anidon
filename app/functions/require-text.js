const fs = require('node:fs');

module.exports = function(name, require) {
    return fs.readFileSync(require.resolve(name)).toString();
};
