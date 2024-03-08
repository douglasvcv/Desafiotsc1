let array : number[];
let ask: number;
let condition : boolean;

condition =true;
array = []

while(condition == true){
    ask = Number(prompt("Digite um número"))
    for(let i : number = 0; i < array.length; i++){
        if(ask == array[i]){
            console.log("Número já existente. Por favor, digite outro!")
            ask = Number(prompt("Digite um número novamente"))
        }
    }
    array.push(ask)
    var continu: number = Number(prompt("Write 1 for continue and 2 for stop!"))
    if(continu == 2){
        condition = false
    }
}

console.log(array)




