module.exports = {
    collectCoverage: true,
    // roots: ["packages"],
    projects: ["<rootDir>"],
    testMatch: ["**/*.test.js"],
    setupFilesAfterEnv: ["<rootDir>/components/setupTests.js"],
    moduleNameMapper: {
        "\\.css": "identity-obj-proxy"
    }
};
