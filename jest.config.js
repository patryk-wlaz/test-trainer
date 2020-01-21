module.exports = {
  preset: "jest-preset-angular",
  roots: ['src'],
  transformIgnorePatterns: [
    "/node_modules/(?!ngx-auto-unsubscribe).+\\.js$"
  ],
  setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
    'app/(.*)': '<rootDir>/src/app/$1',
    '^@common$': '<rootDir>/../common',
    '@common/(.*)': '<rootDir>/../common/$1',
    '^@state$': '<rootDir>/src/app/state',
    '@state/(.*)': '<rootDir>/src/app/state/$1'
  }
};
