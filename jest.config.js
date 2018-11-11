module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ["packages/*/**/*.{js}", "!**/node_modules/**"],
    moduleNameMapper: {
        ".+\\.(css)$": "identity-obj-proxy",
        common: "<rootDir>/packages/common/components"
    },
    roots: ["packages/common"]
};
