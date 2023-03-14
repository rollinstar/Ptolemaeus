/** @type {import("ts-jest").JestConfigWithTsJest} */
module.exports = {
    roots: ['<rootDir>/src/', '<rootDir>/tests/'],
    testEnvironment: 'jsdom',
    preset: 'ts-jest',
    transform: { '^.+\\.tsx?$': 'ts-jest' },
    testMatch: ['<rootDir>/(tests/units/**/*.spec.(js|jsx|ts|tsx)|**/tests/*.(js|jsx|ts|tsx))'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleDirectories: ['node_modules', 'src', 'tests'],
    transformIgnorePatterns: ['<rootDir>/node_modules'],
    moduleNameMapper: {
        '^app/(.*)$': '<rootDir>/src/app/$1',
        '^tests/(.*)$': '<rootDir>/tests/$1',
    },
};
