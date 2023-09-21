const menuDiv = document.getElementById('menu-mobile')
const btnAni = document.getElementById('btn-menu')

menuDiv.addEventListener('click', aniMenu)

function aniMenu(){
    menuDiv.classList.toggle('abrir')
    btnAni.classList.toggle('ativo')
}