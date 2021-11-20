let men = document.getElementById('menu')
let prin = document.getElementById('prin')

let link = document.getElementById('link')
let cli = ''

function menu(){
    if(cli == 'ativo'){
        men.style.display = 'none'
        men.style.position = 'none'
        prin.style.margin = '0px'
        prin.style.margin = '30px 0px'
        cli = ''
    } else {
        cli = 'ativo'
        men.style.display = 'grid'
        men.style.position = 'relative'
        prin.style.margin = '-270px 0px 30px 0px'
    }
}

function mostrar(){
    link.style.display = 'block'
    
}

function pesquisar(event){
    console.log(event.key.charCodeAt())
}