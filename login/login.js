// Lógica do botão olho
let btn = document.querySelector(".bi-eye") 
btn.addEventListener("click", () => {
    let inputSenha = document.querySelector("#senha")

    if(inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    }else {
        inputSenha.setAttribute('type', 'password')
    }
})

/*
    Lógica para entrar, quando clicar no botão de entrar
    1º Buscar inputs e as label
*/
function entrar() {
    let usuario = document.querySelector("#usuario")
    let userLabel = document.querySelector("#userLabel")

    let senha = document.querySelector("#senha")
    let senhaLabel = document.querySelector("#senhaLabel")

    let msgError = document.querySelector("#msgError")

    // Criar lista de user, para pegar o que está no localStorage
    let listaUser = []

    // Criando um objeto, porque temos um objeto cadastrado
    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }
    // Pegando a lista que está no localStorage e guardado em uma variável
    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    //console.log(listaUser) //Verifico se está tudo correto
    
    // Validando os campos, passa por todo array, se estiver o usuário entra
    listaUser.forEach(item => {
        if(usuario.value == item.usuarioCadastrado && senha.value == item.senhaCadastrada){

            userValid = {

                nome: item.nomecadastrado,
                user: item.usuarioCadastrado,
                senha: item.senhaCadastrada
            }
        }
    });
    //console.log(userValid)//verificando se está tudo correto

    // Fazendo a verificação se o usuário estiver cadastrado
    if(usuario.value == userValid.user && senha.value == userValid.senha){
        // Se estiver cadastro vá direto para a página 
        window.location.href = 'http://127.0.0.1:5500/index.html'

        // Criação do Tokem de verificação, não é obrigatório, mas garanto que o usuário está logado
        let token = Math.random().toString(16).substr(2)
        // console.log(tokem) //verificando

        // Guardando no localStorage
        localStorage.setItem('token', token)

        // Colocando o nome do usuário na tela principal
        localStorage.setItem('userLogado', JSON.stringify(userValid))

    }else {
        // Se não estiver correto
        userLabel.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        msgError.setAttribute("style", "display: block")
        msgError.innerHTML = 'Usuário ou senha incorretos'
        // Focus para voltar a digitar 
        usuario.focus()
    }
}