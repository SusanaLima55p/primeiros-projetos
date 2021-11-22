
let men = document.getElementById('menu')
let prin = document.getElementById('prin')
let pes = document.getElementById('pes')
let link = document.getElementById('link')
let barrame = document.getElementById('barrame')
let cli = ''
let op = ''
function menu(){
    
    if(cli == 'ativo'){
        men.style.display = 'none'
        men.style.position = 'none'
        prin.style.margin = '0px'
        prin.style.margin = '30px 0px'
        barrame.style.margin = '-86px 0px 0px 0px'
        cli = ''
    } else {
        cli = 'ativo'
        men.style.display = 'grid'
        men.style.margin ='-30px 0px 0px 0px'
        prin.style.margin = '0px 0px 30px 0px'
        barrame.style.margin = '-86px 0px 0px 0px'
        link.style.margin ='-140px 0px 0px 0px'
    }
}

function mostrar(){
    if(op == 'opções'){
        op = ''
        link.style.display = 'none'
    } else{
        op = 'opções'
        link.style.display = 'block'
    }
}

pes.addEventListener('keypress', 
function buscar(event){
    console.log(event.key.charCodeAt()) 
})
