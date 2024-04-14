const fs = require('node:fs');

function requireText(name, require) {
    return fs.readFileSync(require.resolve(name)).toString();
};

module.exports = { requireText };
