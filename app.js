console.log(dados); // Imprime no console os dados que serão utilizados na pesquisa.

function pesquisar() {

    let section = document.getElementById("resultados-pesquisa"); // Obtém a seção HTML onde os resultados serão exibidos, pelo ID.

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //se campoPesquisa não for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o título do livro ou autor</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let autor = "";

    // Itera sobre cada elemento (dado) da lista de dados.
    for (let dado of dados) {
        titulo = dado.title.toLowerCase();
        autor = dado.author.toLowerCase();
        //se titulo includes campoPesquisa
        if (dado.title.includes(campoPesquisa) || dado.author.includes(campoPesquisa)) {
            //se campoPesquisa não for uma string sem nada

            //cria um novo elemento com as informações do dado.
            resultados += `
            <div class="item-resultado">
            <h2>${dado.title}</h2> <p>${dado.description}</p> <p class="autor">${dado.author}, ${dado.year}</p> <a href="${dado.linkInfo}" target="_blank">Mais informações</a> </div>
            `;
        }

    }

    if(!resultados){
        resultados = "<p>Nenhum resultado encontrado!</p>";
    }

    section.innerHTML = resultados;
}