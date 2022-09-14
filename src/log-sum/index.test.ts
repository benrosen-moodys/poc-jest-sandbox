import { getSum } from "../get-sum";
import { logMessage } from "../log-message";
import { logSum } from "./index";

jest.mock("../get-sum", () => {
  return {
    ...jest.requireActual("../get-sum"),
    getSum: jest.fn(),
  };
});

const mockGetSum = jest.mocked(getSum);

jest.mock("../log-message", () => {
  return {
    ...jest.requireActual("../log-message"),
    logMessage: jest.fn(),
  };
});

const mockLogMessage = jest.mocked(logMessage);

describe("The logSum function", () => {
  describe("should call", () => {
    afterEach(() => {
      jest.resetAllMocks();
    });

    test("the getSum function", () => {
      logSum(0);

      expect(mockGetSum).toHaveBeenCalled();
    });

    test("the logMessage function", () => {
      logSum(0);

      expect(mockLogMessage).toHaveBeenCalled();
    });
  });

  describe("should throw an error", () => {
    test("when getSum throws an error.", () => {
      const mockError = new Error();

      mockGetSum.mockImplementationOnce(() => {
        throw mockError;
      });

      expect(() => {
        logSum(0);
      }).toThrowError(mockError);
    });
  });
});
