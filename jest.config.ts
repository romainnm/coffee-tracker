export default {
    preset: "ts-jest",
    testEnvironment: "node",
    extensionsToTreatAsEsm: [".ts"],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/$1",
    },
    transform: {
        "^.+\\.ts$": ["ts-jest", { useESM: true }],
    },
    moduleFileExtensions: ["ts", "js", "json", "node"],
};
