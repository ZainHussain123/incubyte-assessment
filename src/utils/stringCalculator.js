export function add(input) {
  if (input == null) return 0;

  const str = String(input).trim();
  if (str === "") return 0;

  // If no digits, return 0 (step 1 behavior)
  if (!/\d/.test(str)) return 0;

  // Step 2: single number support
  const numericOnly = str.match(/^-?\d+$/);
  if (numericOnly) {
    const num = Number(str);
    if (num < 0) {
      throw new Error(`negative numbers not allowed ${num}`);
    }
    return num;
  }

  // Placeholder for upcoming steps (comma-separated, etc.)
  throw new Error("Not implemented beyond step 2");
}
