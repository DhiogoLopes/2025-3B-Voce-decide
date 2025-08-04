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
                afirmacao: "Você sempre gostou de matemática e lógica. Ao ver uma oportunidade de seguir em Exatas, você foi com tudo!"
            },

            {
                texto: "HUMANAS",
                afirmacao: "Você sempre se identificou com leitura, escrita e debates. Ao ver uma oportunidade em Humanas, decidiu se jogar!"
            }
        ]
    },
    {
        enunciado: " Depois de terminar a escola, voce decide que quer começar uma faculdade e tem que escolher entre:",
        alternativas: [
            {
                texto: "DIREITO",
                afirmacao: "Você entra no curso de Direito e rapidamente se destaca nas aulas de argumentação e ética."
            },

            {
                texto: "ENGENHARIA",
                afirmacao: "Você escolhe Engenharia e se dá muito bem com cálculos, projetos e inovação."
            }
        ]
    },
    {
        enunciado: "Voce tem que estudar pra ultima prova da sua faculdade, e seus decidem fazer uma festa e voce tem que escolher entre:",
        alternativas: [
            {
                texto: " IR PARA FESTA",
                afirmacao: "Você decide ir para a festa. Foi divertido, mas acabou reprovando e teve que refazer a disciplina."
            },

            {
                texto: "ESTUDAR",
                afirmacao: "Você escolhe estudar firme e consegue não só passar, mas ainda conquistar uma oportunidade incrível de estágio."
            }
        ]
    },
    {
        enunciado: "Voce tem que escolher em o que investir:",
        alternativas: [
            {
                texto: "Na bolsa de valores",
                afirmacao: "Você estuda bastante o mercado e consegue bons rendimentos. Compra uma casa e um carro usado, mas estável."
            },

            {
                texto: "Cripto moedas",
                afirmacao: "Você acerta em cheio nas criptos e tem um retorno enorme! Compra uma mansão e carros de luxo."
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