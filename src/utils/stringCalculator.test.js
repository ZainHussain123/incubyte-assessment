import { describe, test, expect } from "vitest";
import { add } from "./stringCalculator";

//
// STEP 1 TESTS (still valid)
//
describe("String Calculator — Step 1: empty / no-number strings", () => {
  test("empty string returns 0", () => {
    expect(add("")).toBe(0);
  });

  test("string with only whitespace returns 0", () => {
    expect(add("   ")).toBe(0);
    expect(add("\n\t")).toBe(0);
  });

  test("string that has no numeric characters returns 0", () => {
    expect(add("abc")).toBe(0);
    expect(add("foo,bar\nbaz")).toBe(0);
  });

  test("throws error for negative number", () => {
    expect(() => add("-1")).toThrow("negative numbers not allowed -1");
  });

  test("throws error for multiple negative numbers", () => {
    expect(() => add("1,-2,3,-4")).toThrow(
      "negative numbers not allowed -2, -4"
    );
  });
});


describe("String Calculator — Step 2: commas, newlines, and delimiters", () => {
  test("returns sum of comma-separated numbers", () => {
    expect(add("1,2,3")).toBe(6);
  });

  test("handles newlines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("supports custom delimiter ;", () => {
    expect(add("//;\n1;2;3")).toBe(6);
  });

  test("supports custom delimiter |", () => {
    expect(add("//|\n2|3|5")).toBe(10);
  });

  test("throws error if non-numeric values are present", () => {
    expect(() => add("1,a,3")).toThrow("Invalid input — contains non-numeric values");
  });
});
