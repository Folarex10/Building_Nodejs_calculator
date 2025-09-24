//  Built-in Module //
import { stdin, stdout } from "node:process"; // built-in I/O streams //

//  Third-party Module //
import chalk from "chalk"; // npm package for colored output //

//  Custom Modules //
import { add } from "./add.js";
import { subtract } from "./subtract.js";

// Simple helper to prompt user input from stdin //
function prompt(question) {
  return new Promise((resolve) => {
    stdout.write(question);
    stdin.once('data', data => resolve(data.toString().trim()));
  });
}

let myMatricNumber = "BD/2025/TC3/150";
console.log(`My matric number is ${myMatricNumber}`);

async function main() {
  console.log(chalk.blue.bold("\n--- My Node.js Calculator ---"));

  const a = parseFloat(await prompt("Enter first number: "));
  const b = parseFloat(await prompt("Enter second number: "));

  if (isNaN(a) || isNaN(b)) {
    console.log(chalk.red("Both inputs must be valid numbers."));
    process.exit(1);
  }

  console.log(chalk.green(`Addition: ${add(a, b)}`));
  console.log(chalk.yellow(`Subtraction: ${subtract(a, b)}`));

  console.log(chalk.cyan("\nThanks for using my Node.js calculator!\n"));

  // End the process cleanly //
  stdin.pause();
}

main();
