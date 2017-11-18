"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("path");
require("./ZipCodeValidator");
function asyncFn() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(1);
        let result = yield new Promise((resolve, reject) => {
            console.log(2);
            console.log(3);
            console.log(4);
            resolve('5');
        });
        console.log(result);
        console.log(6);
    });
}
asyncFn();
/*
asyncFn().then( ()=> {
  console.log(4);
});

console.log("Hello ts file with node.js by dugu");
console.log("Hello ts file with node.js by dugu");
console.log("Hello ts file with node.js by dugu");
console.log("Hello ts file with node.js by dugu");
console.log("Hello ts file with node.js by dugu");
console.log(reg.test("u read me"));
*/
