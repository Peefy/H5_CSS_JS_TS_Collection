"use strict";
//我们叫它声明因为它不是“外部程序”的具体实现。 
//它们通常是在 .d.ts文件里定义的。 
//如果你熟悉C/C++，你可以把它们当做 .h文件。
Object.defineProperty(exports, "__esModule", { value: true });
class Calculator {
    constructor() {
        this.current = 0;
        this.memory = 0;
    }
    processDigit(digit, currentValue) {
        if (digit >= "0" && digit <= "9") {
            return currentValue * 10 + (digit.charCodeAt(0) - "0".charCodeAt(0));
        }
    }
    processOperator(operator) {
        if (["+", "-", "*", "/"].indexOf(operator) >= 0) {
            return operator;
        }
    }
    evaluateOperator(operator, left, right) {
        switch (this.operator) {
            case "+": return left + right;
            case "-": return left - right;
            case "*": return left * right;
            case "/": return left / right;
        }
    }
    evaluate() {
        if (this.operator) {
            this.memory = this.evaluateOperator(this.operator, this.memory, this.current);
        }
        else {
            this.memory = this.current;
        }
        this.current = 0;
    }
    handelChar(char) {
        if (char === "=") {
            this.evaluate();
            return;
        }
        else {
            let value = this.processDigit(char, this.current);
            if (value !== undefined) {
                this.current = value;
                return;
            }
            else {
                let value = this.processOperator(char);
                if (value !== undefined) {
                    this.evaluate();
                    this.operator = value;
                    return;
                }
            }
        }
        throw new Error(`Unsupported input: '${char}'`);
    }
    getResult() {
        return this.memory;
    }
}
exports.Calculator = Calculator;
function test(c, input) {
    for (let i = 0; i < input.length; i++) {
        c.handelChar(input[i]);
    }
    console.log(`result of '${input}' is '${c.getResult()}'`);
}
exports.test = test;
