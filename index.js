let userLogado = JSON.parse(localStorage.getItem('userLogado'))
let logado = document.querySelector("#logado")
logado.innerHTML = `Olá ${userLogado.nome}`

if(localStorage.getItem('token') == null) {
    alert("Você precisa está logado para acessar essa página")
    window.location.href ='http://127.0.0.1:5500/login.html'
}

// Funtion sair, quando clicar em sair, voltar a tela de login e apagar o token e userLogado
function sair() {
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href ='http://127.0.0.1:5500/login.html'
}