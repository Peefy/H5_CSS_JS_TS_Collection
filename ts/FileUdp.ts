//node fileiotest.js
import 'path';
import * as fs from 'fs'; 
import * as zlib from 'zlib';
import * as json from 'timers';
import 'events';
import { Buffer } from 'buffer';
import * as dgram from 'dgram';

class A{
    a : string;
}

let b = new A();
b.a = "123456";
console.log(b.a);
console.log(123);
let ws = fs.createWriteStream('test.txt');
ws.write('121212121212');
ws.write('abababababa');
ws.close();

fs.readFile('test.txt', (err,data) =>{
    if(err)
        return console.log(err);
    console.log('读取文件的结果' + data.toString());
});

console.log('game over one');
console.log('game over two');
let bf = new Buffer([4,7,3,1,2,6]);
bf.sort();
for(let b of bf)
{
    b = b + 97;
}
console.log(bf.toString());
const client = dgram.createSocket('udp4');
client.bind(16384);
client.on('message',(msg,rinfo) => {
    let str = "";  //msg相当于c#中的 byte[] 和BitConverter的组合
    for(let m of msg){
        str += m.toString() + " ";       
    }
    let type = msg.readInt16LE(0);  //小端模式
    let f = msg.readFloatLE(16);    //小端模式
    console.log(`receive message from ${rinfo.address}:${rinfo.port}：${msg.length} ${f} ${type}`);
});