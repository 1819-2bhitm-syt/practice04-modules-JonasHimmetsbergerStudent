const operations = require("./operations");

function printCalculation(operator, calculate){
    console.log("10 " + operator + " 7 = " + calculate(10, 7));
}

printCalculation("+", operations.sum);
printCalculation("-", operations.difference);
printCalculation("*", operations.product);
printCalculation("/", operations.quotient);
