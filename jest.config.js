const { createDefaultPreset } = require('ts-jest');

const tsJestPreset = createDefaultPreset({ tsconfig: 'tsconfig.jest.json' });

module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    ...tsJestPreset.transform,
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testMatch: ['**/__tests__/**/*.(ts|tsx)'],
};

