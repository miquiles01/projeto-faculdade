// Buscando id 
let verSenha = document.querySelector("#verSenha") 
let verSenhaConfirm = document.querySelector("#verSenhaConfirm")

let nome = document.querySelector("#nome") 
let labelNome = document.querySelector("#labelNome")
let validNome = false

let usuario = document.querySelector("#usuario") 
let labelUsuario = document.querySelector("#labelUsuario")
let validUsuario = false

let senha = document.querySelector("#senha") 
let labelSenha = document.querySelector("#labelSenha")
let validSenha = false

let confirmSenha = document.querySelector("#confirmSenha") 
let labelConfirmSenha = document.querySelector("#labelConfirmSenha")
let validConfirmSenha = false

let msgError = document.querySelector("#msgError")
let msgSuccess = document.querySelector("#msgSuccess")

// Validação campo nome - evento de Keyup, quando levantar o dento ele é acionado   
nome.addEventListener("keyup", () => {
    if(nome.value.length <= 2 ) {
        labelNome.setAttribute("style", "color: red")
        labelNome.innerHTML = 'Nome *Insina no mínimo 3 caracteres'
        // Mudando a borde
        nome.setAttribute("style", "border-color: red")
        validNome = false
    }else {
        labelNome.setAttribute("style", "color: green")
        labelNome.innerHTML = 'Nome'
        // Mudando a borde
        nome.setAttribute("style", "border-color: green")
        validNome = true
    }
})
// Validação campo usuário
usuario.addEventListener("keyup", () => {
    if(usuario.value.length <= 4 ) {
        labelUsuario.setAttribute("style", "color: red")
        labelUsuario.innerHTML = 'Usuario *Insina no mínimo 5 caracteres'
        // Mudando a borde
        usuario.setAttribute("style", "border-color: red")
        validUsuario = false
    }else {
        labelUsuario.setAttribute("style", "color: green")
        labelUsuario.innerHTML = 'Usuario'
        // Mudando a borde
        usuario.setAttribute("style", "border-color: green")
        validUsuario = true
    }
})
// Validação campo senha
senha.addEventListener("keyup", () => {
    if(senha.value.length <= 5 ) {
        labelSenha.setAttribute("style", "color: red")
        labelSenha.innerHTML = 'Senha *Insina no mínimo 6 caracteres'
        // Mudando a borde
        senha.setAttribute("style", "border-color: red")
        validSenha = false
    }else {
        labelSenha.setAttribute("style", "color: green")
        labelSenha.innerHTML = 'Senha'
        // Mudando a border-color
        senha.setAttribute("style", "border-color: green")
        validSenha = true
    }
})
confirmSenha.addEventListener("keyup", () => {
    if(confirmSenha.value != senha.value ) {
        labelConfirmSenha.setAttribute("style", "color: red")
        labelConfirmSenha.innerHTML = 'Confirmar Senha *As Senhas não conferem'
        // Mudando a border-color
        confirmSenha.setAttribute("style", "border-color: red")
        validConfirmSenha = false
    }else {
        labelConfirmSenha.setAttribute("style", "color: green")
        labelConfirmSenha.innerHTML = 'Confirmar Senha'
        // Mudando a borde
        confirmSenha.setAttribute("style", "border-color: green")
        validConfirmSenha = true
    }
})

// Função cadastrar - Se todos os campos estiverem preenchidos faça o   cadastro. Para cada campo crear uma variable valid começando como false - vazio 
function cadastar() {
    if(validNome && validUsuario && validSenha && validConfirmSenha){
        // Cadastrando usuário se estiver correto salvando no localStorage
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        // incrementar a listaUser passando um objeto
        listaUser.push( 
            {
                nomecadastrado: nome.value,
                usuarioCadastrado: usuario.value,
                senhaCadastrada: senha.value

            }
        )
        // Salvado a lista no localStorage
        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msgSuccess.setAttribute("style", "display: block")
        msgSuccess.innerHTML = 'Cadastrando Usuário...'
        // Retirando o erro se aparecer
        msgError.setAttribute("style", "display: none")

        setTimeout(() => {
                // Cadastrou o usuário voltar a tela de login
            window.location.href = 'http://127.0.0.1:5500/login.html'
        }, 3000)
        
    }else {
        msgError.setAttribute("style", "display: block")
        msgError.innerHTML = "Preencha todos os campos corretamente antes de cadastrar"

        // Se esquecer 1 campo tirar o msgSuccess 
        msgSuccess.setAttribute("style", "display: none")
        
    }
}
/*
    Mudando o eye quando clicar "password"
    1º Buscar a class do eye
    2º fazer um evento de click 
    3º dentro do evento buscar o input com id="verSenha" 
    4º fazer uma verificação, se o inputSenha for igual a password 
       mudo para text "getAttribute" busca o que esta dentro
                      "setAttribute" mudo o comando 
    se não muda para password
*/
verSenha.addEventListener("click", () => {
    let inputSenha = document.querySelector("#senha")

    if(inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    }else {
        inputSenha.setAttribute('type', 'password')
    }
})

verSenhaConfirm.addEventListener("click", () => {
    let inputVerConfirmSenha = document.querySelector("#confirmSenha")

    if(inputVerConfirmSenha.getAttribute('type') == 'password') {
        inputVerConfirmSenha.setAttribute('type', 'text')
    }else {
        inputVerConfirmSenha.setAttribute('type', 'password')
    }
})