let artistas = [
    {
      titulo: "William Shakespeare",
      descricao: "Considerado o maior dramaturgo de todos os tempos, Shakespeare é conhecido por suas peças atemporais como Romeu e Julieta, Hamlet e Macbeth.",
      link: "https://en.wikipedia.org/wiki/William_Shakespeare",
      tags: "clássicos, elisabetano, romance, tragédia, comédia, humanismo"
    },
    {
      titulo: "Augusto Boal",
      descricao: "Dramaturgo e diretor brasileiro, criador do Teatro do Oprimido, uma forma de teatro político e socialmente engajado.",
      link: "https://pt.wikipedia.org/wiki/Brasil",
      tags: "teatro do oprimido, teatro político, teatro social, Brasil, engajamento social"
    },
    {
      titulo: "Nelson Rodrigues",
      descricao: "Dramaturgo brasileiro, conhecido por suas peças realistas e polêmicas que exploravam temas como sexo, violência e hipocrisia.",
      link: "https://pt.wikipedia.org/wiki/Nelson_Rodrigues",
      tags: "realismo, polêmica, Brasil, drama social, sexo, violência"
    },
    {
      titulo: "Bertolt Brecht",
      descricao: "Dramaturgo alemão, um dos principais nomes do teatro épico, que buscava alienar o público para provocar reflexão crítica sobre a sociedade.",
      link: "https://pt.wikipedia.org/wiki/Bertolt_Brecht",
      tags: "teatro épico, alemão, marxismo, alienação, crítica social"
    },
    {
      titulo: "Eugène Ionesco",
      descricao: "Dramaturgo romeno, um dos principais representantes do teatro do absurdo, que questionava a lógica e a razão através de situações absurdas e diálogos desconexos.",
      link: "https://pt.wikipedia.org/wiki/Eugène_Ionesco",
      tags: "teatro do absurdo, romeno, existencialismo, absurdo, pós-modernismo"
    },
    {
      titulo: "Arthur Miller",
      descricao: "Dramaturgo americano, conhecido por suas peças que abordavam temas como a sociedade americana, a justiça e a moralidade, como em 'A Bruxa de Salem'.",
      link: "https://en.wikipedia.org/wiki/Arthur_Miller",
      link: "https://en.wikipedia.org/wiki/Arthur_Miller",
      tags: "americano, drama social, justiça, moralidade, macarthismo"
    },
    {
      titulo: "Tennessee Williams",
      descricao: "Dramaturgo americano, conhecido por suas peças que exploravam temas como a solidão, o desejo e a decadência, como em 'Um Bonde Chamado Desejo'.",
      link: "https://en.wikipedia.org/wiki/Tennessee_Williams",
      tags: "americano, drama psicológico, solidão, desejo, decadência"
    },
    {
      titulo: "Anton Chekhov",
      descricao: "Dramaturgo russo, conhecido por suas peças realistas e tragicômicas que exploravam a psicologia dos personagens e a vida cotidiana da burguesia.",
      link: "https://en.wikipedia.org/wiki/Anton_Chekhov",
      tags: "realismo, tragicomédia, russo, psicologia, burguesia"
    },
    {
      titulo: "Molière",
      descricao: "Dramaturgo francês, um dos principais nomes da comédia clássica, conhecido por suas sátiras sociais e críticas à hipocrisia.",
      link: "https://pt.wikipedia.org/wiki/Molière",
      tags: "comédia, clássico, francês, sátira social, hipocrisia"
    },
    {
      titulo: "Lope de Vega",
      descricao: "Dramaturgo espanhol, um dos mais prolíficos da história do teatro, conhecido por suas comédias e dramas históricos.",
      link: "https://pt.wikipedia.org/wiki/Lope_de_Vega",
      tags: "espanhol, barroco, comédia, drama histórico, prolífico"
    },
    {
      titulo: "Cacilda Becker",
      descricao: "Atriz brasileira considerada um dos maiores ícones do teatro nacional. Conhecida por sua intensidade e versatilidade, interpretou diversos papéis clássicos e contemporâneos.",
      link: "https://pt.wikipedia.org/wiki/Cacilda_Becker",
      tags: "atriz, Brasil, teatro, clássico, contemporâneo"
    },
    {
      titulo: "Gianfrancesco Guarnieri",
      descricao: "Dramaturgo brasileiro, conhecido por suas peças que abordavam temas sociais e políticos, como a desigualdade e a luta de classes.",
      link: "https://pt.wikipedia.org/wiki/Gianfrancesco_Guarnieri",
      tags: "Brasil, drama social, político, desigualdade, luta de classes"
    },
    {
      titulo: "Plínio Marcos",
      descricao: "Dramaturgo e ator brasileiro, conhecido por suas peças que denunciavam a violência e a marginalidade, como 'Navalha na Carne'.",
      link: "https://pt.wikipedia.org/wiki/Plínio_Marcos",
      tags: "Brasil, drama social, violência, marginalidade, realismo"
    },
    {
      titulo: "Zé Celso Martinez Corrêa",
      descricao: "Diretor teatral brasileiro, conhecido por suas montagens polêmicas e inovadoras, que questionavam os padrões sociais e estéticos.",
      link: "https://pt.wikipedia.org/wiki/Zé_Celso_Martinez_Corrêa",
      tags: "Brasil, teatro experimental, polêmica, inovação, vanguarda"
    },
    {
      titulo: "Hilda Hilst",
      descricao: "Escritora e dramaturga brasileira, conhecida por sua obra experimental e ousada, que explorava temas como sexualidade e identidade.",
      link: "https://pt.wikipedia.org/wiki/Hilda_Hilst",
      tags: "Brasil, literatura, drama, experimental, feminismo, sexualidade"
    },
    {
        titulo: "Fyodor Dostoyevsky",
        descricao: "Um dos maiores romancistas russos, conhecido por suas obras que exploram a psicologia humana e questões existenciais.",
        link: "https://en.wikipedia.org/wiki/Fyodor_Dostoyevsky",
        tags: "russo, realismo, psicológico, existencialismo, crime, religião"
    },
    {
        titulo: "Franz Kafka",
        descricao: "Escritor tcheco conhecido por suas obras que exploram temas como alienação, burocracia e absurdo.",
        link: "https://en.wikipedia.org/wiki/Franz_Kafka",
        tags: "tcheco, absurdo, alegoria, alienação, burocracia"
    },
    {
        titulo: "Gabriel García Márquez",
        descricao: "Escritor colombiano, um dos principais expoentes do realismo mágico.",
        link: "https://en.wikipedia.org/wiki/Gabriel_García_Márquez",
        tags: "colombiano, realismo mágico, latinoamericano, fantasia"
    },
    {
        titulo: "Virginia Woolf",
        descricao: "Escritora inglesa, pioneira do modernismo, conhecida por sua exploração da consciência interior.",
        link: "https://en.wikipedia.org/wiki/Virginia_Woolf",
        tags: "inglesa, modernismo, fluxo de consciência, feminismo"
    },
    {
        titulo: "James Joyce",
        descricao: "Escritor irlandês, considerado um dos mais influentes do século XX, conhecido por sua experimentação formal.",
        link: "https://en.wikipedia.org/wiki/James_Joyce",
        tags: "irlandês, modernismo, experimental, linguagem"
    },
    {
        titulo: "Jorge Luis Borges",
        descricao: "Escritor argentino, conhecido por seus contos filosóficos e pela exploração de temas como tempo, identidade e infinito.",
        link: "https://en.wikipedia.org/wiki/Jorge_Luis_Borges",
        tags: "argentino, ficção científica, fantasia, filosofia"
    },
    {
        titulo: "Toni Morrison",
        descricao: "Escritora afro-americana, conhecida por suas obras que exploram a experiência negra nos Estados Unidos.",
        link: "https://en.wikipedia.org/wiki/Toni_Morrison",
        tags: "americana, afro-americana, feminismo, racismo"
    },
    {
        titulo: "Haruki Murakami",
        descricao: "Escritor japonês contemporâneo, conhecido por suas narrativas surrealistas e oníricas.",
        link: "https://en.wikipedia.org/wiki/Haruki_Murakami",
        tags: "japonês, contemporâneo, surrealismo, fantasia"
    },
    {
        titulo: "Clarice Lispector",
        descricao: "Escritora brasileira, conhecida por sua prosa introspectiva e experimental.",
        link: "https://pt.wikipedia.org/wiki/Clarice_Lispector",
        tags: "brasileira, modernismo, psicologia, introspecção"
    },
    {
        titulo: "Milan Kundera",
        descricao: "Escritor tcheco, conhecido por suas obras que exploram temas como amor, liberdade e identidade.",
        link: "https://en.wikipedia.org/wiki/Milan_Kundera",
        tags: "tcheco, pós-modernismo, filosofia, amor, liberdade"
    },
    {
        titulo: "Alfred Hitchcock",
        descricao: "Mestre do suspense, conhecido por seus filmes que exploram temas como medo, paranoia e obsessão.",
        link: "https://en.wikipedia.org/wiki/Alfred_Hitchcock",
        tags: "suspense, thriller, psicológico, noir"
    },
  ];