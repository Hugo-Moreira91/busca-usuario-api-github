# Busca de usuário utilizando API do GitHub

<div align='center'>

![Quantidade de linguagens utilizadas](https://img.shields.io/badge/Linguagens-3-darkblue?style=flat)
![API utilizada](https://img.shields.io/badge/API-GitHub-purple?style=flat)

</div>

Projeto que retorna informações básicas de usuários cadastrados na plataforma do [GitHub](https://github.com/), bem como repositórios.

## Tabela de conteúdos

- [Visão Geral](#visão-geral)
    - [Projeto](#projeto)
    - [Funcionamento](#funcionamento)
    - [Links](#links)
- [Processo de desenvolvimento](#processo-de-desenvolvimento)
    - [Construído com](#construído-com)
    - [O que aprendi](#o-que-aprendi)
    - [Aprimoramento contínuo](#aprimoramento-contínuo)
    - [Links úteis](#links-úteis)
- [Autor](#autor)
- [Agradecimentos](#agradecimentos)


## Visão Geral

### Projeto

Usuários do projeto poderão:

- Visualizar o projeto em qualquer tamanho de tela, devido a sua responsividade
- Pesquisar por usuários cadastrados na plataforma do GitHub
- Visualizar nome, bio e foto do usuário cadastrado
- Acessar os dez últimos repositórios no GitHub do usuário pesquisado

Vale ressaltar que este projeto retorna apenas usuários com o perfil público no GitHub.

### Funcionamento

Abaixo segue uma imagem do projeto assim que a página é carregada:

![Imagem da versão desktop](/src/design/desktop-design.png)

Ao tentar buscar um usuário com o campo vazio, um alerta será exibido:

![Imagem do alerta para o campo vazio](/src/design/alert-empty-input.png)

Caso o usuário não exista (não há um cadastro), uma mensagem é exibida:

![Imagem de usuário não encontrado](/src/design/user-not-found-message.png)

Por último, caso o usuário inserido no campo possua um cadastro na plataforma GitHub, suas informações serão exibidas:

![Projeto em funcionamento para um usuário cadastrado no GitHub](/src/design/project-working.gif)

### Links

- Endereço da solução: [Clique aqui para acessar o repositório do projeto](https://github.com/Hugo-Moreira91/busca-usuario-api-github)
- Deploy: [Clique aqui para visualizar o projeto via GitHub Pages](https://hugo-moreira91.github.io/busca-usuario-api-github/)

## Processo de desenvolvimento

### Construído com

- Marcações semânticas HTML5 para estruturação
- Propriedades CSS para estilização
- JavaScript
- Flexbox
- Responsividade
- Objetos e serviços
- [GitHub REST API](https://docs.github.com/en/rest?apiVersion=2022-11-28)

### O que aprendi

- Uso de funções assíncronas, bem como a espera da resposta oriunda de requisições a API
- Uso do tipo keyup para o método addEventListener() sobre o campo de input, no qual traz uma acessibilidade adicional, podendo o usuário pressionar Enter para exibição das informações
- Endpoints com parâmetros literais, no método de requisição a API 
- Criação de um objeto para o usuário pesquisado, com métodos para armazenar suas informações relevantes visadas pelo projeto
- Criação de um objeto para renderização de elementos HTML, juntamente com as informações armazenadas no objeto usuário
- Importação nomeada de módulos utilizando caminhos relativos

### Aprimoramento contínuo

Destaco a separação de responsabilidades em arquivos e pastas, bem como a criação e uso de objetos, importação de módulos, refatoração e validação de dados.

### Links úteis

- [Funções assíncronas](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function) - Auxiliou-me na construção das funções assíncronas, importantes em requisições de API's
- [Método addEventListener()](https://www.w3schools.com/js/js_htmldom_eventlistener.asp) - Auxiliou-me na exibição das informações buscadas, seja através do clique no botão ou pressionando a tecla Enter (sendo este último um conhecimento novo para mim)
- [Objetos em JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics) - Auxiliou-me na sintaxe de atributos e métodos dos objetos, além do seu uso para exibição das informações pertinentes para o projeto
- [Documentação da API do GitHub - requisições para usuários](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28) - Importante documentação para auxiliar no desenvolvimento do projeto, com informações referentes aos endpoints utilizados no projeto: um para extrair as informações básicas do usuário pesquisado (foto, nome e bio) e outro para buscar seus repositórios

## Autor

- LinkedIn - [Hugo Moreira](https://www.linkedin.com/in/hugo-c%C3%A9sar-santos-moreira-a10823248/)
- GitHub - [@Hugo-Moreira91](https://github.com/Hugo-Moreira91)
- Frontend Mentor - [@Hugo-Moreira91](https://www.frontendmentor.io/profile/Hugo-Moreira91)

Sempre em busca de conhecimento 🚀

Feito com ❤️

## Agradecimentos

Agradecer aos conhecimentos passados pelos irmãos Roberto e Ricardo Dias, do [Dev em Dobro](https://www.instagram.com/devemdobro/#), em seu curso de desenvolvedor web full stack, denominado Dev Quest, bem como toda a sua comunidade no Discord. 🫶🏼