# Checku Aplicação Web

Aplicação React 

#  Como executar

**node.js** é necessário para correr uma aplicação _React_. O guia de instalação pode ser encontrado [aqui](https://nodejs.org/en/).

Ao instalar o _node.js_, o _npm_ também deve estar instalado no computador.

## Instalar dependências

1. Clonar o repositório
2. ```cd front-end```
3. Instalar as dependências utilizando ```npm install```.

# Como executra a aplicação _web_

Dentro do diretório do projeto, correr o seguinte:

1. `npm run dev`
2. A aplicação deve estar a correr em [http://localhost:5173](http://localhost:5173)


# Docker

Foi preparado um ficheiro _Dockerfile_, de acordo com as referências, com a informação necessária para o _deploy_ desta aplicação _React_.


## Utilização da API do _Spting_

Quando o utilizador é autenticado, o seu token de autenticação é armazenado em armazenamento local com a chave `token`.

Para usar a API _Spring_, cada solicitação deve enviar o token de autenticação no cabeçalho, excepto no _login_ e no _Sign In_. 


COLOCAR EXEMPLOS

