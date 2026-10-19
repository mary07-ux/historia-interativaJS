const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "A cidade tem pouco dinheiro. Onde investir primeiro?",
    alternativas: [
      {
        texto: "Educação.",
        afirmacao: "A cidade investiu em educação, melhorando as escolas e preparando os jovens para o futuro."
      },
      {
        texto: "Saúde.",
        afirmacao: "A cidade investiu na saúde, melhorando os hospitais e o atendimento à população."
      }
    ]
  },
  {
    enunciado: "A cidade enfrenta falta de água.",
    alternativas: [
      {
        texto: "Investir em infraestrutura.",
        afirmacao: "Foram construídos reservatórios e melhoradas as redes de abastecimento, garantindo água para mais moradores."
      },
      {
        texto: "Criar campanhas de conscientização.",
        afirmacao: "A população aprendeu a economizar água, evitando desperdícios e ajudando a preservar esse recurso."
      }
    ]
  },
  {
    enunciado: "Há muito lixo nas ruas.",
    alternativas: [
      {
        texto: "Aumentar a coleta.",
        afirmacao: "A coleta de lixo foi ampliada, deixando as ruas mais limpas e melhorando a qualidade de vida."
      },
      {
        texto: "Investir em reciclagem.",
        afirmacao: "A reciclagem ganhou força, diminuindo a quantidade de lixo nos aterros e protegendo o meio ambiente."
      }
    ]
  },
  {
    enunciado: "O trânsito está piorando.",
    alternativas: [
      {
        texto: "Melhorar o transporte público.",
        afirmacao: "Com um transporte público melhor, menos pessoas precisaram usar carros, reduzindo o trânsito e a poluição."
      },
      {
        texto: "Construir novas vias.",
        afirmacao: "A construção de novas vias facilitou o deslocamento, mas também exigiu cuidados para evitar impactos ambientais."
      }
    ]
  },
  {
    enunciado: "Depois de quatro anos:",
    alternativas: [
      {
        texto: "A cidade ficou mais sustentável.",
        afirmacao: "Em 2030, a cidade ficou mais sustentável, com melhor qualidade de vida, menos poluição e maior cuidado com os recursos naturais."
      },
      {
        texto: "A cidade melhorou economicamente, mas ainda enfrenta problemas ambientais.",
        afirmacao: "Em 2030, a economia da cidade cresceu e surgiram novas oportunidades de emprego, mas ainda era necessário combater a poluição e preservar o meio ambiente."
      }
    ]
  }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }

  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = alternativa.texto;

    botaoAlternativa.addEventListener("click", () => {
      respostaSelecionada(alternativa);
    });

    caixaAlternativas.appendChild(botaoAlternativa);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacao = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacao + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "O futuro da cidade em 2030...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}
mostraPergunta();