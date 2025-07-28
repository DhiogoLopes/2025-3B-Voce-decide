const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-principal');
const textoResultado = document.querySelector('.texto-resultado');
const perguntas = [

    {
        enunciado: "Pergunta 1",
        alternativas: [
            {
                texto: "alternativa 01",
                afirmacao: "resultado 01"
            },
            {
                texto: "alternativa 02",
                afirmacao: "resultado 02"
            }
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            {
                texto: "alternativa 03",
                afirmacao: "resultado 03"
            },
            {
                texto: "alternativa 04",
                afirmacao: "resultado04"
            }
        ]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: [
            {
                texto: "alternativa 05",
                afirmacao: "resultado 05"
            },
            {
                texto: "alternativa 06",
                afirmacao: "resultado 06"
            }
        ]
    },
    {
        enunciado: "Pergunta 4",
        alternativas: [
            {
                texto: "alternativa 07",
                afirmacao: "resultado 07"
            },
            {
                texto: "alternativa 08",
                afirmacao: "resultado 08"
            }
        ]
    }

]


let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostreResultado();
        return;
    }
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado
    caixaAlternativas.textContent= ""
    mostraAlternativas()
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", ()=> respotaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respotaSelecionada(opcaoSelecionada){
    const afirmacao = opcapSelecionaa.afirmacao
    hitoriaFinal += afirmacao + " "
    atual++
    mostraPergunta();
}

function mostreResultado(){
    caixaPerguntas.textContent= "skibii"
    textoResultado.textContent= hitoriaFinal;
    caixaAlternativas.textContent= "";
}

mostraPergunta();

console.log(perguntas)