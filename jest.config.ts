export default {
  preset: "ts-jest",
  testEnvironment: "node",
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "test-results",
        outputName: "junit.xml",
      },
    ],
  ],
};
