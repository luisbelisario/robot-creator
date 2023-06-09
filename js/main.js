const controles = document.querySelectorAll(".controle-ajuste")

controles.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        console.log(evento)
        console.log(evento.target.textContent)
        console.log(evento.target.parentNode)
        manipulaDados(evento.target.textContent, evento.target.parentNode)
    })
})


function manipulaDados(operacao, controle) {
    const contador
        = controle.querySelector(".controle-contador")
    if(operacao === '-') {
        contador.value = parseInt(contador.value) - 1
    } else {
        contador.value = parseInt(contador.value) + 1
    }
}

// Em funções anônimas, não sei o nome dela, portanto ela é chamada só quando o evento for disparado
// Funções nomeadas são interessantes para quando quero chamá-la outras vezes no código, ela é conhecida, a chamo pelo nome