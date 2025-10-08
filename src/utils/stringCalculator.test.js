import { add } from "./stringCalculator";
import { describe, test, expect } from "vitest";

describe("String Calculator — Step 2", () => {
  test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns the number itself for a single number", () => {
    expect(add("4")).toBe(4);
  });

  test("returns sum for two comma-separated numbers", () => {
    expect(add("1,5")).toBe(6);
  });

  test("returns sum for multiple comma-separated numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  
  test("handles newlines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("throws error for one negative number", () => {
    expect(() => add("-1,2")).toThrow("negative numbers not allowed -1");
  });

  test("throws error listing all negative numbers", () => {
    expect(() => add("2,-4,3,-5")).toThrow(
      "negative numbers not allowed -4, -5"
    );
  });

  test("supports custom delimiters defined like //;\n1;2", () => {
    expect(add("//;\n1;2")).toBe(3);
  });
});
