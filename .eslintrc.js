module.exports = {
  overrides: [
    {
      files: ["*.js", "*.cjs"],
      env: {
        node: true
      },
      parserOptions: {
        sourceType: "script"
      }
    }
  ]
};
