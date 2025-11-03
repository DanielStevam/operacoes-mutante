module.exports = {
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  testEnvironment: "node",
  testMatch: ["**/test/**/*.test.js"], // <- Isso faz o Jest rodar todos
  moduleFileExtensions: ["js"],
  verbose: true,
};
