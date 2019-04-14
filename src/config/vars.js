const path = require('path');

require('dotenv-safe').config({
    allowEmptyValues: true
});

module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.PORT
};
