const { getJestProjects } = require('@nrwl/jest')

module.exports = {
  projects: [
    ...getJestProjects(),
    '<rootDir>/libs/shared/assets',
    '<rootDir>/libs/shared/styles',
    '<rootDir>/apps/tests-app',
  ],
}
