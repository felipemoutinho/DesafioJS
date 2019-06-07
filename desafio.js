const case1 = "{[()]}";
const case2 = "{[(])}";
const case3 = "{{[[(())]]}}";

function validaBrackets(brackets){
    let pilhaDados = [];
    
    for (let i = 0; i < brackets.split('').length ; i++) {
        if(brackets[i] == '{' || brackets[i] == '[' || brackets[i] == '(') pilhaDados.push(brackets[i]);
        else if(brackets[i] == '}' || brackets[i] == ']' || brackets[i] == ')'){
            // console.log(pilhaDados)
            // console.log(retornaTopo(pilhaDados));
            // console.log(retornaPar(brackets[i]));
            if((pilhaDados.length == 0) || (retornaTopo(pilhaDados) != retornaPar(brackets[i]))){
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

console.log(validaBrackets(case3));
console.log(validaBrackets(case2));
console.log(validaBrackets(case1));