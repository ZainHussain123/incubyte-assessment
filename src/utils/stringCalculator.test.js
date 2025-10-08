import { add } from "./stringCalculator";
import { describe, test, expect } from "vitest";

describe("String Calculator — step 1: empty / no-number strings", () => {
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

  test("throws an error when a single negative number is given", () => {
    expect(() => add("-1")).toThrow("negative numbers not allowed -1");
    expect(() => add("-42")).toThrow("negative numbers not allowed -42");
  });

  test("does not throw for single positive numbers", () => {
    expect(() => add("5")).not.toThrow();
    expect(add("5")).toBe(5);
  });
});
