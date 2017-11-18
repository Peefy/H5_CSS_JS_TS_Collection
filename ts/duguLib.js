var System;
(function (System) {
    class Console {
        constructor() {
            this.messge = "message";
            this.dialog = "dugu";
        }
        static WriteLine(message) {
            document.writeln(message);
            document.writeln('<br>');
        }
        static Write(message) {
            document.writeln(message);
        }
    }
    System.Console = Console;
})(System || (System = {}));
