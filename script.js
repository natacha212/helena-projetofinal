const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quais são as principais causas de intolerância religiosa em sua opinião",
        alternativas: [
            {
                texto: "Falta de Conhecimento e Educação",
                afirmacao: "Muitas vezes, a intolerância religiosa surge da falta de conhecimento sobre outras religiões e crenças. A falta de educação pode levar a estereótipos e mal-entendidos."
            },
            {
                texto: "Falta de Tolerância à Diversidade",
                afirmacao: " Em sociedades que não valorizam a diversidade, é mais provável que haja intolerância religiosa, pois a falta de aceitação de diferenças pode se manifestar em hostilidade."
            }
        ]
    },
    {
        enunciado: "Quais são os impactos sociais da intolerância religiosa?",
        alternativas: [
            {
                texto: "Discute como a intolerância religiosa pode afetar a saúde mental e o bem-estar dos indivíduos afetados.",
                afirmacao: "Identificou que a intolerância religiosa pode contribuir para problemas de saúde mental e prejudicar o bem-estar dos indivíduos que a experienciam."
            },
            {
                texto: "Explora a influência da intolerância religiosa na marginalização e discriminação de minorias religiosas.",
                afirmacao: "Reconheceu que a intolerância religiosa frequentemente leva à marginalização e ao tratamento injusto de grupos religiosos minoritários."
            }
        ]
    },
    {
        enunciado: "Qual o papel da mídia na promoção ou combate à intolerância religiosa?",
        alternativas: [
            {
                texto: "A mídia pode amplificar estereótipos e preconceitos religiosos, contribuindo para a intolerância.",
                afirmacao: "Quando a mídia transmite conteúdos que perpetuam estereótipos negativos sobre determinadas religiões, ela pode aumentar a intolerância ao reforçar preconceitos existentes e criar divisões entre grupos religiosos."
            },
            {
                texto: "A mídia tem o poder de educar e promover o entendimento entre diferentes religiões.",
                afirmacao: "Ao destacar histórias positivas e promover o diálogo inter-religioso, a mídia pode ajudar a combater a intolerância religiosa, promovendo uma maior compreensão e respeito entre diferentes grupos religiosos."
            }
        ]
    },
    {
        enunciado: "Como a educação pode ajudar a combater a intolerância religiosa?",
        alternativas: [
            {
                texto: "Programas educacionais focados em empatia e habilidades sociais podem combater preconceitos religiosos.",
                afirmacao: "Educação que promove habilidades de empatia e resolução de conflitos pode ajudar alunos a entender e respeitar as diferenças religiosas, diminuindo a intolerância através da conscientização e da comunicação."
            },
            {
                texto: "A inclusão de discussões sobre intolerância religiosa nos debates escolares pode aumentar a conscientização.",
                afirmacao: "Incorporar debates e discussões sobre intolerância religiosa no ambiente escolar pode ajudar os alunos a reconhecer e desafiar preconceitos, promovendo uma maior conscientização e empatia."
            }
        ]
    },
    {
        enunciado: "Quais estratégias podem ser eficazes para promover a tolerância religiosa em ambientes escolares?",
        alternativas: [
            {
                texto: "Organizar eventos escolares que celebrem a diversidade religiosa e promovam o respeito.",
                afirmacao: "Eventos como feiras culturais, palestras e celebrações de diferentes festivais religiosos podem aumentar a conscientização sobre a diversidade religiosa e encorajar a aceitação entre os alunos."
            },
            {
                texto: "Fomentar atividades e projetos que incentivem o diálogo e a colaboração entre alunos de diferentes religiões.",
                afirmacao: "Atividades que envolvem alunos de diferentes origens religiosas trabalhando juntos em projetos comuns podem ajudar a construir laços de respeito e entendimento mútuo, promovendo a tolerância religiosa."
            }
        ]
    },
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2024...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
