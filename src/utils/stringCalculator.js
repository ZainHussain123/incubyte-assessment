export function add(numbers) {
  if (!numbers || numbers.trim() === "") return 0;

  // convert escaped newlines like "\n" into real newlines
  numbers = numbers.replace(/\\n/g, "\n");

  let delimiter = /,|\n/; // default: comma or newline
  let input = numbers;

  // Custom delimiter: //;\n1;2
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const delimiterPart = parts[0].slice(2);
    delimiter = new RegExp(delimiterPart);
    input = parts.slice(1).join("\n");
  }

  // Split input string using commas or newlines
  const tokens = input.split(delimiter).filter((t) => t.trim() !== "");

  // Convert to numbers
  const nums = tokens.map((t) => Number(t));

  // Handle invalid entries
  if (nums.some((n) => isNaN(n))) {
    throw new Error("Invalid input — contains non-numeric values");
  }

  // Check for negatives
  const negatives = nums.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(", ")}`);
  }

  return nums.reduce((sum, n) => sum + n, 0);
}
