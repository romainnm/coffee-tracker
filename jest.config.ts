export default {
    preset: "ts-jest",
    testEnvironment: "node",
    extensionsToTreatAsEsm: [".ts"],
    globals: {
      "ts-jest": {
        useESM: true,
      },
    },
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/$1", 
    },
    transform: {
      "^.+\\.ts$": "ts-jest",
    },
    moduleFileExtensions: ["ts", "js", "json", "node"],
};