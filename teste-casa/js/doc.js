var soma =[0, 0, 0, 0,]
var int = document.getElementById('int')
var botao = document.getElementById('bu')
var per1 = document.getElementById('per1')
var bper1 = document.getElementsByName('bper1')
var per2 = document.getElementById('per2')
var bper2 = document.getElementsByName('bper2')
var per3 = document.getElementById('per3')
var bper3 = document.getElementsByName('bper3')    
var per4 = document.getElementById('per4')
var bper4 = document.getElementsByName('bper4')
var per5 = document.getElementById('per5')
var bper5 = document.getElementsByName('bper5')
var per6 = document.getElementById('per6')
var bper6 = document.getElementsByName('bper6')




//passagem de pergunta
function inicio(){
    int.style.display = 'none'
    botao.style.display = 'none'
    per1.style.display = 'block'
} 
//segunda pergunta
function proxima(){
    
    if (bper1[0].checked){
        soma[0] +1.2
        per1.style.display = 'none'
        per2.style.display = 'block'
    } else if (bper1[1].checked){
        soma[1] +1.2
        per1.style.display = 'none'
        per2.style.display = 'block'
    } else  if (bper1[2].checked){        
        soma[2] +1.2
        per1.style.display = 'none'
        per2.style.display = 'block'
    } else if (bper1[3].checked){
        soma[3] +1.2
        per1.style.display = 'none'
        per2.style.display = 'block'
    } else{
    alert('Selecione uma opção!')
    }
}
// terceira pergunta 
function proxima2(){
    if (bper2[0].checked){
        soma[2] +1.3
        per2.style.display = 'none'
        per3.style.display = 'block'
    } else if (bper2[1].checked){
        soma[1] +1.3
        per2.style.display = 'none'
        per3.style.display = 'block'
    } else if (bper2[2].checked){        
        soma[3] +1.3
        per2.style.display = 'none'
        per3.style.display = 'block'
    } else if (bper2[3].checked){
        soma[0] +1.3
        per2.style.display = 'none'
        per3.style.display = 'block'
    }else{
        alert('Selecione uma opção!') 
    } 
}
//quarta pergunta
function proxima3(){
    if (bper3[0].checked){
        soma[1] += 1.7
        per3.style.display = 'none'
        per4.style.display = 'block'
    } else if (bper3[1].checked){
        soma[2] += 1.7
        per3.style.display = 'none'
        per4.style.display = 'block'
    } else if (bper3[2].checked){        
        soma[3] += 1.7
        per3.style.display = 'none'
        per4.style.display = 'block'
    } else if (bper3[3].checked){
        soma[0] += 1.7
        per3.style.display = 'none'
        per4.style.display = 'block'
    }else{
        alert('Selecione uma opção!') 
    }   
}   
//quinta pergunta
function proxima4(){
    if (bper4[0].checked){
        soma[2] +1.6
        per4.style.display = 'none'
        per5.style.display = 'block'
    } else if (bper4[1].checked){
        soma[0] +1.6
        per4.style.display = 'none'
        per5.style.display = 'block'
    } else if (bper4[2].checked){        
        soma[1] +1.6
        per4.style.display = 'none'
        per5.style.display = 'block'
    } else if (bper4[3].checked){
        soma[3] +1.6
        per4.style.display = 'none'
        per5.style.display = 'block'
    }else{
        alert('Selecione uma opção!') 
    } 
}
//sexta pergunta
function proxima5(){
    if (bper5[0].checked){
        soma[2] +1.5
        per5.style.display = 'none'
        per6.style.display = 'block'
    } else if (bper5[1].checked){
        soma[0] +1.5
        per5.style.display = 'none'
        per6.style.display = 'block'
    } else if (bper5[2].checked){        
        soma[1] +1.5
        per5.style.display = 'none'
        per6.style.display = 'block'
    } else if (bper5[3].checked){
        soma[3] +1.5
        per5.style.display = 'none'
        per6.style.display = 'block'
    } else{
        alert('Selecione uma opção!') 
    }
}
//verificação
function verificar(){
    if (bper6[0].checked){
        soma[0] ++
        resultado()
    } else if (bper6[1].checked){
        soma[1] ++
        resultado()
    } else if (bper6[2].checked){        
        soma[3] ++
        resultado()
    } else if (bper6[3].checked){
        soma[2] ++
        resultado()
    } else{
        alert('Selecione uma opção!')
    }    
}
var para = document.createElement('p')
document.getElementById('casas').appendChild(para)
var img = document.createElement('img')
document.getElementById('casas').appendChild(img)
//reultado
function resultado(){
    per6.style.display = 'none'
    //grifinoria
    if (soma[0] > soma[3] + soma[2] + soma[1]){
        para.innerHTML = `Parabéns você foi selecionado para a casa <mark id="gri">Grifinória!</mark>`
        img.src = 'imagens/gri.png'
        document.body.style.background = '#770203'
    //corvinal
    } else if (soma[1] > soma[3] + soma[2] + soma[0]){
        para.innerHTML = `Parabéns você foi selecionado para a casa <mark id="cor">Corvinal!</mark>`
        document.body.style.background = '#052e50'
        img.src = 'imagens/cor.png'
    //lufa=lufa
    } else if (soma[2] > soma[3] + soma[1] + soma[0]){  
        para.innerHTML = `Parabéns você foi selecionado para a casa <mark id="luf">Lufa-Lufa!</mark>`
        document.body.style.background = '#c19303'
        img.src = 'imagens/luf.png'
    //sonserina
    } else if(soma[3] > soma[2] + soma[1] + soma[0]){
        para.innerHTML = `Parabéns você foi selecionado para a casa <mark id="son">Sonserina!</mark>`
        document.body.style.background = '#0b362f'
        img.src = 'imagens/son.png'
    }
}
