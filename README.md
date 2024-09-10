## Desvendando a Máquina de Buscar Jogos: Seu Guia Rápido e Divertido! - Imersão Dev com Google GEMINI

**O que essa aplicação faz?**

Imagine ter uma biblioteca gigante de jogos, mas estar perdido em meio a tantos títulos. Essa aplicação é como um detetive particular que encontra o jogo que você procura em um piscar de olhos! 

**Como funciona a mágica?**

1. **Digite e Descubra:** Digite o nome de um jogo ou até mesmo uma palavra-chave relacionada (por exemplo, "jogos de aventura" ou "plataforma") na barra de pesquisa.
2. **A Busca Começa:** A aplicação vasculha uma lista enorme de jogos (armazenada no arquivo `dados.js`) procurando por jogos que combinem com a sua busca. Essa lista contém informações como o título do jogo, uma breve descrição e até mesmo algumas palavras-chave.
3. **Resultados Instantâneos:** Se encontrar algum jogo que combine com a sua pesquisa, a aplicação exibe os resultados de forma organizada, com o título do jogo, uma descrição e um link para saber mais.

**Mas como a aplicação sabe o que você está procurando?**

A inteligência por trás dessa aplicação está no código JavaScript, mais especificamente na função `pesquisar()`. Essa função faz o seguinte:

* **Pega a sua pesquisa:** Quando você clica no botão "Pesquisar", a função pega o texto que você digitou na caixa de pesquisa.
* **Transforma tudo em minúsculo:** Para facilitar a comparação, a função transforma tanto a sua pesquisa quanto os nomes dos jogos em letras minúsculas.
* **Procura por coincidências:** A função compara a sua pesquisa com o título, a descrição e as palavras-chave de cada jogo. Se encontrar alguma palavra da sua pesquisa dentro do jogo, ele considera que é um resultado válido.
* **Exibe os resultados:** Se encontrar algum jogo que combine, a função cria um card bonito com as informações do jogo e exibe na tela.

**E se não encontrar nada?**

Não se preocupe! Se a aplicação não encontrar nenhum jogo que combine com a sua pesquisa, ela te avisa gentilmente que não encontrou nada.

**Curiosidade:**

O arquivo `dados.js` é como um catálogo de jogos. É lá que estão armazenadas todas as informações sobre os jogos que a aplicação conhece. Se você quiser adicionar mais jogos, é só editar esse arquivo.

**Em resumo:**

Essa aplicação é uma ferramenta simples e eficaz para quem ama jogos e quer encontrar novos títulos para jogar. É como ter um guia de jogos personalizado na palma da sua mão!

**Contribua para esse projeto:**

Se você é um desenvolvedor e quer contribuir para esse projeto, fique à vontade para fazer um fork e adicionar novas funcionalidades ou melhorar o código existente.

**Vamos juntos criar a maior biblioteca de jogos online!** 

**Tecnologias Utilizadas:**

* **HTML:** Estrutura da página
* **CSS:** Estilização da página
* **JavaScript:** Lógica da aplicação

**Como usar:**

1. **Clone o repositório:** `git clone https://github.com/seu-usuario/seu-repositorio.git`
2. **Abra o projeto:** Abra o arquivo `index.html` em seu navegador.

**Contribuições:**

Contribuições são bem-vindas! Abra um pull request para propor suas alterações.


**Agradecimentos:**

Gostaria de Agradecer a Alura e aos Orientadores (Guilherme Lima, Luciano Martins e Rafaella Ballerini da Imersão.
