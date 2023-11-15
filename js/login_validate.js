function validar() {
    /* declarando as variáveis*/
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;

    /*fazendo  if e else para validar os campos */
    if (usuario == 'Admin' && senha == '123456') {
        //chama a tela do index
        window.location.href = ('/produtos.html');

    } else {
        alert('usuário ou senha inválidos');
    }
}

const button = document.getElementById("criar__conta");

button.addEventListener("click", function () {
    window.location.href = "conta.html";
})

const form = document.querySelector("form")

form.addEventListener("submit", function (event) {
    event.preventDefault();
    validar();
})