
class Student 
{
    fullName: string; 
    constructor(public firstName = "", public middleInitial = ""
    , public lastName = "")
    { 
        this.fullName = firstName + " " + middleInitial + " " + lastName; 
    } 
    getName() : string{
        return "DuGu";
    }
} 
interface Person 
{ 
    firstName: string; 
    lastName: string; 
} 

enum Color
{
    Red = 1,
    Blue = 2,
    Yellow = 3
}

function greeter(person : Person) 
{ 
    return "Hello, " + person.firstName + " " + person.lastName;    
} 

function voidFunc() : void{

}

function writeLine(message){
    document.write(message + "<br>");
}

function println(message){
    document.write(message + "<br>");
}

function writeh2(message){
    document.write(`<h2>${message}</h2>`);
}

function main(){
    try {
         //1.基础类型，ts的类型声明
        writeh2("1.基础类型，ts的类型声明");
        let isDone : boolean = false;           //布尔类型
        let myNum : number = 0xff;              //数字
        let dugu : string = "duguStr";          //字符串
        let mobanStr = `sad ${ isDone } `;      //模板字符串
        let lists : number[] = [1,2,3];         //数组
        let nums : Array<number> = [1,2,3];     //泛型数组
        let xTuple = ["123",123];               //元组
        let color = Color.Red;          //枚举
        let arrs : any = [1,"2",false];
        var user = new Student("DuGu", "DuGu", "User"); //class类

        let u : undefined = undefined
        let n : null = null;

        let someValue = "this is a string";
        let strLength : number = (someValue as string).length;
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
        let letVar = 1;
        const cVar = 1;
        //cVar = 2; // error
        //使用var let const 采取最小特权原则.
        //解构数组
        let arrin = [1,2,3,4]
        let [fisrt, ...seonnd] = arrin;
        let [,third,,fourth] = arrin;
        writeLine(`${fisrt} and ${seonnd} 
            and ${third} and ${fourth}`);
        //对象解构
        let {a,...b} = {a:"dugu",b:"Dugu",c:"lala"};
        //默认值
        function testMoren(wholeObj : {a:string,b?:number}){
            let{a,b = 1001} = wholeObj;
        }
        //函数指定默认值
        function fss({a,b} = {a : "",b : 1}){

        }
        //3.接口
        writeh2("3.接口");
        interface Label{
            readonly font:string;
            fontSize:number;
        }
        function printLabel(lable:Label){
            writeLine(lable.font);
        }
        let la : Label = {font : "宋体",fontSize :14};
        //不可变数组
        let ro : ReadonlyArray<number> = [1,2,3,4];
        //函数类型
        interface Fly{
            (num:number):boolean;
        }
        let fly : Fly;
        fly = (num) => {
            return false;
        }
        println(fly.call(fly,1));
        //索引签名
        interface StringArray{
            [index:number] : string;
        }
        let strArr : StringArray;
        strArr = ["dugu","DuGu"];
        println(strArr[0]);
        println(strArr);
        //
        class Animal{
            name:string;
        }
        class Dog extends Animal{
            breed : string;
        }
        //实现接口，与c#或者java基本一致
        interface ClockConstructor {
            new (hour: number, minute: number): ClockInterface;
        }
        interface ClockInterface {
            tick() : string;
        }
        
        function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
            return new ctor(hour, minute);
        }
        
        class DigitalClock implements ClockInterface {
            constructor(h: number, m: number) { }
            tick() {
                console.log("beep beep");
                return "beep beep";
            }
        }
        class AnalogClock implements ClockInterface {
            constructor(h: number, m: number) { }
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
        //继承接口,并且可以多继承,js混合类型
        interface Counter{
            (start:number) : string;
            interval : number;
            reset() : void
        }
        function createCounter() : Counter{
            let counter = <Counter>function(start:number){return "11"};
            counter.interval = 10;
            counter.reset = () => {};
            return counter;
        }
        let c = createCounter();
        println(`${c(10)} and ${c.interval}`);
        //接口继承类，当接口继承了一个类型时，会继承成员但是不包括其实现
        //这个接口类型只能被这个类或其子类所实现（implement）。
        //如下例子，单独实现接口SelectedControl但不继承Control类会报错
        class Control{
            private state : string;
        }
        interface SelectedControl extends Control{
            select() : string
        }
        class Button extends Control implements SelectedControl{
            select(){
                return "selected";
            }
        }

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
        class Greeter{
            public static total:number = 0;
            public readonly greeting: string;
            private _internalVar : number = 2;
            get internalVar() : number{
                return this._internalVar;
            }
            set internalVar(num:number){
                if(num < 10 && num > 0)
                    this._internalVar = num;
            }
            protected proVar :number;
            constructor(message:string){
                this.greeting = message;
                Greeter.total += 1;
            }
            greet(){
                
                return "Hello " + this.greeting;
            }
        }
        let greter = new Greeter("DuGu");
        let varStr = greter.internalVar.toString();
        println(greter.greet());
        println(varStr);
        class ChildGreeter extends Greeter{
            constructor(message:string){
                super(message);
                this.proVar = 1;
                //访问不到internalVar
            }
            greet(){
                return "Hello Child " + this.greeting;
            }
        }
        let me : Greeter = new ChildGreeter("heihei");
        println(me.greet());
        async function writeAsync(str:string){
            document.write(str + "<br>");
        }
        //await writeAsync("async func");
        println(ChildGreeter.total);
        //抽象类
        abstract class Element{
            abstract makeSound() : void;
            move() : void{

            }
        }
        class UIElement extends Element{
            makeSound(): void {
                
            }            
        }
        
        //5.函数
        writeh2("5.函数");
        //为函数定义类型,x?为可空类型
        function add(x?:number,y?:number) : number{
            if(x && y)
                return x + y;
            else
                return NaN;
        }
        let myAdd = add; 
        println(myAdd.call(myAdd,2,4));
        println(add(null,null));
        println(add(undefined,undefined));
        //书写函数完整类型
        let mySub: (x: number, y: number) => number =
            function(x: number, y: number): number { return x - y; };
        println(mySub(2.4,1.34));
        //剩余参数
        function nameBuilder(firstName:string, ...restOfName:string[]):string{
            return firstName + ' ' + restOfName.join(' ');
        }
        println("DuGu");
        //重点：this和箭头函数
        //在JS里面，this的值在函数被调用的时候才会指定
        let deck = {
            cards : ["A","B","C","D"],
            suits : Array(52),
            createCardPicker : function(){
                //this.cards = []; //error
                return () => {
                    //this.cards = []; //error
                    let pickedCard = Math.floor(Math.random() * 52);
                    let pickedSuit = Math.cos(0.1);
                }   
            }
        }

        //6.泛型
        writeh2("6.泛型");
        function identity<T>(arg : T) : T{
            return arg;
        }
        let output = identity("String");
        println(output);
        interface IShape<T>{
            draw<T>(arg : T) : T;
        }
        class Circle implements IShape<number>{
            draw<T>(arg: T): T {
                return arg;
            }           
        }
        let mea : IShape<number>;
        mea = new Circle();
        println(mea.draw(123));
        class Collection<T>{
            content : T;
            add:(x:T, y:T) => T;
        }
        let myCollection = new Collection<number>();
        myCollection.add = (x, y) => x + y;
        println(myCollection.add(12,12));
        //泛型约束
        interface LengthWise{
            length : number;
        }
        function loggingLength<T extends LengthWise>(arg:T){
            return arg.length;
        }
        println(loggingLength({length : 3, max : 10}));
        //在泛型中使用类型参数
        //在泛型里面使用类类型
        function createInstance<T>(c : {new() : T}) : T{
            return new c();
        }
        class BeeKeeper {
            hasMask: boolean;
        }
        
        class ZooKeeper {
            nametag: string;
        }
        
        class AnimalBase {
            numLegs: number;
        }
        
        class Bee extends AnimalBase {
            keeper: BeeKeeper;
            constructor()  {
                super()
                this.keeper = new BeeKeeper();
                this.keeper.hasMask = false;
            }
        }
        
        class Lion extends AnimalBase {
            keeper: ZooKeeper;
            constructor()  {
                super()
                this.keeper = new ZooKeeper();
                this.keeper.nametag = "dugu";
            }
        }
        println(createInstance(Lion).keeper.nametag);
        println(createInstance(Bee).keeper.hasMask);

        //7.枚举
        writeh2("7.枚举");
        enum Direction{
            Up = 1,
            Down,
            Left,
            Right
        }
        enum FileAccess{
            None,
            Read = 1 << 1,
            Write = 1 << 2,
            ReadWrite = Read | Write,
            G = "123".length
        }
        //在生成的JS中,枚举类型被编译成一个对象
        let direction = Direction.Right;
        let files = [FileAccess.Read, FileAccess.ReadWrite ];

        //8.类型推论 
        writeh2("8.类型推论");
        let num_dugu = 3;     //number
        let arr_dugu = [0, 1, null]; //最佳通用类型：number[]
        let animals : AnimalBase[] = [new Bee(),new Lion()];
        let animals_onther = [new Bee(),new Lion()];

        //9.类型兼容性
        writeh2("9.类型兼容性");
        //如果x要兼容y，那么y至少具有与x相同的属性。比如：
        interface Named{
            name : string;
        }
        let one_name : Named;
        let two_name = {name : "dugu", age : 18};
        one_name = two_name;
        let function_one = (a : number) => 0;
        let function_two = (a : number, b : string) => 0;
        //function_one = function_two;  //Error
        function_two = function_one;
        let eachItems = [1, 2, 3];
        eachItems.forEach((item,index,array) => println(item));
        //类型系统强制源函数的返回值类型必须是目标函数返回值类型的子类型。
        enum EventType {Mouse, Keyboard}
        interface Event{
            timestamp : number;
        }
        interface MouseEvent extends Event{
            x : number;  y : number;
        }
        interface KeyEvent extends Event{
            keyCode : number;
        }
        function listenEvent(eventType : EventType, handler : (n : Event) => void){
            println("methon listenEvent called");
            let e = {timestamp : 11 , x : 1, y : 2};
            if(handler)
                handler.call(handler, e);
        }

        listenEvent(EventType.Mouse, (e:MouseEvent) => 
            println(`(${e.x} ${e.y})`));

        listenEvent(EventType.Mouse, (e : Event) => {
            let e_tmp = e as MouseEvent;
            println(`(${e_tmp.x} ${e_tmp.y})`);
        }); 

        //10.高级类型
        writeh2("10.高级类型");
        //交叉类型是将多个类型合并为一个类型。
        function extend<T,U>(first : T, second : U) : T & U {
            let result = <T & U> {};
            for(let id in first)
            {
                (<any>result)[id] = (<any>first)[id];
            }
            for(let id in second)
            {
                if(!result.hasOwnProperty(id)){
                    (<any>result)[id] = (<any>second)[id];
                }
            }
            return result;
        }
        class Person {
            constructor(public name : string){}
        }
        interface Loggable {
            log() : string;
        }
        class ConsoleLogger implements Loggable {
            log(): string {
                return "log";
            }          
        }
        var jim = extend(new Person("Jim"), new ConsoleLogger());
        println(`${jim.name} ${jim.log()}`);
        //联合类型
        function padLeft(value : string, padding : any) {
            if( typeof padding == "number") {
                return Array(padding + 1).join(" ") + value;
            }
            if(typeof padding == "string") {
                return padding + value;
            }
            throw new Error(`Expected string or number, got '${padding}'.`)
        }
        println(padLeft("left", 4));
        println(padLeft("left", "space"));
        function padRight(value : string, padding : number | string) {
            if( typeof padding === "number") {
                return value + Array(padding + 1).join(" ");
            }
            if(typeof padding === "string") {
                return value + padding ;
            }
        }
        println(padRight("Right", 6));
        println(padRight("right", " dugu"));
        //如果一个函数返回值是联合类型，
        //我们只能访问此联合类型的所有类型里共有的成员。
        
        //instanceof 类型保护
        interface Padder {
            getPaddingString() : string
        }
        class SpaceRepeatingPadder implements Padder {
            constructor(private numSpaces : number) {

            }
            getPaddingString(): string {
                return Array(this.numSpaces + 1).join(" ");
            }         
        }
        class StringPadder implements Padder {
            getPaddingString(): string {
                return this.value
            }
            constructor(private value : string) {

            }
        }
        function getRandomRadder() {
            return Math.random() < 0.5 ?
                new SpaceRepeatingPadder(4) :
                new StringPadder("    ");
        }
        //instanceof的右侧要求是一个构造函数
        let padder : Padder = getRandomRadder();
        if(padder instanceof StringPadder) {
            padder.getPaddingString();
        }
        if(padder instanceof SpaceRepeatingPadder) {
            padder.getPaddingString();
        }
        //可选参数
        //可选参数会被自动地加上| undefined:
        //而不是加上|null
        interface Ruler {
            Rules? : Array<number>;
        }
        function judgeString(str : string | null) : string 
        {
            return str || ""; //相当于C#中的 str ?? "";
        }
        //类型别名
        type Name = string;
        type NameResolver = () => string;
        type Container<T> = {
            value : T,
            num : number,
            str : string
        }
        //与交叉类型一起使用，
        //我们可以创建出一些十分稀奇古怪的类型。
        type ContainerList<T> = T & {next : Container<T>} & Container<T>;
        let con : ContainerList<string>;
        //类型别名不能被extends和implements
        //字符串字面量类型
        //字符串字面量类型允许你指定字符串必须的固定值
        type Animation = "Rotate" | "Scale" | "Align";
        //可辨识联合（Discriminated Unions）
        interface Square {
            kind : "square";
            size : number;
        }
        interface Rectangle {
            kind : "rectangle";
            width : number;
            height : number;
        }
        interface Circle {
            kind : "circle";
            radius : number;
        }
        type Shape = Square | Rectangle | Circle;
        function area(s : Shape) {
            switch(s.kind) {
                case "square" : return s.size * s.size;
                case "rectangle" : return s.height * s.width;
                case "circle" : return Math.PI * s.radius ** 2;
                default : throw new Error("no shape kind return");
            }
        }
        //可以通过this，实现类或者接口的多态
        class BaseCalculator {
            public constructor(protected value : number = 0) { }
            public currentValue() : number {
                return this.value;
            }
            public add(operand : number) : this {
                this.value += operand;
                return this;
            }
            public multiply(operand : number) {
                this.value *= operand;
                return this;
            }
        }
        class ScientficCalculator extends BaseCalculator {
            public constructor(value = 0) {
                super(value);
            }
            public sin() {
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
        function pluck<T, K extends keyof T>(o : T, names : K[]) : T[K][] {
            return names.map(n => o[n]);
        }  
        interface People {
            name : string;
            age : number;
        }
        let people : People = {
            name : 'David',
            age : 35
        }
        let strings : string[] = pluck(people, ['name']);
        for(let str in strings) {
            document.write(` ${strings[str]}`);
        }
        let peopleProps : keyof People;
        function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
            return o[name]; // o[name] is of type T[K]
        }
        let pro = getProperty(people,"name");
        println(pro.toString());
        //索引类型和字符索引签名
        interface Map<T> {
            [key : string] : T
        }
        let keys : keyof Map<number>;
        let value : Map<number>['foo'];
        //映射类型
        interface PersonPartial {
            name? : string;
            age? : number;
        }
        interface PersonReadonly {
            readonly name : string;
            readonly age : number;
        }
        type Readonly<T> = {
            readonly [P in keyof T] : T[P];
        }
        type Nullable<T> = { [P in keyof T] : T[P] | null};
        type Partial<T> = { [P in keyof T]? : T[P] };
        type Keys = 'option1' | 'option2';
        type Flags = { [K in Keys] : boolean };
        type Proxy<T> = {
            get() : T;
            set(value : T) :void;
        }
        type Proxify<T> = {
            [P in keyof T] : Proxy<T[P]>; 
        }
        type Pick<T, K extends keyof T> = {
            [P in K] : T[P];
        }
        type Record<K extends string, T> = {
            [P in K] : T;
        }
        type ThreeStringProps = Record<'prop1' | 'prop2' | 'prop3', string>;
        function upproxify<T>(t : Proxify<T>) : T {
            let result = {} as T;
            for(const k in t){
                result[k] = t[k].get();
            }
            return result;
        }
        
        //11.Symbols
        writeh2("Symbols");
    } 
    catch (error) {
        window.alert(error);
    }
}

main();
