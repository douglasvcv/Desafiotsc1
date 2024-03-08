"use strict";
let array;
let ask;
let condition;
condition = true;
array = [];
while (condition == true) {
    ask = Number(prompt("Digite um número"));
    for (let i = 0; i < array.length; i++) {
        if (ask == array[i]) {
            console.log("Número já existente. Por favor, digite outro!");
            ask = Number(prompt("Digite um número novamente"));
        }
    }
    array.push(ask);
    var continu = Number(prompt("Write 1 for continue and 2 for stop!"));
    if (continu == 2) {
        condition = false;
    }
}
console.log(array);
//# sourceMappingURL=index.js.map