function pesquisar() {
    // Seleciona a seção HTML com o ID "resultados-pesquisa" onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
  
    // Itera sobre cada artista no array "artistas".
    for (let artista of artistas) {
      // Constrói o HTML para cada resultado da pesquisa, formatando os dados do artista.
      resultados += `<div class="item-resultado">
        <h2><a href="#" target="_blank">${artista.titulo}</a></h2>
        <p class="descricao-meta">${artista.descricao}</p>
        <a href="${artista.link}" target="_blank">Mais informações</a>
      </div>`;
    }
  
    // Atribui o HTML gerado para a seção de resultados, substituindo o conteúdo anterior.
    section.innerHTML = resultados;
  }