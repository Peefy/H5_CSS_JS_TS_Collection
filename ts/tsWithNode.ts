
//node ./ts/tsWithNode.js  调试ts
import * as http from 'http';
import * as path from 'path';
import 'path';
import './ZipCodeValidator'
import { reg } from './ZipCodeValidator';

async function asyncFn() {
    console.log(1);
    let result = await new Promise((resolve, reject) => {
      console.log(2);
      console.log(3);
      console.log(4);
      resolve('5');
    });
    console.log(result);
    console.log(6);
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


