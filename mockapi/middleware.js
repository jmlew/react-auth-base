const jwt = require('jsonwebtoken');
const userdb = require('./data/users.json');
const SECRET_KEY = '123456789';
const expiresIn = '1h';

const ApiMethod = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
};

module.exports = (req, res, next) => {
  let { url, body, method, headers } = req;

  // Authentication.
  if (method === ApiMethod.POST && url === '/authenticate') {
    const { username, password } = body;
    if (isAuthenticated({ username, password })) {
      // Add Authorization header
      const userDetails = getUser(username) || { username, password };
      delete userDetails.password;
      const id_token = createToken(userDetails);
      res.header('Authorization', `Bearer ${id_token}`);
      res.header('X-User-Id', userDetails.id || 1);
    } else {
      const status = 400;
      const message = 'Incorrect username or password';
      res.status(status).json({ status, message });
      return;
    }
  }

  if (url.includes('users')) {
    if (
      headers.authorization === undefined ||
      headers.authorization.split(' ')[0] !== 'Bearer'
    ) {
      const status = 401;
      const message = 'Unauthorized';
      res.status(status).json({ status, message });
      return;
    }
  }

  // Continue to JSON Server router
  next();
};

// Create a token from a payload
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Verify the token
function verifyToken(token) {
  const check = (err, decode) => (decode !== undefined ? decode : err);
  return jwt.verify(token, SECRET_KEY, check);
}

// Determines whether a user is authenticated.
function isAuthenticated({ email, password }) {
  return userdb.users.some((user) => user.email === email && user.password === password);
}

function getUser(username) {
  const user = userdb.users.find((user) => user.username === username);
  return { ...user };
}
