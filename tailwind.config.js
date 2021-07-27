const { withDefaultConfig } = require("./packages/tailwind-config/dist/index");

module.exports = withDefaultConfig({
  purge: ["./packages/**/src/**/*.{ts,tsx}"],
});
