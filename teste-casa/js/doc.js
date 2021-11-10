var botao = document.getElementById('bu')
botao.addEventListener('click', inicio)
var res = 0 

function inicio(){
    botao.style.display = 'none'
    var per1 = document.getElementById('per1')
    per1.style.display = 'block'
    var bper1 = document.getElementsByName('bper1')
    
    
    if (bper1[0].checked){
        res = 1
    } if (bper1[1].checked){
        res = 2
    } if (bper1[2].checked){        
        res = 3
    } if (bper1[3].checked){
        res = 4
    }


var prox = document.getElementById('prox')
prox.addEventListener('click', proxima)

function proxima(){
    var per2 = document.getElementById('per2')
    per1.style.display = 'none'
    per2.style.display = 'block'
    var bper2 = document.getElementsByName('bper2')

    if (bper2[0].checked){
        res + 1
    } else if (bper2[1].checked){
        res + 2
    } else if (bper2[2].checked){        
        res + 4
    } else if (bper2[3].checked){
        res + 3
    }

    

var prox2 = document.getElementById('prox2')
prox2.addEventListener('click', proxima2)

function proxima2(){
    var per3 = document.getElementById('per3')
    per2.style.display = 'none'
    per3.style.display = 'block'
    var bper3 = document.getElementsByName('bper3')

    if (bper3[0].checked){
        res += 2
    } else if (bper3[1].checked){
        res += 3
    } else if (bper3[2].checked){        
        res += 4
    } else if (bper3[3].checked){
        res += 1
    }


var prox3 = document.getElementById('prox3')
prox3.addEventListener('click', proxima3)

function proxima3(){
    var per4 = document.getElementById('per4')
    per3.style.display = 'none'
    per4.style.display = 'block'
    var bper4 = document.getElementsByName('bper4')

    if (bper4[0].checked){
        res += 1
    } else if (bper4[1].checked){
        res += 3
    } else if (bper4[2].checked){        
        res += 2
    } else if (bper4[3].checked){
        res += 4
    }


var prox4 = document.getElementById('prox4')
prox4.addEventListener('click', proxima4)

function proxima4(){
    var per5 = document.getElementById('per5')
    per4.style.display = 'none'
    per5.style.display = 'block'
    var bper5 = document.getElementsByName('bper5')

    if (bper5[0].checked){
        res += 3
    } else if (bper5[1].checked){
        res += 1
    } else if (bper5[2].checked){        
        res += 2
    } else if (bper5[3].checked){
        res += 4
    }


var prox5 = document.getElementById('prox5')
prox5.addEventListener('click', proxima5)

function proxima5(){
    var per6 = document.getElementById('per6')
    per5.style.display = 'none'
    per6.style.display = 'block'
    var bper6 = document.getElementsByName('bper6')

    if (bper6[0].checked){
        res += 3
    } else if (bper6[1].checked){
        res += 1
    } else if (bper6[2].checked){        
        res += 4
    } else if (bper6[3].checked){
        res += 2
    }


var ver = document.getElementById('ver')
ver.addEventListener('click', verificar)

function verificar(){
    per6.style.display = 'none'
    var casa = document.getElementById('casa')

    if (res >= 0  && res < 10){
        casa.innerHTML = `Parabéns você foi selecionado para a casa Grifinória!${res}`

    } else if (res >= 10  && res < 16){
        casa.innerHTML = `Parabéns você foi selecionado para a casa Corvinal!${res}`


    } else if (res >= 16  && res < 20){  
        casa.innerHTML = `Parabéns você foi selecionado para a casa Lufa-Lufa!${res}`


    } else {
        casa.innerHTML = `Parabéns você foi selecionado para a casa Sonserina!${res}`


    }

}
}
} 
}
}
}
}