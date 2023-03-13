Este projeto contém os requisitos realizados por _[Scarlat Pereira](https://www.linkedin.com/in/scarlatpereira/)_ enquanto estudava na [Trybe](https://www.betrybe.com/) :rocket:

# Project Blogs API

Neste projeto desenvolvi uma API e um banco de dados para a produção de conteúdo para um blog! Para isso utilizei o Sequelize (biblioteca de ORM para Node.js)
para fazer um CRUD de posts.


## Arquitetura de Software MSC + Sequelize

MSC + Sequelize
:-------------------------:|
![desenho](https://user-images.githubusercontent.com/108958216/224708934-4f53477b-be70-492b-be34-c97f0077cb6d.png)

---

## Demo
![Gravação de tela de 13-03-2023 09_42_13 (1)](https://user-images.githubusercontent.com/108958216/224710407-8c3cd221-3ed8-42eb-a198-49c85b3699c6.gif)

## Instalação do projeto localmente:

 Após cada um dos passos, haverá um exemplo do comando a ser digitado para fazer o que está sendo pedido, caso tenha dificuldades e o exemplo não seja suficiente, não hesite em me contatar em engcivil.scarlat@gmail.com
 
 1. Abra o terminal e crie um diretório no local de sua preferência com o comando **mkdir**:
```javascript
  mkdir projetos
```

2. Entre no diretório que acabou de criar e depois clone o projeto:
```javascript
  cd projetos
  git clone git@github.com:scarlat-pereira/project-blogs-api.git
```

3. Acesse o diretório do projeto e depois utilize o comando **npm i** para instalar todas as dependências necessárias:
```javascript
  cd project-blogs-api
  npm i
```

- ✨ **Dica:** Caso queira utilizar _Docker_ para rodar os testes localmente e validar as funcionalidades, basta seguir as seguintes instruções:

  **:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**


  > :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d --build`.

  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;

  - Esses serviços irão inicializar um container chamado `blogs_api` e outro chamado `blogs_api_db`;

  - A partir daqui você pode rodar o container `blogs_api` via CLI ou abri-lo no VS Code;

  > :information_source: Use o comando `docker exec -it blogs_api bash`.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > :information_source: Instale as dependências [**Caso existam**] com `npm install`. (Instale dentro do container)
  
  - **:warning: Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  - **:warning: Atenção:** O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

  - **:warning: Atenção:** Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

## Habilidades Desenvolvidas

Neste projeto, desenvolvi as seguintes habilidades:

 - Criar endpoints que estarão conectados ao banco de dados seguindo os princípios do REST;
 - Utilizar o Sequelize para fazer um CRUD de postagens;

 ## Escopo do Projeto

## 1 - Crie migrations para as tabelas `users`, `categories`, `blog_posts`, `posts_categories`

## 2 - Crie o modelo `User` em `src/models/User.js` com as propriedades corretas

## 3 - Sua aplicação deve ter o endpoint POST `/login`

## 4 - Sua aplicação deve ter o endpoint POST `/user`

## 5 - Sua aplicação deve ter o endpoint GET `/user`

## 6 - Sua aplicação deve ter o endpoint GET `/user/:id`

## 7 - Crie o modelo `Category` em `src/models/Category.js` com as propriedades corretas

## 8 - Sua aplicação deve ter o endpoint POST `/categories`

## 9 - Sua aplicação deve ter o endpoint GET `/categories`

## 10 - Crie o modelo `BlogPost` em `src/models/BlogPost.js` com as propriedades e associações corretas

## 11 - Crie o modelo `PostCategory` em `src/models/PostCategory.js` com as propriedades e associações corretas

## 12 - Sua aplicação deve ter o endpoint POST `/post`

## 13 - Sua aplicação deve ter o endpoint GET `/post`

## 14 - Sua aplicação deve ter o endpoint GET `/post/:id`

## 15 - Sua aplicação deve ter o endpoint PUT `/post/:id`

## 16 - Sua aplicação deve ter o endpoint DELETE `/post/:id`

## 17 - Sua aplicação deve ter o endpoint DELETE `/user/me`

## 18 - Sua aplicação deve ter o endpoint GET `/post/search?q=:searchTerm`
