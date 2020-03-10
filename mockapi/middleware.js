const jwt = require('jsonwebtoken');
const userdb = require('./data/users.json');
const SECRET_KEY = '123456789';
const expiresIn = '5m';

const ApiMethod = {
  Post: 'POST',
  Get: 'GET',
  Put: 'PUT',
};

module.exports = (req, res, next) => {
  let { url, body, method, headers } = req;

  // Authentication.
  if (method === ApiMethod.Post && isAuthRoute(url)) {
    const { email, password } = body;
    if (isAuthenticated({ email, password })) {
      // Add Authorization header
      const userDetails = getUser(email) || { email, password };
      delete userDetails.password;
      const id_token = createToken(userDetails);
      res.header('Authorization', `Bearer ${id_token}`);
      res.header('Access-Control-Expose-Headers', 'Authorization');
      return res.status(200).json(userDetails.id);
    } else {
      const status = 401;
      const message = 'Incorrect email or password';
      return res.status(status).json({ status, message });
    }
  }

  if (isPrivateRoute(url)) {
    if (
      headers.authorization === undefined ||
      headers.authorization.split(' ')[0] !== 'Bearer'
    ) {
      const status = 401;
      const message = 'Error in authorization format';
      res.status(status).json({ status, message });
      return;
    }
  }

  // Continue to JSON Server router
  next();
};

function isPrivateRoute(url) {
  const privateRoutePaths = ['accounts', 'transactions', 'cards'];
  return privateRoutePaths.find((path) => RegExp(path).test(url));
}

function isAuthRoute(url) {
  return RegExp('authenticate').test(url);
}

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

function getUser(email) {
  const user = userdb.users.find((user) => user.email === email);
  return { ...user };
}
