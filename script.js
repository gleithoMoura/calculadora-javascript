// AC3 Gleitho Suelvillis Moura - RA: 1902351

let btn_lista = document.getElementsByClassName('numero')
let content = document.getElementById('resultado')
let btn_click = ''
let num1 = ''
let num2 = ''
let btn_op = ''

for(let i = 0; i < btn_lista.length; i++){
    btn_lista[i].onclick = function(){
        btn_click = btn_lista[i].innerText;
        inserir_numero(btn_click);
    }
}


function inserir_numero(btn_click){
    if(btn_op == ''){
        if(num1 == '' && btn_click == '.' ){
            num1 += btn_click
            return content.value += btn_click
        }else if(btn_click != '.' || num1.indexOf('.') == '-1'){
            num1 += btn_click    
            return content.value += btn_click
        }
    }
    if(btn_op != ''){
        if(num2 == '' && btn_click == '.'){
            num2 += btn_click
            return content.value += btn_click
        }else if(btn_click != '.' || num2.indexOf('.') == '-1'){
            num2 += btn_click
            return content.value += btn_click
        }
    }
}


function operador(op){
    if (content.value == ''){
        alert('imposible')
    }else if(content.value.indexOf(op.innerText) == '-1' && btn_op == ''){
        btn_op = op.innerText;
        content.value += btn_op
    }
}


let soma = document.getElementsByClassName('operacao somar')
soma[0].onclick = function(){
        operador(soma[0])
}

let subtrair = document.getElementsByClassName('operacao subtrair')
subtrair[0].onclick = function(){
    operador(subtrair[0])
}

let multiplicar = document.getElementsByClassName('operacao multiplicar')
multiplicar[0].onclick = function(){
    operador(multiplicar[0])
}

let dividir = document.getElementsByClassName('operacao dividir')
dividir[0].onclick = function(){
    operador(dividir[0])
}


let resultar = document.getElementsByClassName('resultar')
resultar[0].onclick = function(){
    calcular()
}


function calcular(){
    if(content.value == ''){
        return alert('Erro de operação')
    }
    else if (content.value != ''){
        content.value = num1
    }
    if(btn_op == '+'){
        result = parseFloat(num1) + parseFloat(num2)
        content.value = result
    }
    if(btn_op == '-'){
        result = parseFloat(num1) - parseFloat(num2)
        content.value = result
    }
    if(btn_op == '*'){
        result = parseFloat(num1) * parseFloat(num2)
        content.value = result
    }
    if(btn_op == '/'){
        result = parseFloat(num1) / parseFloat(num2)
        content.value = result
    }
}
