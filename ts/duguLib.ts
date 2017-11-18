
namespace System {
    export class Console {
        messge: string = "message";
        dialog: string;
        constructor() {
            this.dialog = "dugu";
        }
        public static WriteLine(message) : void {
            document.writeln(message);
            document.writeln('<br>');
        }
        public static Write(message) : void {
            document.writeln(message);
        }
    }
}


