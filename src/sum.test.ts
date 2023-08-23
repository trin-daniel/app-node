import { sum } from "./sum";

describe("#sum", () => {
  test("should be able to add two values", () => {
    expect(sum(2, 3)).toBe(5);
  });
});
