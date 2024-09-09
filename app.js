function pesquisar() {
    // Seleciona a seção HTML com o ID "resultados-pesquisa" onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
      section.innerHTML = "Nada foi encontrado.";
      return;
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada artista no array "artistas".
    for (let artista of artistas) {
      titulo = artista.titulo.toLowerCase();
      descricao = artista.descricao.toLowerCase();
      tags = artista.tags.toLowerCase();
      // Constrói o HTML para cada resultado da pesquisa, formatando os dados do artista.
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resultados += `<div class="item-resultado">
            <h2><a href="#" target="_blank">${artista.titulo}</a></h2>
            <p class="descricao-meta">${artista.descricao}</p>
            <a href="${artista.link}" target="_blank">Mais informações</a>
          </div>`;
      }
    }

    if (!resultados) {
      section.innerHTML = "Nada foi encontrado. Este assunto não está presente em nossa base de conhecimento.";
      return;
    }
  
    // Atribui o HTML gerado para a seção de resultados, substituindo o conteúdo anterior.
    section.innerHTML = resultados;
  }