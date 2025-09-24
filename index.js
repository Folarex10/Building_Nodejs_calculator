import { add } from "./add.js";  // built-in Node.js module
import { subtract } from "./subtract.js";  // built-in Node.js module

// ===== Third-party module =====
import chalk from "chalk";  // installed from npm



// Get two numbers from command line arguments
const num1 = parseFloat(process.argv[2]);
const num2 = parseFloat(process.argv[3]);

if (isNaN(num1) || isNaN(num2)) {
  console.log(chalk.red('Please provide two valid numbers.'));
  process.exit(1);
}

let myMatricNumber = "BD/2025/TC3/150";
console.log(myMatricNumber);

console.log(chalk.blue('--- Node.js Calculator ---'));

// Use custom modules
console.log(chalk.green(`Addition: ${add(num1, num2)}`));
console.log(chalk.yellow(`Subtraction: ${subtract(num1, num2)}`));

// Use a built-in module (os) for extra info
// console.log(chalk.cyan(`Running on: ${os.type()} ${os.release()}`));