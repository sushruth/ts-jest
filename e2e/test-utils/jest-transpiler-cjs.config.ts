import { type JestConfigWithTsJest, TS_TRANSFORM_PATTERN } from 'ts-jest'

export default {
  displayName: 'test-utils-transpiler-cjs',
  transform: {
    [TS_TRANSFORM_PATTERN]: [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig-cjs-transpiler.spec.json',
      },
    ],
  },
} satisfies JestConfigWithTsJest
