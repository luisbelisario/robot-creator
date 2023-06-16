const controles = document.querySelectorAll("[data-controle]")

controles.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        console.log(evento)
        // acessando a propriedade dataset consigo acessar os data attributes
        console.log(evento.target.dataset.controle)
        console.log(evento.target.parentNode)
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
    })
})


function manipulaDados(operacao, controle) {
    const contador
        = controle.querySelector("[data-contador]")
    if(operacao === '-') {
        contador.value = parseInt(contador.value) - 1
    } else {
        contador.value = parseInt(contador.value) + 1
    }
}

// Em funções anônimas, não sei o nome dela, portanto ela é chamada só quando o evento for disparado
// Funções nomeadas são interessantes para quando quero chamá-la outras vezes no código, ela é conhecida, a chamo pelo nome