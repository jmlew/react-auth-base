const users = require('./data/users.json');

module.exports = () => {
  return {
    ...users,
  };
};
