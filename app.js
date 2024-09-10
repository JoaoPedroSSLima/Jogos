function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");


    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value;
    

    if (!campoPesquisa) {
       
        section.innerHTML = "<p> Nada Foi encontrado. Você não digitou o nome de um jogo válido </p>";
        return 

    }
    
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    campoPesquisa = campoPesquisa.toLowerCase()

    
   
        // cria um novo elemento
        for (let jogo of jogos) {
            titulo = jogo.titulo.toLowerCase()
            descricao = jogo.descricao.toLowerCase()
            tags = tags.toLowerCase()

            if (titulo.includes(campoPesquisa) ||descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
    
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="${jogo.link}" target="_blank">${jogo.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${jogo.descricao}</p>
                    
                    <a href="${jogo.link}" target="_blank">Mais Informações</a>
                </div>
            `;
        }

    } 

    if (!resultados) {
        resultados = "<p> Nada Foi encontrado </p>"


    }
        section.innerHTML = resultados;
    
}




