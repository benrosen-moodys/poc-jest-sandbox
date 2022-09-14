import { getSum } from "./index";

describe("The getSum function", () => {
  test.each([
    [[], 0],
    [[1, 2, 3], 6],
    [[1, -1], 0],
  ] as [Parameters<typeof getSum>, ReturnType<typeof getSum>][])(
    "should return the expected result for the given arguments.",
    (exampleArguments, expectedResult) => {
      const actualResult = getSum(...exampleArguments);

      expect(actualResult).toStrictEqual(expectedResult);
    }
  );
});
