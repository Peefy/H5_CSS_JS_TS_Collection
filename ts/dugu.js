//有bug
//import {StringValidator} from "./Validation";
//import Zip = require("./ZipCodeValidator");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
//import "reflect-metadata"
class Student {
    constructor(firstName = "", middleInitial = "", lastName = "") {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    getName() {
        return "DuGu";
    }
}
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
function voidFunc() {
}
function writeLine(message) {
    document.write(message + "<br>");
}
function println(message) {
    document.write(message + "<br>");
}
function writeh2(message) {
    document.write(`<h2>${message}</h2>`);
}
function main() {
    try {
        //#region  1.基础类型，ts的类型声明
        writeh2("1.基础类型，ts的类型声明");
        let isDone = false; //布尔类型
        let myNum = 0xff; //数字
        let dugu = "duguStr"; //字符串
        let mobanStr = `sad ${isDone} `; //模板字符串
        let lists = [1, 2, 3]; //数组
        let nums = [1, 2, 3]; //泛型数组
        let xTuple = ["123", 123]; //元组
        //let color = Color.Red;          //枚举
        let arrs = [1, "2", false];
        var user = new Student("DuGu", "DuGu", "User"); //class类
        let u = undefined;
        let n = null;
        let someValue = "this is a string";
        let strLength = someValue.length;
        writeLine(greeter(user));
        writeLine(new Student().getName());
        writeLine(mobanStr);
        writeLine(xTuple[0].toString().substr(1));
        writeLine(color.toString());
        //#endregion
        //#region  2.变量声明
        writeh2("2.变量声明");
        //let vs var vs const
        //var的作用域和let的作用域不同，最好用let
        var varVar = 1;
        let letVar = 1;
        const cVar = 1;
        //cVar = 2; // error
        //使用var let const 采取最小特权原则.
        //解构数组
        let arrin = [1, 2, 3, 4];
        let [fisrt, ...seonnd] = arrin;
        let [, third, , fourth] = arrin;
        writeLine(`${fisrt} and ${seonnd} 
            and ${third} and ${fourth}`);
        //对象解构
        let _a = { a: "dugu", b: "Dugu", c: "lala" }, { a } = _a, b = __rest(_a, ["a"]);
        //默认值
        function testMoren(wholeObj) {
            let { a, b = 1001 } = wholeObj;
        }
        //函数指定默认值
        function fss({ a, b } = { a: "", b: 1 }) {
        }
        //#endregion
        //#region  3.接口
        writeh2("3.接口");
        function printLabel(lable) {
            writeLine(lable.font);
        }
        let la = { font: "宋体", fontSize: 14 };
        //不可变数组
        let ro = [1, 2, 3, 4];
        let fly;
        fly = (num) => {
            return false;
        };
        println(fly.call(fly, 1));
        let strArr;
        strArr = ["dugu", "DuGu"];
        println(strArr[0]);
        println(strArr);
        //
        class Animal {
        }
        class Dog extends Animal {
        }
        function createClock(ctor, hour, minute) {
            return new ctor(hour, minute);
        }
        class DigitalClock {
            constructor(h, m) { }
            tick() {
                console.log("beep beep");
                return "beep beep";
            }
        }
        class AnalogClock {
            constructor(h, m) { }
            tick() {
                console.log("tick tock");
                return "tick tick";
            }
        }
        //继承和多态
        let digital = createClock(DigitalClock, 12, 17);
        let analog = createClock(AnalogClock, 7, 32);
        println(digital.tick());
        println(analog.tick());
        function createCounter() {
            let counter = function (start) { return "11"; };
            counter.interval = 10;
            counter.reset = () => { };
            return counter;
        }
        let c = createCounter();
        println(`${c(10)} and ${c.interval}`);
        //接口继承类，当接口继承了一个类型时，会继承成员但是不包括其实现
        //这个接口类型只能被这个类或其子类所实现（implement）。
        //如下例子，单独实现接口SelectedControl但不继承Control类会报错
        class Control {
        }
        class Button extends Control {
            select() {
                return "selected";
            }
        }
        //#endregion
        //#region  4.类
        writeh2("4.类");
        //在TS中，成员默认public
        //protected 与 private 很相似 ，
        //区别是 子类可以访问父类的protected
        //readonly修饰符
        //readonly关键字将属性设置为只读的。 
        //只读属性必须在声明时或构造函数里被初始化。 
        //存取器 get和set
        //静态属性 static
        class Greeter {
            constructor(message) {
                this._internalVar = 2;
                this.greeting = message;
                Greeter.total += 1;
            }
            get internalVar() {
                return this._internalVar;
            }
            set internalVar(num) {
                if (num < 10 && num > 0)
                    this._internalVar = num;
            }
            greet() {
                return "Hello " + this.greeting;
            }
        }
        Greeter.total = 0;
        let greter = new Greeter("DuGu");
        let varStr = greter.internalVar.toString();
        println(greter.greet());
        println(varStr);
        class ChildGreeter extends Greeter {
            constructor(message) {
                super(message);
                this.proVar = 1;
                //访问不到internalVar
            }
            greet() {
                return "Hello Child " + this.greeting;
            }
        }
        let me = new ChildGreeter("heihei");
        println(me.greet());
        function writeAsync(str) {
            return __awaiter(this, void 0, void 0, function* () {
                document.write(str + "<br>");
            });
        }
        //await writeAsync("async func");
        println(ChildGreeter.total);
        //抽象类
        class Element {
            move() {
            }
        }
        class UIElement extends Element {
            makeSound() {
            }
        }
        //#endregion
        //#region  5.函数
        writeh2("5.函数");
        //为函数定义类型,x?为可空类型
        function add(x, y) {
            if (x && y)
                return x + y;
            else
                return NaN;
        }
        let myAdd = add;
        println(myAdd.call(myAdd, 2, 4));
        println(add(null, null));
        println(add(undefined, undefined));
        //书写函数完整类型
        let mySub = function (x, y) { return x - y; };
        println(mySub(2.4, 1.34));
        //剩余参数
        function nameBuilder(firstName, ...restOfName) {
            return firstName + ' ' + restOfName.join(' ');
        }
        println("DuGu");
        //重点：this和箭头函数
        //在JS里面，this的值在函数被调用的时候才会指定
        let deck = {
            cards: ["A", "B", "C", "D"],
            suits: Array(52),
            createCardPicker: function () {
                //this.cards = []; //error
                return () => {
                    //this.cards = []; //error
                    let pickedCard = Math.floor(Math.random() * 52);
                    let pickedSuit = Math.cos(0.1);
                };
            }
        };
        //#endregion
        //#region  6.泛型
        writeh2("6.泛型");
        function identity(arg) {
            return arg;
        }
        let output = identity("String");
        println(output);
        class Circle {
            draw(arg) {
                return arg;
            }
        }
        let mea;
        mea = new Circle();
        println(mea.draw(123));
        class Collection {
        }
        let myCollection = new Collection();
        myCollection.add = (x, y) => x + y;
        println(myCollection.add(12, 12));
        function loggingLength(arg) {
            return arg.length;
        }
        println(loggingLength({ length: 3, max: 10 }));
        //在泛型中使用类型参数
        //在泛型里面使用类类型
        function createInstance(c) {
            return new c();
        }
        class BeeKeeper {
        }
        class ZooKeeper {
        }
        class AnimalBase {
        }
        class Bee extends AnimalBase {
            constructor() {
                super();
                this.keeper = new BeeKeeper();
                this.keeper.hasMask = false;
            }
        }
        class Lion extends AnimalBase {
            constructor() {
                super();
                this.keeper = new ZooKeeper();
                this.keeper.nametag = "dugu";
            }
        }
        println(createInstance(Lion).keeper.nametag);
        println(createInstance(Bee).keeper.hasMask);
        //#endregion
        //#region  7.枚举
        writeh2("7.枚举");
        let Direction;
        (function (Direction) {
            Direction[Direction["Up"] = 1] = "Up";
            Direction[Direction["Down"] = 2] = "Down";
            Direction[Direction["Left"] = 3] = "Left";
            Direction[Direction["Right"] = 4] = "Right";
        })(Direction || (Direction = {}));
        let FileAccess;
        (function (FileAccess) {
            FileAccess[FileAccess["None"] = 0] = "None";
            FileAccess[FileAccess["Read"] = 2] = "Read";
            FileAccess[FileAccess["Write"] = 4] = "Write";
            FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
            FileAccess[FileAccess["G"] = "123".length] = "G";
        })(FileAccess || (FileAccess = {}));
        //在生成的JS中,枚举类型被编译成一个对象
        let direction = Direction.Right;
        let files = [FileAccess.Read, FileAccess.ReadWrite];
        //#endregion
        //#region  8.类型推论 
        writeh2("8.类型推论");
        let num_dugu = 3; //number
        let arr_dugu = [0, 1, null]; //最佳通用类型：number[]
        let animals = [new Bee(), new Lion()];
        let animals_onther = [new Bee(), new Lion()];
        //#endregion
        //#region  9.类型兼容性
        writeh2("9.类型兼容性");
        let one_name;
        let two_name = { name: "dugu", age: 18 };
        one_name = two_name;
        let function_one = (a) => 0;
        let function_two = (a, b) => 0;
        //function_one = function_two;  //Error
        function_two = function_one;
        let eachItems = [1, 2, 3];
        eachItems.forEach((item, index, array) => println(item));
        //类型系统强制源函数的返回值类型必须是目标函数返回值类型的子类型。
        let EventType;
        (function (EventType) {
            EventType[EventType["Mouse"] = 0] = "Mouse";
            EventType[EventType["Keyboard"] = 1] = "Keyboard";
        })(EventType || (EventType = {}));
        function listenEvent(eventType, handler) {
            println("methon listenEvent called");
            let e = { timestamp: 11, x: 1, y: 2 };
            if (handler)
                handler.call(handler, e);
        }
        listenEvent(EventType.Mouse, (e) => println(`(${e.x} ${e.y})`));
        listenEvent(EventType.Mouse, (e) => {
            let e_tmp = e;
            println(`(${e_tmp.x} ${e_tmp.y})`);
        });
        //#endregion
        //region 10.高级类型
        writeh2("10.高级类型");
        //交叉类型是将多个类型合并为一个类型。
        function extend(first, second) {
            let result = {};
            for (let id in first) {
                result[id] = first[id];
            }
            for (let id in second) {
                if (!result.hasOwnProperty(id)) {
                    result[id] = second[id];
                }
            }
            return result;
        }
        class Person {
            constructor(name) {
                this.name = name;
            }
        }
        class ConsoleLogger {
            log() {
                return "log";
            }
        }
        var jim = extend(new Person("Jim"), new ConsoleLogger());
        //println(`${jim.name} ${jim.log()}`);
        //联合类型
        function padLeft(value, padding) {
            if (typeof padding == "number") {
                return Array(padding + 1).join(" ") + value;
            }
            if (typeof padding == "string") {
                return padding + value;
            }
            throw new Error(`Expected string or number, got '${padding}'.`);
        }
        println(padLeft("left", 4));
        println(padLeft("left", "space"));
        function padRight(value, padding) {
            if (typeof padding === "number") {
                return value + Array(padding + 1).join(" ");
            }
            if (typeof padding === "string") {
                return value + padding;
            }
        }
        println(padRight("Right", 6));
        println(padRight("right", " dugu"));
        class SpaceRepeatingPadder {
            constructor(numSpaces) {
                this.numSpaces = numSpaces;
            }
            getPaddingString() {
                return Array(this.numSpaces + 1).join(" ");
            }
        }
        class StringPadder {
            constructor(value) {
                this.value = value;
            }
            getPaddingString() {
                return this.value;
            }
        }
        function getRandomRadder() {
            return Math.random() < 0.5 ?
                new SpaceRepeatingPadder(4) :
                new StringPadder("    ");
        }
        //instanceof的右侧要求是一个构造函数
        let padder = getRandomRadder();
        if (padder instanceof StringPadder) {
            padder.getPaddingString();
        }
        if (padder instanceof SpaceRepeatingPadder) {
            padder.getPaddingString();
        }
        function judgeString(str) {
            return str || ""; //相当于C#中的 str ?? "";
        }
        let con;
        function area(s) {
            switch (s.kind) {
                case "square": return s.size * s.size;
                case "rectangle": return s.height * s.width;
                case "circle": return Math.PI * Math.pow(s.radius, 2);
                default: throw new Error("no shape kind return");
            }
        }
        //可以通过this，实现类或者接口的多态
        class BaseCalculator {
            constructor(value = 0) {
                this.value = value;
            }
            currentValue() {
                return this.value;
            }
            add(operand) {
                this.value += operand;
                return this;
            }
            multiply(operand) {
                this.value *= operand;
                return this;
            }
        }
        class ScientficCalculator extends BaseCalculator {
            constructor(value = 0) {
                super(value);
            }
            sin() {
                this.value = Math.sin(this.value);
                return this;
            }
        }
        let v = new ScientficCalculator(2)
            .multiply(5)
            .sin()
            .add(1)
            .currentValue();
        println(v);
        //索引类型 keyof T 索引类型查询操作符
        function pluck(o, names) {
            return names.map(n => o[n]);
        }
        let people = {
            name: 'David',
            age: 35
        };
        let strings = pluck(people, ['name']);
        for (let str in strings) {
            document.write(` ${strings[str]}`);
        }
        let peopleProps;
        function getProperty(o, name) {
            return o[name]; // o[name] is of type T[K]
        }
        let pro = getProperty(people, "name");
        println(pro.toString());
        let keys;
        let value;
        function upproxify(t) {
            let result = {};
            for (const k in t) {
                result[k] = t[k].get();
            }
            return result;
        }
        //#endregion
        //#region 11.Symbols
        //11.Symbols
        writeh2("11.Symbols");
        let sym1 = Symbol();
        let sym2 = Symbol("key");
        let sym3 = Symbol("key");
        println(sym2 === sym3);
        let symObj = {
            [sym1]: "value"
        };
        println(symObj[sym1]);
        class SymbolClass {
            [sym2]() {
                return "C#, Visual Basic .NET, F#, TypeScript, Visual C++";
            }
        }
        let symC = new SymbolClass();
        symC[sym2]();
        //#endregion
        //#region 12.迭代器和生成器
        writeh2("12.迭代器和生成器");
        //for..of和for..in均可迭代一个列表；但是用于迭代的值却不同，
        //for..in迭代的是对象的 键 的列表，
        //而for..of则迭代对象的键对应的值。
        let someArray = [1, "string", "false"];
        for (let entry of someArray) {
            document.write(`${entry} `);
        }
        println("");
        for (let entry in someArray) {
            document.write(`${entry} `);
        }
        println("");
        for (let entry in someArray) {
            document.write(`${someArray[entry]} `);
        }
        //#endregion
        //#region 13.模块
        //export import
        writeh2("13.模块");
        /*
        class CodeValidator implements StringValidator {
            isAcceptable(s: string): boolean {
                return true;
            }
        }
        println(new CodeValidator().isAcceptable);
        println(Zip.reg.test("redread"));
        */
        //#endregion
        //#region 14.命名空间
        writeh2("14.命名空间");
        System.Console.WriteLine("DuGu");
        System.Console.WriteLine("Hello World!"); //记得在h5文件中添加对dugulib.引用
        System.Console.Write(`${1 + 2} ${1 * 2} ${1 / 2} ${1 - 2} ${1 % 2}`);
        System.Console.WriteLine("");
        //#endregion
        //#region 15.命名空间和模块
        writeh2("15.命名空间和模块");
        //#endregion
        //#region 16.模块解析
        writeh2("16.模块解析");
        //#endregion
        //#region 17.声明合并
        writeh2("17.声明合并");
        let box = {
            height: 5,
            width: 6,
            scale: 10
        };
        //合并用来扩展枚举类型
        let ColorA;
        (function (ColorA) {
            ColorA[ColorA["Red"] = 1] = "Red";
            ColorA[ColorA["Green"] = 2] = "Green";
            ColorA[ColorA["Blue"] = 3] = "Blue";
        })(ColorA || (ColorA = {}));
        //#endregion
        //#region 
        writeh2("18.JSX");
        //#endregion
        //#region 19.装饰器
        writeh2("19.装饰器");
        //注意：装饰器是一项实验特性，在未来的版本中可能会发生改变
        function sealed(target) {
        }
        function color(value) {
            return function (target) {
            };
        }
        function f() {
            println("f(): evalueted");
            return function (target, propertyKey, descripter) {
                println("f() called");
            };
        }
        function g() {
            println("g(): evalueted");
            return function (target, propertyKey, descripter) {
                println("g() called");
            };
        }
        class DuGuC {
            method() {
            }
        }
        __decorate([
            f(),
            g(),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], DuGuC.prototype, "method", null);
        let x = new DuGuC();
        function classDecorator(constructor) {
            return class extends constructor {
                constructor() {
                    super(...arguments);
                    this.newProperty = "new property";
                    this.hello = "override";
                }
            };
        }
        //类装饰器
        let DecoratorGreeter = class DecoratorGreeter {
            constructor(m) {
                this.property = "property";
                this.hello = m;
            }
        };
        DecoratorGreeter = __decorate([
            classDecorator,
            __metadata("design:paramtypes", [String])
        ], DecoratorGreeter);
        println(new DecoratorGreeter("world"));
        //方法装饰器
        function enumerable(value) {
            return function (target, propertyKey, descripter) {
                descripter.enumerable = value;
            };
        }
        class GreeterSecond {
            constructor(message) {
                this.greeting = message;
            }
            greet() {
                return "Hello," + this.greeting;
            }
        }
        __decorate([
            enumerable(false),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], GreeterSecond.prototype, "greet", null);
        let tmp = new GreeterSecond("???");
        println(tmp.greet());
        //访问器装饰器
        function configurable(value) {
            return function (target, propertyKey, descripter) {
                descripter.configurable = value;
            };
        }
        class Point {
            constructor(x, y) {
                this._x = x;
                this._y = y;
            }
            get x() { return this._x; }
            get y() { return this._y; }
        }
        __decorate([
            configurable(false),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [])
        ], Point.prototype, "x", null);
        __decorate([
            configurable(false),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [])
        ], Point.prototype, "y", null);
        let point = new Point(12, 13);
        println(`${point.x} ${point.y}`);
        /*
        const formatMetadataKey = Symbol("format");

        function format(formatString : string) {
            return Reflect.metadata(formatMetadataKey, formatString);
        }

        function getFormat(target : any, propertyKey : string) {
            return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
        }

        class FormatGreeter {
            @format("Hello, %s")
            greeting : string;

            constructor(message : string) {
                this.greeting = message;
            }
            greet() {
                let formatString = getFormat(this, "greeting") as string;
                return formatString.replace("s%", this.greeting);
            }
        }

        const requiredMetadataKey = Symbol("required");
        
        function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
            let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
            existingRequiredParameters.push(parameterIndex);
            Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
        }
        
        function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
            let method = descriptor.value;
            descriptor.value = function () {
                let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
                if (requiredParameters) {
                    for (let parameterIndex of requiredParameters) {
                        if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
                            throw new Error("Missing required argument.");
                        }
                    }
                }
        
                return method.apply(this, arguments);
            }
        }

        class ValidateGreeter {
            greeting : string;

            constructor(message : string) {
                this.greeting = message;
            }

            @validate
            greet(@required name : string) {
                return "Hello " + name + ", " + this.greeting;
            }

        }

        println(new ValidateGreeter("DuGu").greet("dugu"));

        class Line {
            private _p0 : Point;
            private _p1 : Point;

            @Reflect.metadata("design:type", Point)
            set p0(value : Point) { this._p0 = value; }
            get p0() { return this._p0; }
            
            @Reflect.metadata("design:type", Point)
            set p1(value : Point) { this._p1 = value; }
            get p1() { return this._p1; }

        }
        */
        //#endregion
        //#region 20.Mixins
        writeh2("20.Mixins");
        // Disposable Mixin
        class Disposable {
            dispose() {
                this.isDisposed = true;
            }
        }
        // Activatable Mixin
        class Activatable {
            activate() {
                this.isActive = true;
            }
            deactivate() {
                this.isActive = false;
            }
        }
        class SmartObject {
            constructor() {
                // Disposable
                this.isDisposed = false;
                // Activatable
                this.isActive = false;
                setInterval(() => console.log(this.isActive + " : " + this.isDisposed), 500);
            }
            interact() {
                this.activate();
            }
        }
        applyMixins(SmartObject, [Disposable, Activatable]);
        let smartObj = new SmartObject();
        setTimeout(() => smartObj.interact(), 1000);
        function applyMixins(derivedCtor, baseCtors) {
            baseCtors.forEach(baseCtor => {
                Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
                    derivedCtor.prototype[name] = baseCtor.prototype[name];
                });
            });
        }
        //#endregion
        //#region 21.三斜线指令
        console.log("21.三斜线指令");
        //#endregion
    }
    catch (error) {
        window.alert(error);
    }
}
main();
function newFunction() {
    ;
}
