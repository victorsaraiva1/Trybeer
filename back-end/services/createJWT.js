const jwt = require('jsonwebtoken');
const path = require('path');

const enviromentVariable = path.resolve(__dirname, '..', '..', '.env');
require('dotenv').config({ path: enviromentVariable });

function createTokenJWT(payload) {
  const jwtConfig = {
    expiresIn: '3d',
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, process.env.SECRET_KEY_JWT, jwtConfig);
  return token;
}

module.exports = createTokenJWT;
