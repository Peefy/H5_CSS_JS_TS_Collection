var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        if (firstName === void 0) { firstName = ""; }
        if (middleInitial === void 0) { middleInitial = ""; }
        if (lastName === void 0) { lastName = ""; }
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    Student.prototype.getName = function () {
        return "DuGu";
    };
    return Student;
}());
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Yellow"] = 3] = "Yellow";
})(Color || (Color = {}));
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
    document.write("<h2>" + message + "</h2>");
}
function main() {
    try {
        //1.基础类型，ts的类型声明
        writeh2("1.基础类型，ts的类型声明");
        var isDone = false; //布尔类型
        var myNum = 0xff; //数字
        var dugu = "duguStr"; //字符串
        var mobanStr = "sad " + isDone + " "; //模板字符串
        var lists = [1, 2, 3]; //数组
        var nums = [1, 2, 3]; //泛型数组
        var xTuple = ["123", 123]; //元组
        var color = Color.Red; //枚举
        var arrs = [1, "2", false];
        var user = new Student("DuGu", "DuGu", "User"); //class类
        var u = undefined;
        var n = null;
        var someValue = "this is a string";
        var strLength = someValue.length;
        writeLine(greeter(user));
        writeLine(new Student().getName());
        writeLine(mobanStr);
        writeLine(xTuple[0].toString().substr(1));
        writeLine(color.toString());
        //2.变量声明
        writeh2("2.变量声明");
        //let vs var vs const
        //var的作用域和let的作用域不同，最好用let
        var varVar = 1;
        var letVar = 1;
        var cVar = 1;
        //cVar = 2; // error
        //使用var let const 采取最小特权原则.
        //解构数组
        var arrin = [1, 2, 3, 4];
        var fisrt = arrin[0], seonnd = arrin.slice(1);
        var third = arrin[1], fourth = arrin[3];
        writeLine(fisrt + " and " + seonnd + " \n            and " + third + " and " + fourth);
        //对象解构
        var _a = { a: "dugu", b: "Dugu", c: "lala" }, a = _a.a, b = __rest(_a, ["a"]);
        //默认值
        function testMoren(wholeObj) {
            var a = wholeObj.a, _a = wholeObj.b, b = _a === void 0 ? 1001 : _a;
        }
        //函数指定默认值
        function fss(_a) {
            var _b = _a === void 0 ? { a: "", b: 1 } : _a, a = _b.a, b = _b.b;
        }
        //3.接口
        writeh2("3.接口");
        function printLabel(lable) {
            writeLine(lable.font);
        }
        var la = { font: "宋体", fontSize: 14 };
        //不可变数组
        var ro = [1, 2, 3, 4];
        var fly = void 0;
        fly = function (num) {
            return false;
        };
        println(fly.call(fly, 1));
        var strArr = void 0;
        strArr = ["dugu", "DuGu"];
        println(strArr[0]);
        println(strArr);
        //
        var Animal = /** @class */ (function () {
            function Animal() {
            }
            return Animal;
        }());
        var Dog = /** @class */ (function (_super) {
            __extends(Dog, _super);
            function Dog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return Dog;
        }(Animal));
        function createClock(ctor, hour, minute) {
            return new ctor(hour, minute);
        }
        var DigitalClock = /** @class */ (function () {
            function DigitalClock(h, m) {
            }
            DigitalClock.prototype.tick = function () {
                console.log("beep beep");
                return "beep beep";
            };
            return DigitalClock;
        }());
        var AnalogClock = /** @class */ (function () {
            function AnalogClock(h, m) {
            }
            AnalogClock.prototype.tick = function () {
                console.log("tick tock");
                return "tick tick";
            };
            return AnalogClock;
        }());
        //继承和多态
        var digital = createClock(DigitalClock, 12, 17);
        var analog = createClock(AnalogClock, 7, 32);
        println(digital.tick());
        println(analog.tick());
        function createCounter() {
            var counter = function (start) { return "11"; };
            counter.interval = 10;
            counter.reset = function () { };
            return counter;
        }
        var c = createCounter();
        println(c(10) + " and " + c.interval);
        //接口继承类，当接口继承了一个类型时，会继承成员但是不包括其实现
        //这个接口类型只能被这个类或其子类所实现（implement）。
        //如下例子，单独实现接口SelectedControl但不继承Control类会报错
        var Control = /** @class */ (function () {
            function Control() {
            }
            return Control;
        }());
        var Button = /** @class */ (function (_super) {
            __extends(Button, _super);
            function Button() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Button.prototype.select = function () {
                return "selected";
            };
            return Button;
        }(Control));
        //4.类
        writeh2("4.类");
        //在TS中，成员默认public
        //protected 与 private 很相似 ，
        //区别是 子类可以访问父类的protected
        //readonly修饰符
        //readonly关键字将属性设置为只读的。 
        //只读属性必须在声明时或构造函数里被初始化。 
        //存取器 get和set
        //静态属性 static
        var Greeter_1 = /** @class */ (function () {
            function Greeter(message) {
                this._internalVar = 2;
                this.greeting = message;
                Greeter.total += 1;
            }
            Object.defineProperty(Greeter.prototype, "internalVar", {
                get: function () {
                    return this._internalVar;
                },
                set: function (num) {
                    if (num < 10 && num > 0)
                        this._internalVar = num;
                },
                enumerable: true,
                configurable: true
            });
            Greeter.prototype.greet = function () {
                return "Hello " + this.greeting;
            };
            Greeter.total = 0;
            return Greeter;
        }());
        var greter = new Greeter_1("DuGu");
        var varStr = greter.internalVar.toString();
        println(greter.greet());
        println(varStr);
        var ChildGreeter = /** @class */ (function (_super) {
            __extends(ChildGreeter, _super);
            function ChildGreeter(message) {
                var _this = _super.call(this, message) || this;
                _this.proVar = 1;
                return _this;
                //访问不到internalVar
            }
            ChildGreeter.prototype.greet = function () {
                return "Hello Child " + this.greeting;
            };
            return ChildGreeter;
        }(Greeter_1));
        var me = new ChildGreeter("heihei");
        println(me.greet());
        function writeAsync(str) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    document.write(str + "<br>");
                    return [2 /*return*/];
                });
            });
        }
        //await writeAsync("async func");
        println(ChildGreeter.total);
        //抽象类
        var Element_1 = /** @class */ (function () {
            function Element() {
            }
            Element.prototype.move = function () {
            };
            return Element;
        }());
        var UIElement = /** @class */ (function (_super) {
            __extends(UIElement, _super);
            function UIElement() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            UIElement.prototype.makeSound = function () {
            };
            return UIElement;
        }(Element_1));
        //5.函数
        writeh2("5.函数");
        //为函数定义类型,x?为可空类型
        function add(x, y) {
            if (x && y)
                return x + y;
            else
                return NaN;
        }
        var myAdd = add;
        println(myAdd.call(myAdd, 2, 4));
        println(add(null, null));
        println(add(undefined, undefined));
        //书写函数完整类型
        var mySub = function (x, y) { return x - y; };
        println(mySub(2.4, 1.34));
        //剩余参数
        function nameBuilder(firstName) {
            var restOfName = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                restOfName[_i - 1] = arguments[_i];
            }
            return firstName + ' ' + restOfName.join(' ');
        }
        println("DuGu");
        //重点：this和箭头函数
        //在JS里面，this的值在函数被调用的时候才会指定
        var deck = {
            cards: ["A", "B", "C", "D"],
            suits: Array(52),
            createCardPicker: function () {
                //this.cards = []; //error
                return function () {
                    //this.cards = []; //error
                    var pickedCard = Math.floor(Math.random() * 52);
                    var pickedSuit = Math.cos(0.1);
                };
            }
        };
        //6.泛型
        writeh2("6.泛型");
        function identity(arg) {
            return arg;
        }
        var output = identity("String");
        println(output);
        var Circle = /** @class */ (function () {
            function Circle() {
            }
            Circle.prototype.draw = function (arg) {
                return arg;
            };
            return Circle;
        }());
        var mea = void 0;
        mea = new Circle();
        println(mea.draw(123));
        var Collection = /** @class */ (function () {
            function Collection() {
            }
            return Collection;
        }());
        var myCollection = new Collection();
        myCollection.add = function (x, y) { return x + y; };
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
        var BeeKeeper_1 = /** @class */ (function () {
            function BeeKeeper() {
            }
            return BeeKeeper;
        }());
        var ZooKeeper_1 = /** @class */ (function () {
            function ZooKeeper() {
            }
            return ZooKeeper;
        }());
        var AnimalBase = /** @class */ (function () {
            function AnimalBase() {
            }
            return AnimalBase;
        }());
        var Bee = /** @class */ (function (_super) {
            __extends(Bee, _super);
            function Bee() {
                var _this = _super.call(this) || this;
                _this.keeper = new BeeKeeper_1();
                _this.keeper.hasMask = false;
                return _this;
            }
            return Bee;
        }(AnimalBase));
        var Lion = /** @class */ (function (_super) {
            __extends(Lion, _super);
            function Lion() {
                var _this = _super.call(this) || this;
                _this.keeper = new ZooKeeper_1();
                _this.keeper.nametag = "dugu";
                return _this;
            }
            return Lion;
        }(AnimalBase));
        println(createInstance(Lion).keeper.nametag);
        println(createInstance(Bee).keeper.hasMask);
        //7.枚举
        writeh2("7.枚举");
        var Direction = void 0;
        (function (Direction) {
            Direction[Direction["Up"] = 1] = "Up";
            Direction[Direction["Down"] = 2] = "Down";
            Direction[Direction["Left"] = 3] = "Left";
            Direction[Direction["Right"] = 4] = "Right";
        })(Direction || (Direction = {}));
        var FileAccess = void 0;
        (function (FileAccess) {
            FileAccess[FileAccess["None"] = 0] = "None";
            FileAccess[FileAccess["Read"] = 2] = "Read";
            FileAccess[FileAccess["Write"] = 4] = "Write";
            FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
            FileAccess[FileAccess["G"] = "123".length] = "G";
        })(FileAccess || (FileAccess = {}));
        //在生成的JS中,枚举类型被编译成一个对象
        var direction = Direction.Right;
        var files = [FileAccess.Read, FileAccess.ReadWrite];
        //8.类型推论 
        writeh2("8.类型推论");
        var num_dugu = 3; //number
        var arr_dugu = [0, 1, null]; //最佳通用类型：number[]
        var animals = [new Bee(), new Lion()];
        var animals_onther = [new Bee(), new Lion()];
        //9.类型兼容性
        writeh2("9.类型兼容性");
        var one_name = void 0;
        var two_name = { name: "dugu", age: 18 };
        one_name = two_name;
        var function_one = function (a) { return 0; };
        var function_two = function (a, b) { return 0; };
        //function_one = function_two;  //Error
        function_two = function_one;
        var eachItems = [1, 2, 3];
        eachItems.forEach(function (item, index, array) { return println(item); });
        //类型系统强制源函数的返回值类型必须是目标函数返回值类型的子类型。
        var EventType = void 0;
        (function (EventType) {
            EventType[EventType["Mouse"] = 0] = "Mouse";
            EventType[EventType["Keyboard"] = 1] = "Keyboard";
        })(EventType || (EventType = {}));
        function listenEvent(eventType, handler) {
            println("methon listenEvent called");
            var e = { timestamp: 11, x: 1, y: 2 };
            if (handler)
                handler.call(handler, e);
        }
        listenEvent(EventType.Mouse, function (e) {
            return println("(" + e.x + " " + e.y + ")");
        });
        listenEvent(EventType.Mouse, function (e) {
            var e_tmp = e;
            println("(" + e_tmp.x + " " + e_tmp.y + ")");
        });
        //10.高级类型
        writeh2("10.高级类型");
        //交叉类型是将多个类型合并为一个类型。
        function extend(first, second) {
            var result = {};
            for (var id in first) {
                result[id] = first[id];
            }
            for (var id in second) {
                if (!result.hasOwnProperty(id)) {
                    result[id] = second[id];
                }
            }
            return result;
        }
        var Person = /** @class */ (function () {
            function Person(name) {
                this.name = name;
            }
            return Person;
        }());
        var ConsoleLogger = /** @class */ (function () {
            function ConsoleLogger() {
            }
            ConsoleLogger.prototype.log = function () {
                return "log";
            };
            return ConsoleLogger;
        }());
        var jim = extend(new Person("Jim"), new ConsoleLogger());
        println(jim.name + " " + jim.log());
        //联合类型
        function padLeft(value, padding) {
            if (typeof padding == "number") {
                return Array(padding + 1).join(" ") + value;
            }
            if (typeof padding == "string") {
                return padding + value;
            }
            throw new Error("Expected string or number, got '" + padding + "'.");
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
        var SpaceRepeatingPadder_1 = /** @class */ (function () {
            function SpaceRepeatingPadder(numSpaces) {
                this.numSpaces = numSpaces;
            }
            SpaceRepeatingPadder.prototype.getPaddingString = function () {
                return Array(this.numSpaces + 1).join(" ");
            };
            return SpaceRepeatingPadder;
        }());
        var StringPadder_1 = /** @class */ (function () {
            function StringPadder(value) {
                this.value = value;
            }
            StringPadder.prototype.getPaddingString = function () {
                return this.value;
            };
            return StringPadder;
        }());
        function getRandomRadder() {
            return Math.random() < 0.5 ?
                new SpaceRepeatingPadder_1(4) :
                new StringPadder_1("    ");
        }
        //instanceof的右侧要求是一个构造函数
        var padder = getRandomRadder();
        if (padder instanceof StringPadder_1) {
            padder.getPaddingString();
        }
        if (padder instanceof SpaceRepeatingPadder_1) {
            padder.getPaddingString();
        }
        function judgeString(str) {
            return str || ""; //相当于C#中的 str ?? "";
        }
        var con = void 0;
        function area(s) {
            switch (s.kind) {
                case "square": return s.size * s.size;
                case "rectangle": return s.height * s.width;
                case "circle": return Math.PI * Math.pow(s.radius, 2);
                default: throw new Error("no shape kind return");
            }
        }
        //可以通过this，实现类或者接口的多态
        var BaseCalculator = /** @class */ (function () {
            function BaseCalculator(value) {
                if (value === void 0) { value = 0; }
                this.value = value;
            }
            BaseCalculator.prototype.currentValue = function () {
                return this.value;
            };
            BaseCalculator.prototype.add = function (operand) {
                this.value += operand;
                return this;
            };
            BaseCalculator.prototype.multiply = function (operand) {
                this.value *= operand;
                return this;
            };
            return BaseCalculator;
        }());
        var ScientficCalculator = /** @class */ (function (_super) {
            __extends(ScientficCalculator, _super);
            function ScientficCalculator(value) {
                if (value === void 0) { value = 0; }
                return _super.call(this, value) || this;
            }
            ScientficCalculator.prototype.sin = function () {
                this.value = Math.sin(this.value);
                return this;
            };
            return ScientficCalculator;
        }(BaseCalculator));
        var v = new ScientficCalculator(2)
            .multiply(5)
            .sin()
            .add(1)
            .currentValue();
        println(v);
        //索引类型 keyof T 索引类型查询操作符
        function pluck(o, names) {
            return names.map(function (n) { return o[n]; });
        }
        var people = {
            name: 'David',
            age: 35
        };
        var strings = pluck(people, ['name']);
        for (var str in strings) {
            document.write(" " + strings[str]);
        }
        var peopleProps = void 0;
        function getProperty(o, name) {
            return o[name]; // o[name] is of type T[K]
        }
        var pro = getProperty(people, peopleProps);
        println(pro.toString());
    }
    catch (error) {
        window.alert(error);
    }
}
main();
