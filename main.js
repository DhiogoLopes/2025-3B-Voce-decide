const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');
const perguntas = [

    {
        enunciado: "Você é um estudante de ensino médio com 15 anos, acabou de terminar o 1° Ano do ensino médio, e se encontra tendo que decidir se vai ir pra Exatas ou Humanas:",
        alternativas: [
            {
                texto: "EXATAS",
                afirmacao: "voce Se encontrou nas exatas desde pequeno, viu uma oportunidade de entrar pra exatas e foi de cabeça,"
            },

            {
                texto: "HUMANAS",
                afirmacao: "voce Se encontrou nas Humanas desde pequeno, viu uma oportunidade de entrar pra Humanas e foi de cabeça,"
            }
        ]
    },
    {
        enunciado: " Depois de terminar a escola, voce decide que quer começar uma faculdade e tem que escolher entre:",
        alternativas: [
            {
                texto: "DIREITO",
                afirmacao: "entao decide fazer direito e se da muito bem,"
            },

            {
                texto: "ENGENHARIA",
                afirmacao: "entao decide fazer engenharia e se da muito bem,"
            }
        ]
    },
    {
        enunciado: "Voce tem que estudar pra ultima prova da sua faculdade, e seus decidem fazer uma festa e voce tem que escolher entre:",
        alternativas: [
            {
                texto: " IR PARA FESTA",
                afirmacao: "mas nao consegue encontrar uma profissao boa, e vive trabalhando em um mercado"
            },

            {
                texto: "ESTUDAR",
                afirmacao: "mas voce acha uma profissao dos sonhos"
            }
        ]
    },
    {
        enunciado: "Voce tem que escolher em o que investir:",
        alternativas: [
            {
                texto: "Na bolsa de valores",
                afirmacao: "mas voce de da bem e compra uma casa e um carro nao muito novo."
            },

            {
                texto: "Cripto moedas",
                afirmacao: "mas voce se da muito bem financeiramente com seus investimento e compra uma Mansao e varios carros dos sonhos!!."
            }
        ]
    }

]


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostreResultado();
        return;
    }
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado
    caixaAlternativas.textContent = ""
    mostraAlternativas()
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respotaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respotaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " "
    atual++
    mostraPergunta();
}

function mostreResultado() {
    caixaPerguntas.textContent = "skibii"
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

console.log(perguntas)