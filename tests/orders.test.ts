export const sampleTestCases = [
  { id: "starter-1", label: "covers the basic orders.test path", expected: "pending" },
  { id: "starter-2", label: "captures an edge case for orders.test", expected: "pending" },
];

export function describeStarterCases() {
  return sampleTestCases.map((testCase) => testCase.label);
}
