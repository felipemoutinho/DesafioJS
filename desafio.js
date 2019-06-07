const case1 = "{[()]}";
const case2 = "{[(])}";
const case3 = "{{[[(())]]}}";

function lerDadosEntrada(dados){
    let pilhaDados = [];
    
    for (let i = 0; i < dados.split('').length ; i++) {
        if(dados[i] == '{' || dados[i] == '[' || dados[i] == '(') pilhaDados.push(dados[i]);
        else if(dados[i] == '}' || dados[i] == ']' || dados[i] == ')'){
            // console.log(pilhaDados)
            // console.log(retornaTopo(pilhaDados));
            // console.log(retornaPar(dados[i]));
            if((pilhaDados.length == 0) || (retornaTopo(pilhaDados) != retornaPar(dados[i]))){
                return "NÃO";
            }
            else pilhaDados.pop();
        }
    }
    //console.log(pilhaDados);
    return (pilhaDados.length != 0) ? "NÃO":"SIM";
}

function retornaTopo(pilha){
    return pilha[pilha.length -1];
}

function retornaPar(info){
    if(info == ')') return '(';
    else if(info == ']') return '[';
    else return '{';
}

console.log(lerDadosEntrada(case3));