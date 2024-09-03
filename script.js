const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Quantos cavalos tem um GTR-R34?",
    alternativas: [
        {
            texto:"280CV",
            afirmacao: "afirmação 1"
        },
        {
        texto:"340CV",
        afirmacao: "afirmação 2"
        }
    ]
},

{
    enunciado: "Qual p carro mais rápido do mundo?",
    alternativas: [
        {

        texto: "Hennessey Venom F5.",
        afirmacao: "afirmação 3"
        },
        {
        texto:"Bugatti Chiron Super Sport.",
        afirmacao: "afirmação 4"
        }
    ]
},

{
    enunciado: "Qual o carro com mais CV do mundo?",
    alternativas: [
        {
        texto:"Koenigsegg Jesko.",
        afirmacao: "afirmação 5"
        },
        {
        texto:"Renault Twizy.",
        afirmacao: "afirmação 6"
        }
    ]
}

]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return; 
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", ()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}
function mostraResultado(){
caixaPerguntas.textContent = "Suas ações mudam o mundo!";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}

mostraPergunta();
