function sum(a, b) {
  return a + b;
}

const doings = {
  login({ username, email, password }) {
    console.log("Register user with");
    console.log({ username, email, password });
  },
  login({ username, password }) {
    console.log("Logging in user with");
    console.log({ username, password });
  },
  logout(username) {
    console.log("Logging out user with");
    console.log({ username });
  },
};

module.exports = { sum };
