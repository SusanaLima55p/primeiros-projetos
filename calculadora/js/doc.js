let vis = document.getElementById('visor')
let nu1 = []
let sinal = ''
let resu = document.getElementById('resultado')
function menu(){
    alert('esse é o menu')
}
function um(){
    vis.value += 1
    resu.innerHTML += '1'
}
function dois(){
    vis.value += 2
    resu.innerHTML += '2'
}
function tres(){
    vis.value += 3
    resu.innerHTML += '3'
}
function quatro(){
    vis.value += 4
    resu.innerHTML += '4'
}
function cinco(){
    vis.value += 5
    resu.innerHTML += '5'
}
function seis(){
    vis.value += 6
    resu.innerHTML += '6'
}
function sete(){
    vis.value += 7
    resu.innerHTML += '7'
}
function oito(){
    vis.value += 8
    resu.innerHTML += '8'
}
function nove(){
    vis.value += 9
    resu.innerHTML += '9'
}
function zero(){
    vis.value += 0
    resu.innerHTML += '0'
}
function mais(){
    nu1[0] = vis.value
    resu.innerHTML = '+'
    sinal = '+'
    vis.value = ``
}
function menos(){
    nu1[0] = vis.value
    resu.innerHTML = '-'
    sinal = '-'
    vis.value = ``
}
function mult(){
    nu1[0] = vis.value
    resu.innerHTML = '*'
    sinal = '*'
    vis.value = ``
}
function divi(){
    nu1[0] = vis.value
    resu.innerHTML = '/'
    sinal = '/'
    vis.value = ``
}
function del(){
    vis.value = ``
    resu.innerHTML = ''
}

function igual(){
    if(nu1.length == 0){
        alert('digite sua operação')
    } else{
    nu1[1] = vis.value
    vis.value = ''
    let res = 0
    var n1 = Number(nu1[0])
    var n2 = Number(nu1[1])
        if(sinal == '+'){
            res = (n1 + n2)
        } else if(sinal == '-'){
            res = (n1 - n2)
        } else if(sinal == '*'){
            res = (n1 * n2)
        } else if(sinal == '/'){
            if(n1 == 0 || n2 == 0 ){
                res = 0
            }else {
            res = (n1 / n2)
            }
        }
        vis.value = res
        resu.innerHTML = `${res}`
    }
}