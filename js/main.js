const controles = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controles.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        console.log(evento)
        // acessando a propriedade dataset consigo acessar os data attributes
        console.log(evento.target.dataset.controle)
        console.log(evento.target.parentNode)
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        // aqui vou passar como parâmetro o valor do data-peca
        atualizaEstatisticas(evento.target.dataset.peca)
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

function atualizaEstatisticas(peca) {
    console.log(pecas[peca])
    estatisticas.forEach((estatisticaArray) => {
        console.log(estatisticaArray.textContent)
        console.log(estatisticaArray.dataset.estatistica)
        let nomeEstatistica = estatisticaArray.dataset.estatistica
        estatisticaArray.textContent = parseInt(estatisticaArray.textContent) + pecas[peca][nomeEstatistica]
    })
}

// Em funções anônimas, não sei o nome dela, portanto ela é chamada só quando o evento for disparado
// Funções nomeadas são interessantes para quando quero chamá-la outras vezes no código, ela é conhecida, a chamo pelo nome