// // const { createDefaultPreset } = require("ts-jest");

// // const tsJestTransformCfg = createDefaultPreset().transform;

// // /** @type {import("jest").Config} **/
// // module.exports = {
// //   testEnvironment: "node",
// //   transform: {
// //     ...tsJestTransformCfg,
// //   },
// // };

// export default {
//   preset: "ts-jest/presets/default-esm",
//   testEnvironment: "node",
//   extensionsToTreatAsEsm: [".ts"],
//   transform: {
//     "^.+\\.ts$": [
//       "ts-jest",
//       {
//         useESM: true,
//         tsconfig: "tsconfig.json"
//       }
//     ]
//   },
//   moduleFileExtensions: ["ts", "js", "json"],
//   globals: {
//     "ts-jest": {
//       useESM: true
//     }
//   }
// };


/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  preset: 'ts-jest/presets/default-esm', 
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1', 
  },
};
