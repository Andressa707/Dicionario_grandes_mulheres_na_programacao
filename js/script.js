function carregaDicionario() {
  var biografias = {
    bio01: {
      nome: "Grace Hopper",
    imagem: "./img/Grace Hopper_png.png",
    descricao:
      " Pioneira da computação, liderou a criação do primeiro compilador, um programa que traduz linguagens humanas em código de máquina. Ela também foi uma das mentes por trás da linguagem COBOL, que tornou a programação acessível para negócios. Seu legado é evidente na popularização de linguagens de programação e no impacto em uma indústria em crescimento.",
    citacao:
      "O computador não é mais inteligente do que o lápis; é apenas mais rápido.",
  },
bio02: { 
  nome: "Ada Lovelace",
    imagem: "./img/Ada Lovelace_png.png",
    descricao:
      "Reconhecida como a primeira programadora, pois ela escreveu o primeiro algoritmo destinado a ser processado por uma máquina. Seu trabalho estabeleceu as bases para a programação de computadores e a compreensão de que as máquinas poderiam realizar muito mais do que simples cálculos matemáticos, prevendo assim o futuro da computação.",
    citacao:
      "A máquina pode analisar, mas não pode pensar.",
  },

      bio03: { 
      nome: "Jean E. Samment",
      imagem: "./img/Jean E Sammet_png.png",
      descricao:
      "Foi fundamental na evolução das linguagens de programação. Co-criadora da linguagem FORMAC e contribuidora da COBOL, ela destacou a importância de linguagens legíveis e expressivas. Seu trabalho influenciou o desenvolvimento de linguagens de alto nível e padronizações, abrindo caminho para a moderna programação.",
      citacao:
      "A linguagem não é apenas um meio de instrução; é um veículo de expressão",
      },

bio04: { 
  nome: "Sister Mary Kenneth Keller",
    imagem: "./img/Sister Mary Kenneth Keller_png.png",       
    descricao: "Irmã Mary Kenneth Keller fez história como a primeira mulher a obter um PhD em Ciência da Computação. Ela contribuiu para o desenvolvimento da linguagem de programação BASIC, buscando tornar a computação mais acessível a todos. Seu trabalho influenciou a educação em computação e incentivou a diversidade na área.",
    citacao:
      " computação não deve ser apenas para os matemáticos.",
  },

bio05: {
  nome: "Adele Goldberg",
  imagem: "./img/Adele Golberg_png.png",
  descricao:
    "Contribuiu significativamente para a interface humano-computador. Ela liderou o desenvolvimento do ambiente de programação Smalltalk e do sistema gráfico Alto, estabelecendo as bases para as interfaces gráficas modernas e promovendo a programação orientada a objetos.",
  citacao:
    "Interface não é sobre agradar o usuário, mas permitir que o usuário faça o que ele precisa fazer.",
},
bio06: {
  nome: "Radia Perlman",
  imagem: "./img/Radia Perlman_png.png",
  descricao:
    "É uma figura influente na área de redes de computadores. Ela desenvolveu o protocolo de spanning tree (STP), que permitiu a expansão das redes Ethernet, tornando a internet mais escalável e confiável. Seu trabalho teve um impacto duradouro na infraestrutura da internet.",
  citacao:
    "Não gosto de ser chamada de 'Mãe da Internet",
},
};

var content = document.getElementById("content");

for (var bio in biografias) {
    var cardHTML = `
    <section id="content">
    <nav class="container">
        <div class="card">
            <div class="patterns">
                <svg width="250" height="100">
                    <text x="10" y="50" class="title">${biografias[bio].nome}</text>
                </svg>
            </div>
            <img class="card_img" src="${biografias[bio].imagem}">
            <details>
                <summary>Ver mais</summary>
                <div class="card_content">
                    <p class="paragrafo">${biografias[bio].descricao}</p>
                    <blockquote class="v8"><q>${biografias[bio].citacao}</q></blockquote>
                </div>
            </details>
        </div>
      </nav>
      </secrion>
    `;

    content.innerHTML += cardHTML;
  }
}

carregaDicionario();





