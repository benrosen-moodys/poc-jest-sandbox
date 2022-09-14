import { logMessage } from "./index";

describe("The logMessage function", () => {
  test.each(["foo", "foobar", "baz", "bar"])(
    "should invoke console.log with the expected argument",
    (expectedArgument) => {
      const spiedConsoleLog = jest.spyOn(console, "log");

      logMessage(expectedArgument);

      expect(spiedConsoleLog).toHaveBeenCalledWith(expectedArgument);
    }
  );
});
