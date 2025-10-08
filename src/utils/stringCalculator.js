

export function add(numbers) {
  if (!numbers || numbers.trim() === "") return 0;

  numbers = numbers.replace(/\\n/g, "\n");

  let delimiter = /,|\n/; // default delimiters
  let input = numbers;

  // ✅ Handle custom delimiter
  if (numbers.startsWith("//")) {
    const match = numbers.match(/^\/\/(.+)\n([\s\S]*)$/);
    if (match) {
      let delimiterPart = match[1];
      input = match[2]; // string after newline
      delimiterPart = delimiterPart.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      delimiter = new RegExp(`${delimiterPart}|,|\n`);
    }
  }

  const tokens = input.split(delimiter).filter((t) => t.trim() !== "");

  // ✅ if no numeric values at all — return 0
  const hasNumber = tokens.some((t) => !isNaN(Number(t)) && t.trim() !== "");
  if (!hasNumber) return 0;

  const nums = tokens.map((t) => Number(t));

  // ✅ Throw error if it contains letters *alongside* numbers
  if (nums.some((n) => isNaN(n))) {
    throw new Error("Invalid input — contains non-numeric values");
  }

  // ✅ Negative number handling
  const negatives = nums.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(", ")}`);
  }

  // ✅ Sum all numbers
  return nums.reduce((sum, n) => sum + n, 0);
}
