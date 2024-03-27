const perguntas = [
    {
        pergunta: "O que significa a sigla DOM em JavaScript?",
        respostas: [
            "Document Object Model",
            "Data Object Model",
            "Dynamic Object Model",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        respostas: [
            "Atribuição",
            "Igualdade estrita",
            "Maior que",
        ],
        correta: 1
    },
    {
        pergunta: "Como você declara uma variável em JavaScript?",
        respostas: [
            "var myVar;",
            "variable myVar;",
            "let myVar;",
        ],
        correta: 2
    },
    {
        pergunta: "O que é closure em JavaScript?",
        respostas: [
            "Uma função que não retorna valor",
            "Um objeto que contém métodos",
            "Uma função que tem acesso a variáveis externas a ela",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a finalidade do método 'querySelector' em JavaScript?",
        respostas: [
            "Selecionar vários elementos",
            "Selecionar o primeiro elemento que corresponde a um seletor CSS",
            "Selecionar elementos pelo nome da tag",
        ],
        correta: 1
    },
    {
        pergunta: "O que é o JSON em JavaScript?",
        respostas: [
            "Uma linguagem de programação",
            "Um formato de dados para troca de informações",
            "Um tipo de estrutura de repetição",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do método 'push' em um array?",
        respostas: [
            "Remover o último elemento do array",
            "Adicionar um elemento no final do array",
            "Inverter a ordem dos elementos no array",
        ],
        correta: 1
    },
    {
        pergunta: "O que é o evento 'click' em JavaScript?",
        respostas: [
            "Um evento relacionado ao teclado",
            "Um evento relacionado à rotação do dispositivo",
            "Um evento relacionado ao clique do mouse",
        ],
        correta: 2
    },
    {
        pergunta: "Como você comenta uma linha de código em JavaScript?",
        respostas: [
            "// Comentário",
            "/* Comentário */",
            "# Comentário",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
        respostas: [
            "Não há diferença, são sinônimos",
            "'null' é atribuído explicitamente pelo programador, 'undefined' é atribuído automaticamente pelo JavaScript",
            "'undefined' é utilizado para representar ausência de valor, 'null' é utilizado para representar um valor vazio",
        ],
        correta: 1
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template') // função de pesquisa que busca o seletor. No caso, estamos usando o "template" criado no "index.html"

const corretas = new Set() 
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas){
    const quizItem = template.content.cloneNode(true) // cloneNode é uma função que vai clonar o nó. No caso, passando "true" como parâmetro, ela irá clonar todos os "nodes" existentes em "template"

    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)

        dt.querySelector('span').textContent = resposta

        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const isCorreta = event.target.value == item.correta

            corretas.delete(item)

            if (isCorreta){
                corretas.add(item)
            }
            
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)
    }
    
    quizItem.querySelector('dl dt').remove()

    // coloca as perguntas e respostas na tela
    quiz.appendChild(quizItem)
}