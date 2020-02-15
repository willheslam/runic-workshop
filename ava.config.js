export default {
  files: ['src/**/*.test.js', 'tests/**/*.test.ts'],
  babel: {
    testOptions: {
      presets: [
        ['module:@ava/babel/stage-4', { modules: false }]
      ],
      babelrc: false,
      configFile: false
    }
  },
  require: [
    'esm'
  ],
  nonSemVerExperiments: {
    tryAssertion: true
  }
}
