
var gri = 0
var cor = 0
var luf = 0
var son = 0

var int = document.getElementById('int')
var botao = document.getElementById('bu')

var per1 = document.getElementById('per1')

//passagem de pergunta
function inicio(){
    int.style.display = 'none'
    botao.style.display = 'none'
    per1.style.display = 'block'

    var bper1 = document.getElementsByName('bper1')
var prox = document.getElementById('prox')
prox.addEventListener('click', proxima)

function proxima(){
    var per2 = document.getElementById('per2')
    per1.style.display = 'none'
    per2.style.display = 'block'
    var bper2 = document.getElementsByName('bper2')

var prox2 = document.getElementById('prox2')
prox2.addEventListener('click', proxima2)

function proxima2(){
    var per3 = document.getElementById('per3')
    per2.style.display = 'none'
    per3.style.display = 'block'
    var bper3 = document.getElementsByName('bper3')

var prox3 = document.getElementById('prox3')
prox3.addEventListener('click', proxima3)

function proxima3(){
    var per4 = document.getElementById('per4')
    per3.style.display = 'none'
    per4.style.display = 'block'
    var bper4 = document.getElementsByName('bper4')

var prox4 = document.getElementById('prox4')
prox4.addEventListener('click', proxima4)

function proxima4(){
    var per5 = document.getElementById('per5')
    per4.style.display = 'none'
    per5.style.display = 'block'
    var bper5 = document.getElementsByName('bper5')

var prox5 = document.getElementById('prox5')
prox5.addEventListener('click', proxima5)

function proxima5(){
    var per6 = document.getElementById('per6')
    per5.style.display = 'none'
    per6.style.display = 'block'
    var bper6 = document.getElementsByName('bper6')

var ver = document.getElementById('ver')
ver.addEventListener('click', verificar)


    //contagem de ponto
    if (bper1[0].checked){
        gri += 1
    } if (bper1[1].checked){
        cor += 1
    } if (bper1[2].checked){        
        luf += 1
    } if (bper1[3].checked){
        son += 1    
    }


    if (bper2[0].checked){
        luf += 1
    } else if (bper2[1].checked){
        cor += 1
    } else if (bper2[2].checked){        
        son += 1
    } else if (bper2[3].checked){
        gri += 1
    }

    if (bper3[0].checked){
        cor += 2
    } else if (bper3[1].checked){
        luf += 2
    } else if (bper3[2].checked){        
        son += 2
    } else if (bper3[3].checked){
        gri += 2
    }

    if (bper4[0].checked){
        luf += 1
    } else if (bper4[1].checked){
        gr1 += 1
    } else if (bper4[2].checked){        
        cor += 1
    } else if (bper4[3].checked){
        son += 1
    }

    if (bper5[0].checked){
        luf += 1
    } else if (bper5[1].checked){
        gri += 1
    } else if (bper5[2].checked){        
        cor += 1
    } else if (bper5[3].checked){
        son += 1
    }

    if (bper6[0].checked){
        gri += 1
    } else if (bper6[1].checked){
        cor += 1
    } else if (bper6[2].checked){        
        son += 1
    } else if (bper6[3].checked){
        luf += 1
    }
    
function verificar(){
    per6.style.display = 'none'
    var casa = document.getElementById('casa')
    var img = document.getElementById('emb')

    

    if (gri > son + cor + luf){
        casa.innerHTML = `Parabéns você foi selecionado para a casa <mark id="gri">Grifinória!</mark>`
        document.body.style.background = '#770203'
        img.src = 'imagens/gri.png'

    } else if (cor > son + luf + gri){
        casa.innerHTML = `Parabéns você foi selecionado para a casa <mark id="cor">Corvinal!</mark>`
        document.body.style.background = '#052e50'
        img.src = 'imagens/cor.png'

    } else if (luf > son + luf + gri){  
        casa.innerHTML = `Parabéns você foi selecionado para a casa <mark id="luf">Lufa-Lufa!</mark>`
        document.body.style.background = '#c19303'
        img.src = 'imagens/luf.png'

    } else if(son > luf + gri + luf){
        casa.innerHTML = `Parabéns você foi selecionado para a casa <mark id="son">Sonserina!</mark>`
        document.body.style.background = '#0b362f'
        img.src = 'imagens/son.png'

    }

}
}
} 
}
}
}
}